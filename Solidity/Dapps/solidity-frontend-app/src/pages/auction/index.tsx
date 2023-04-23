import { useState, useEffect, useRef } from 'react'
import { Button, Table, Space, Modal, Form, Input, InputNumber, Descriptions } from 'antd'
import { createAuction, getDetail, listenerEvent, closeListenerEvent } from './auctionFactoryContract'
import { bid, end, returnMoney } from './auctionContract'
import type { FormInstance } from 'antd/es/form';
import dayjs from 'dayjs'


type RowType = {
    address: string;
    auctionItemName: string;
    beneficiary: string;
    highestBid: number;
    highestBidder: string;
    auctionEndTime: number;
}

export default function AuctionPage() {

    const [dataSource, setDataSource] = useState<RowType[]>([])
    const [endedDataSource, setEndedDataSource] = useState<RowType[]>([])
    const [loading, setLoading] = useState(false)
    const [endedLoading, setEndedLoading] = useState(false)
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [auctionModalOpen, setAuctionModalOpen] = useState(false);
    const formRef = useRef<FormInstance>(null);
    const [row, setRow] = useState<RowType | null>(null)
    const [bidValue, setBidValue] = useState(0)

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
            // dataIndex: 'highestBid',
            key: 'highestBid',
            render: (_: any, record: RowType) => (
                <>{weiToEther(record.highestBid || 0)} ether</>
            )
        },
        {
            title: '出价人',
            dataIndex: 'highestBidder',
            key: 'highestBidder',
        },
        {
            title: '拍卖结束时间',
            // dataIndex: 'auctionEndTime',
            key: 'auctionEndTime',
            render: (_: any, record: RowType) => (
                <>{dayjs(record.auctionEndTime * 1000).format('YYYY-MM-DD HH:mm:ss')}</>
            )
        },
        {
            title: '操作',
            key: 'action',
            render: (_: any, record: RowType) => (
                <>
                    <Button type="link" onClick={() => openAuctionModal(record)}>竞拍</Button>
                    <Button type="link" onClick={() => returnMoney(record.address)}>退款</Button>
                    <Button type="link" onClick={() => end(record.address)}>结束拍卖</Button>
                </>
            )
        },
    ];

    const endedColumns = [
        ...columns.filter(column => !['auctionEndTime', 'action'].includes(column.key)),
        {
            title: '操作',
            key: 'action',
            render: (_: any, record: RowType) => (
                <>
                    <Button type="link" onClick={() => returnMoney(record.address)}>退款</Button>
                </>
            )
        },
    ]

    useEffect(() => {
        console.log('初始化')
        refresh();
        endedRefresh();
        listenerEvent({
            create: refresh
        })

        return () => {
            closeListenerEvent();
            console.log('销毁')
        }
    }, [])

    async function refresh() {
        setLoading(true)
        const result = await getDetail({ ended: false })
        setDataSource(result)
        setLoading(false)
    }

    async function endedRefresh() {
        setEndedLoading(true)
        const result = await getDetail({ ended: true })
        setEndedDataSource(result)
        setEndedLoading(false)
    }

    async function addOk() {
        if (formRef.current) {
            try {
                await formRef.current.validateFields();
                const name: string = formRef.current.getFieldValue('name');
                const second: number = formRef.current.getFieldValue('second');
                createAuction(name, second)
                addCancel()
            } catch (error) {
                console.error(error)
            }
        }
    }

    function addCancel() {
        formRef.current?.resetFields();
        setAddModalOpen(false)
    }

    function openAuctionModal(row: RowType) {
        setAuctionModalOpen(true)
        setRow(row)
        setBidValue(weiToEther(row.highestBid || 0))
    }

    function auctionOk() {
        if (row?.address) {
            bid(row.address, bidValue)
            auctionCancel()
        }
    }

    function auctionCancel() {
        setAuctionModalOpen(false)
    }

    function weiToEther(value: number) {
        return value * 10 ** -18;
    }

    return <main className='p-5'>
        <h1>拍卖案例</h1>

        <header className="m-5 flex justify-between items-center">
            <h2>正在拍卖</h2>
            <Space>
                <Button onClick={refresh}>刷新</Button>
                <Button type="primary" onClick={() => setAddModalOpen(true)}>添加拍卖品</Button>
            </Space>
        </header>

        <section>
            <Table dataSource={dataSource} columns={columns} rowKey="address" pagination={false} loading={loading} />
        </section>

        <header className="m-5 flex justify-between items-center">
            <h2>结束拍卖</h2>
            <Space>
                <Button onClick={endedRefresh}>刷新</Button>
            </Space>
        </header>

        <section>
            <Table dataSource={endedDataSource} columns={endedColumns} rowKey="address" pagination={false} loading={endedLoading} />
        </section>

        <Modal title="添加拍卖品" open={addModalOpen} onOk={addOk} onCancel={addCancel}>
            <Form
                ref={formRef}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                style={{ maxWidth: 600 }}
                autoComplete="off"
            >
                <Form.Item
                    label="拍卖品名称"
                    name="name"
                    rules={[{ required: true, message: '请输入拍卖品名称！' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="拍卖时间（秒）"
                    name="second"
                    rules={[{ required: true, message: '请输入拍卖时间' }]}
                >
                    <InputNumber min={1} />
                </Form.Item>
            </Form>
        </Modal>

        <Modal title="竞拍" open={auctionModalOpen} onOk={auctionOk} onCancel={auctionCancel}>

            <h3>原信息</h3>
            <Descriptions column={1}>
                <Descriptions.Item label="合约地址">{row?.address}</Descriptions.Item>
                <Descriptions.Item label="拍卖品">{row?.auctionItemName}</Descriptions.Item>
                <Descriptions.Item label="拍卖人">{row?.beneficiary}</Descriptions.Item>
                <Descriptions.Item label="最高出价">{weiToEther(row?.highestBid || 0)} ether</Descriptions.Item>
                <Descriptions.Item label="出价人">
                    {row?.highestBidder}
                </Descriptions.Item>
                <Descriptions.Item label="拍卖结束时间">
                    {dayjs((row?.auctionEndTime || 0) * 1000).format('YYYY-MM-DD HH:mm:ss')}
                </Descriptions.Item>
            </Descriptions>

            <h3>出价（ether）</h3>
            <InputNumber min={weiToEther(row?.highestBid || 0)} value={bidValue} onChange={(value: number | null) => setBidValue(value || 0)} controls={false} />
        </Modal>
    </main>
}