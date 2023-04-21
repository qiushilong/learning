// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Auction {
    address payable public beneficiary;
    uint public auctionEndTime;

    address public highestBidder;
    uint public highestBid;
    string public auctionItemName;
    address public factory;

    mapping(address => uint) public pendingReturns;

    bool public ended;

    event HighestBidIncreased(address bidder, uint amount);
    event AuctionEnded(address winner, uint amount);

    constructor(
        uint _biddingTime,
        address payable _beneficiary,
        string memory _auctionItemName,
        address _factory
    ) {
        beneficiary = _beneficiary;
        auctionEndTime = block.timestamp + _biddingTime;
        auctionItemName = _auctionItemName;
        factory = _factory;
    }

    function bid() public payable {
        require(block.timestamp <= auctionEndTime, unicode"拍卖已经结束！");
        require(msg.value > highestBid, unicode"已经有一个更高的出价了！");

        if (highestBid != 0) {
            pendingReturns[highestBidder] += highestBid;
        }

        highestBidder = msg.sender;
        highestBid = msg.value;
        emit HighestBidIncreased(msg.sender, msg.value);
    }

    function withdraw() public returns (bool) {
        uint amount = pendingReturns[msg.sender];
        if (amount > 0) {
            pendingReturns[msg.sender] = 0;

            if (!payable(msg.sender).send(amount)) {
                pendingReturns[msg.sender] = amount;
                return false;
            }
        }
        return true;
    }

    function auctionEnd() public {
        require(block.timestamp >= auctionEndTime, unicode"拍卖尚未结束！");
        require(!ended, unicode"拍卖已经结束！");

        ended = true;
        emit AuctionEnded(highestBidder, highestBid);

        beneficiary.transfer(highestBid);

        // 通知 AuctionFactory，该拍卖结束
        AuctionFactory(factory).auctionEnded(address(this));
    }
}

contract AuctionFactory {
    // auction 表示正在进行中的拍卖，endedAuction 表示已经结束的拍卖
    address[] public auctionAddresses;
    address[] public endedAuctionAddresses;
    mapping(address => Auction) public auctions;
    mapping(address => Auction) public endedAuctions;

    struct AuctionData {
        address auctionAddress;
        address beneficiary;
        uint auctionEndTime;
        address highestBidder;
        uint highestBid;
        string auctionItemName;
    }

    event AuctionCreated(
        address auctionAddress,
        address beneficiary,
        uint biddingTime,
        string auctionItemName
    );

    function createAuction(
        uint biddingTime,
        string memory auctionItemName
    ) public {
        Auction newAuction = new Auction(
            biddingTime,
            payable(msg.sender),
            auctionItemName,
            address(this)
        );
        address newAddress = address(newAuction);
        auctions[newAddress] = newAuction;
        auctionAddresses.push(newAddress);

        emit AuctionCreated(
            newAddress,
            msg.sender,
            biddingTime,
            auctionItemName
        );
    }

    function getAuctionAddresses(
        bool ended
    ) public view returns (address[] memory) {
        return ended ? endedAuctionAddresses : auctionAddresses;
    }

    function getAuction(
        address auctionAddress
    ) public view returns (AuctionData memory) {
        Auction auction = auctions[auctionAddress];

        return
            AuctionData({
                auctionAddress: auctionAddress,
                beneficiary: auction.beneficiary(),
                auctionEndTime: auction.auctionEndTime(),
                highestBidder: auction.highestBidder(),
                highestBid: auction.highestBid(),
                auctionItemName: auction.auctionItemName()
            });
    }

    function auctionEnded(address auctionAddress) public {
        require(
            auctions[auctionAddress] != Auction(address(0)),
            unicode"无效的拍卖地址！"
        );
        require(auctions[auctionAddress].ended(), unicode"该拍卖还未结束！");

        endedAuctions[auctionAddress] = auctions[auctionAddress];
        endedAuctionAddresses.push(auctionAddress);

        delete auctions[auctionAddress];
        removeAuctionAddress(auctionAddress);
    }

    function removeAuctionAddress(address auctionAddress) internal {
        uint length = auctionAddresses.length;

        for (uint i = 0; i < length; i++) {
            if (auctionAddresses[i] == auctionAddress) {
                for (uint j = i; j < length - 1; j++) {
                    auctionAddresses[j] = auctionAddresses[j + 1];
                }

                auctionAddresses.pop();
                break;
            }
        }
    }

    function getAllAuctionsDetails()
        public
        view
        returns (
            address[] memory addresses,
            address[] memory beneficiaries,
            uint[] memory auctionEndTimes,
            address[] memory highestBidders,
            uint[] memory highestBids,
            string[] memory auctionItemNames
        )
    {
        uint length = auctionAddresses.length;

        addresses = new address[](length);
        beneficiaries = new address[](length);
        auctionEndTimes = new uint[](length);
        highestBidders = new address[](length);
        highestBids = new uint[](length);
        auctionItemNames = new string[](length);

        for (uint i = 0; i < length; i++) {
            address auctionAddress = auctionAddresses[i];
            Auction auction = auctions[auctionAddress];

            addresses[i] = auctionAddress;
            beneficiaries[i] = auction.beneficiary();
            auctionEndTimes[i] = auction.auctionEndTime();
            highestBidders[i] = auction.highestBidder();
            highestBids[i] = auction.highestBid();
            auctionItemNames[i] = auction.auctionItemName();
        }
    }
}
