// import provider from "@/utils/provider"
import { ethers } from 'ethers'

// const CONTRACT_ADDRESS = '0xa81EB0af9dC6F717F9d189A3aFfEcac086C365BF'
const CONTRACT_ADDRESS = '0x430fFA6EC68C128Ac753E993EFC068cC5CbAFBCE'

export const auctionFactoryAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "auctionAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "beneficiary",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "biddingTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "auctionItemName",
                "type": "string"
            }
        ],
        "name": "AuctionCreated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "auctionAddresses",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "auctionAddress",
                "type": "address"
            }
        ],
        "name": "auctionEnded",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "auctions",
        "outputs": [
            {
                "internalType": "contract Auction",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "biddingTime",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "auctionItemName",
                "type": "string"
            }
        ],
        "name": "createAuction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "endedAuctionAddresses",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "endedAuctions",
        "outputs": [
            {
                "internalType": "contract Auction",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllAuctionsDetails",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "addresses",
                "type": "address[]"
            },
            {
                "internalType": "address[]",
                "name": "beneficiaries",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "auctionEndTimes",
                "type": "uint256[]"
            },
            {
                "internalType": "address[]",
                "name": "highestBidders",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "highestBids",
                "type": "uint256[]"
            },
            {
                "internalType": "string[]",
                "name": "auctionItemNames",
                "type": "string[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "auctionAddress",
                "type": "address"
            }
        ],
        "name": "getAuction",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "auctionAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "beneficiary",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "auctionEndTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "highestBidder",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "highestBid",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "auctionItemName",
                        "type": "string"
                    }
                ],
                "internalType": "struct AuctionFactory.AuctionData",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "ended",
                "type": "bool"
            }
        ],
        "name": "getAuctionAddresses",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

// const contract = new ethers.Contract(CONTRACT_ADDRESS, auctionFactoryAbi, provider);

function getContract() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, auctionFactoryAbi, provider);
    return contract;
}

export async function get() {
    const contract = getContract();
    const result = await contract.getAuctionAddresses(false);
    console.log(result);
}

export async function getDetail() {
    try {
        const contract = getContract();
        const result = await contract.getAllAuctionsDetails();
        console.log(result);

        const addresses = result[0]
        const beneficiaries = result[1]
        const auctionEndTimes = result[2]
        const highestBidders = result[3]
        const highestBids = result[4]
        const auctionItemNames = result[5]

        console.log('addresses,', addresses)

        const obj = addresses.map((item: string, index: number) => ({
            address: item,
            beneficiary: beneficiaries[index],
            auctionEndTime: Number(auctionEndTimes[index]),
            highestBidder: highestBidders[index],
            highestBid: Number(highestBids[index]),
            auctionItemName: auctionItemNames[index],
        }))

        console.log('obj', obj)

        return obj;

    } catch (error) {
        console.error(error)
    }
    return []
}


export async function createAuction() {
    if (typeof window.ethereum !== "undefined") {
        try {
            // 请求用户授权
            await window.ethereum.request({ method: "eth_requestAccounts" });

            // 创建 ethers 的 provider 和 signer
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();

            console.log('signer', signer)

            // 创建 AuctionFactory 合约实例
            const auctionFactory = new ethers.Contract(CONTRACT_ADDRESS, auctionFactoryAbi, signer);

            // 调用 createAuction 方法
            const transaction = await auctionFactory.createAuction(600, 'mac mini');

            // 等待交易被挖矿
            const receipt = await transaction.wait();

            console.log('receipt', receipt)

            console.log("拍卖已成功创建");
        } catch (error) {
            console.error("创建拍卖过程中出现错误:", error);
        }
    } else {
        console.log("以太坊钱包插件未安装");
    }
}
