import { useState, useEffect } from 'react'
import { Button, Table, Space } from 'antd'
import { get, createAuction, getDetail } from './contract'

const data_source_default: any[] = [];

const columns = [
    {
        title: '合约地址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '拍卖品',
        dataIndex: 'auctionItemName',
        key: 'auctionItemName',
    },
    {
        title: '拍卖人',
        dataIndex: 'beneficiary',
        key: 'beneficiary',
    },
    {
        title: '最高出价',
        dataIndex: 'highestBid',
        key: 'highestBid',
    },
    {
        title: '出价人',
        dataIndex: 'highestBidder',
        key: 'highestBidder',
    },
    {
        title: '拍卖结束时间',
        dataIndex: 'auctionEndTime',
        key: 'auctionEndTime',
    }
];

export default function AuctionPage() {

    const [dataSource, setDataSource] = useState(data_source_default)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log('初始化')
        getDetail2();

        return () => {
            console.log('销毁')
        }
    }, [])

    async function getDetail2() {
        setLoading(true)
        const result = await getDetail()
        console.log('res', result)
        setDataSource(result)
        setLoading(false)
    }

    return <main className='p-5'>
        <h1>拍卖系统</h1>

        <header className="mb-5 flex justify-between items-center">
            <h2>正在拍卖</h2>
            <Space>
                <Button onClick={createAuction}>添加</Button>
                <Button onClick={getDetail2}>刷新</Button>
                <Button type="primary">添加拍卖品</Button>
            </Space>
        </header>

        <section>
            <Table dataSource={dataSource} columns={columns} rowKey="address" pagination={false} loading={loading} />
        </section>
    </main>
}