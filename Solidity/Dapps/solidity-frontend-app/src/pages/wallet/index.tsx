// pages/connect-wallet.tsx

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Button, message } from 'antd'
import {provider} from '@/utils/provider'

const ConnectWallet = () => {
    const [account, setAccount] = useState<string | null>(null);
    const [balance, setBalance] = useState<string | null>(null);

    const [messageApi, contextHolder] = message.useMessage();

    const connectWallet = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                // 请求用户授权
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });

                // 获取用户账户地址
                const address = accounts[0];
                console.log('accounts', accounts)
                setAccount(address);

                // 获取余额
                const balance = await provider.getBalance(address);

                console.log('balance', balance)

                const formattedBalance = ethers.formatEther(balance);
                setBalance(formattedBalance);
            } catch (error) {
                messageApi.error('用户拒绝授权！');
                console.error("用户拒绝授权:", error);
            }
        } else {
            messageApi.error('以太坊钱包插件未安装！');
            console.log("以太坊钱包插件未安装！");
        }
    };

    return (
        <div>
            {contextHolder}
            <h1>连接钱包示例</h1>
            <p>账户：{account || '0x000000000000000000000000000000000000000'}</p>
            <p>余额：{balance || 0} ether</p>

            <Button type="primary" onClick={connectWallet}>连接钱包</Button>

        </div>
    );
};

export default ConnectWallet;
