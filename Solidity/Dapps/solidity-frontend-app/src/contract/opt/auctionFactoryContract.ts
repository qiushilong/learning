import { ethers } from 'ethers'

// const CONTRACT_ADDRESS = '0xa81EB0af9dC6F717F9d189A3aFfEcac086C365BF'
// const CONTRACT_ADDRESS = '0x430fFA6EC68C128Ac753E993EFC068cC5CbAFBCE' 
// const CONTRACT_ADDRESS = '0xBE97F38DE661fAa8683bA3A8D409126267f85C1A'
// const CONTRACT_ADDRESS = '0x623aa6fe01fa76f27ec5c00f8d6f6771c54b7901'
const CONTRACT_ADDRESS = '0xd3eb5baebf6beac6f77d1b35ab84a27f0850de5d'

const auctionFactoryAbi = [
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
        "inputs": [
            {
                "internalType": "bool",
                "name": "ended",
                "type": "bool"
            }
        ],
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

function getContract() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, auctionFactoryAbi, provider);
    return contract;
}

export async function getDetail({ ended }: { ended: boolean }) {
    try {
        const contract = getContract();
        const result = await contract.getAllAuctionsDetails(ended);

        const addresses = result[0]
        const beneficiaries = result[1]
        const auctionEndTimes = result[2]
        const highestBidders = result[3]
        const highestBids = result[4]
        const auctionItemNames = result[5]

        let obj = [];
        if (addresses.length > 0) {
            obj = addresses.map((item: string, index: number) => ({
                address: item,
                beneficiary: beneficiaries[index],
                auctionEndTime: Number(auctionEndTimes[index]),
                highestBidder: highestBidders[index],
                highestBid: Number(highestBids[index]),
                auctionItemName: auctionItemNames[index],
            }))
        }

        return obj;

    } catch (error) {
        console.error(error)
    }
    return []
}

export async function createAuction(name: string, second: number) {
    if (typeof window.ethereum !== "undefined") {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const auctionFactory = new ethers.Contract(CONTRACT_ADDRESS, auctionFactoryAbi, signer);
            const transaction = await auctionFactory.createAuction(second, name);
            const receipt = await transaction.wait();
            console.log("拍卖已成功创建");
        } catch (error) {
            console.error("创建拍卖过程中出现错误:", error);
        }
    } else {
        console.log("以太坊钱包插件未安装");
    }
}

export function listenerEvent({ create }: { create: (...args: any[]) => void }) {
    const contract = getContract();
    contract.on('AuctionCreated', create)
}

export function closeListenerEvent() {
    const contract = getContract();
    contract.removeAllListeners("AuctionCreated");
}