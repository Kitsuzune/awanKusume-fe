import React from "react";
import { Col, Row, Typography, Table, Input, Select } from "antd";
import { CustomPagination } from "@/components/ui/Table/CustomPagination";

const { Text } = Typography;
const { Option } = Select;

const TrackingTable = ({ data, pagination, order, search, setSearch, setPagination, setSearchUnique, fetchData }: { data: any, pagination: any, order: any, search: any, setSearch: any, setPagination: any, setSearchUnique: any, fetchData: any }) => {

    const columns = [
        // {
        //     title: 'no',
        //     dataIndex: 'number',
        //     key: 'number',
        // },
        {
            title: 'nama',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Serial-Code',
            dataIndex: 'serialCode',
            key: 'serialCode',
        },
        {
            title: 'Badan Usaha',
            dataIndex: 'badanUsaha',
            key: 'badanUsaha',
        },
        {
            title: 'Jenis Legalitas',
            dataIndex: 'jenisLegalitas',
            key: 'jenisLegalitas',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Payment Status',
            dataIndex: 'paymentStatus',
            key: 'paymentStatus',
        }
    ];

    return (
        <Row className="w-full">
            <Col span={24}>
                <div className="rounded-lg">
                    <Row>
                        <Col span={24}>
                            <div className="flex flex-col">
                                <div className="mt-5 md:mt-10">
                                    <Row justify="space-between" align="middle" className="mb-4">
                                        <Col>
                                            <Select defaultValue="10" style={{ width: 120 }}>
                                                <Option value="10">10</Option>
                                                <Option value="25">25</Option>
                                                <Option value="50">50</Option>
                                                <Option value="100">100</Option>
                                            </Select>
                                        </Col>
                                        <Col>
                                            <div className="flex gap-3">
                                            <button 
                                                className="bg-orange text-white px-4 rounded-md w-[200px] hover:bg-[#ff7f50] transition-all duration-300 ease-in-out"
                                                onClick={() => { fetchData(); setSearchUnique(false) }}
                                            >
                                                    Refresh
                                                </button>
                                                <Input.Search placeholder="Search By User Project Only..."
                                                    onSearch={(value) => {
                                                        setSearch(value);
                                                        setPagination({
                                                            ...pagination,
                                                            page: 1,
                                                        });
                                                        setSearchUnique(false);
                                                    }}
                                                />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Table
                                        dataSource={data}
                                        columns={columns}
                                        pagination={{ pageSize: 10, position: ['bottomCenter'], showSizeChanger: true, style: { display: "none" } }}
                                        bordered
                                        scroll={{ x: 768 }}
                                    />
                                    <CustomPagination
                                        data={data}
                                        pagination={pagination}
                                        changeLimit={(perPage) => {
                                            setPagination({
                                                ...pagination,
                                                perPage,
                                            });
                                        }}
                                        changePage={(page) => {
                                            setPagination({
                                                ...pagination,
                                                page,
                                            });
                                        }}
                                    />
                                </div>

                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

export default TrackingTable;
