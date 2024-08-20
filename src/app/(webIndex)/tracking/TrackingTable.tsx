import React from "react";
import { Col, Row, Typography, Table, Input, Select } from "antd";
import { CustomPagination } from "@/components/ui/Table/CustomPagination";

const { Text } = Typography;
const { Option } = Select;

const TrackingTable = () => {

    const columns = [
        {
            title: 'no',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'nama',
            dataIndex: 'nama',
            key: 'nama',
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
    ];

    const dataSource = [
        {
            key: '1',
            number: 1,
            nama: 'John Brown',
            serialCode: '0001',
            badanUsaha: 'PT. Abc',
            jenisLegalitas: 'CV',
            status: 'Active',
        },
        {
            key: '2',
            number: 2,
            nama: 'Jim Green',
            serialCode: '0002',
            badanUsaha: 'PT. Def',
            jenisLegalitas: 'PT',
            status: 'Inactive',
        },
        {
            key: '3',
            number: 3,
            nama: 'Joe Black',
            serialCode: '0003',
            badanUsaha: 'PT. Ghi',
            jenisLegalitas: 'CV',
            status: 'Active',
        },
        {
            key: '4',
            number: 4,
            nama: 'Jim Red',
            serialCode: '0004',
            badanUsaha: 'PT. Jkl',
            jenisLegalitas: 'PT',
            status: 'Inactive',
        },
        {
            key: '5',
            number: 5,
            nama: 'John Brown',
            serialCode: '0005',
            badanUsaha: 'PT. Mno',
            jenisLegalitas: 'CV',
            status: 'Active',
        },
        {
            key: '6',
            number: 6,
            nama: 'Jim Green',
            serialCode: '0006',
            badanUsaha: 'PT. Pqr',
            jenisLegalitas: 'PT',
            status: 'Inactive',
        },
        {
            key: '7',
            number: 7,
            nama: 'Joe Black',
            serialCode: '0007',
            badanUsaha: 'PT. Stu',
            jenisLegalitas: 'CV',
            status: 'Active',
        },
        {
            key: '8',
            number: 8,
            nama: 'Jim Red',
            serialCode: '0008',
            badanUsaha: 'PT. Vwx',
            jenisLegalitas: 'PT',
            status: 'Inactive',
        },
        {
            key: '9',
            number: 9,
            nama: 'John Brown',
            serialCode: '0009',
            badanUsaha: 'PT. Yz',
            jenisLegalitas: 'CV',
            status: 'Active',
        },
    ];

    return (
        <Row className="w-full">
            <Col span={24}>
                <div className="p-5 md:p-10 md:m-10 rounded-lg">
                    <Row>
                        <Col span={24}>
                            <div className="flex flex-col">
                                <div className="mt-5 md:mt-10 mx-5 md:mx-10">
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
                                            <Input.Search placeholder="Search..." />
                                        </Col>
                                    </Row>

                                    <Table
                                        dataSource={dataSource}
                                        columns={columns}
                                        pagination={{ pageSize: 10, position: ['bottomCenter'], showSizeChanger: true, style: { display: "none" } }}
                                        bordered
                                        scroll={{ x: 768 }}
                                    />
                                    <CustomPagination
                                        data={dataSource}
                                        pagination={{ page: 1, perPage: 10, totalData: 1 }}
                                        changeLimit={() => { }}
                                        changePage={() => { }}
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
