import { ethers } from 'ethers'

const auctionAbi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_biddingTime",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_beneficiary",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_auctionItemName",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_factory",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "winner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "AuctionEnded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "bidder",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "HighestBidIncreased",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "auctionEnd",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "auctionEndTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "auctionItemName",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "beneficiary",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "bid",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ended",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "factory",
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
        "inputs": [],
        "name": "highestBid",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "highestBidder",
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
        "name": "pendingReturns",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export async function bid(address: string, value: number) {
    if (typeof window.ethereum !== "undefined" && address) {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();

            const auction = new ethers.Contract(address, auctionAbi, signer);

            const wei = ethers.parseUnits(String(value), 'ether');

            console.log('wei', wei)

            const transaction = await auction.bid({ value: wei })

            const receipt = await transaction.wait();

            console.log('bid -- receipt', receipt)

            console.log("竞价已成功");
        } catch (error) {
            console.error("竞价过程中出现错误:", error);
        }
    } else {
        console.log("以太坊钱包插件未安装");
    }
}

export async function end(address: string) {
    if (typeof window.ethereum !== "undefined" && address) {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();

            const auction = new ethers.Contract(address, auctionAbi, signer);

            const transaction = await auction.auctionEnd();

            const receipt = await transaction.wait();

            console.log('end -- receipt', receipt)

            console.log("结束拍卖成功");
        } catch (error) {
            console.error("结束拍卖过程中出现错误:", error);
        }
    } else {
        console.log("以太坊钱包插件未安装");
    }
}

export async function returnMoney(address: string) {
    if (typeof window.ethereum !== "undefined" && address) {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();

            const auction = new ethers.Contract(address, auctionAbi, signer);

            const transaction = await auction.withdraw();

            const receipt = await transaction.wait();

            console.log('end -- receipt', receipt)

            console.log("退款成功");
        } catch (error) {
            console.error("退款过程中出现错误:", error);
        }
    } else {
        console.log("以太坊钱包插件未安装");
    }
}