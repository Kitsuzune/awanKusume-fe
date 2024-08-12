import React from "react";
import { Col, Row, Typography, Table, Input, Select } from "antd";
import { CustomPagination } from "@/components/ui/Table/CustomPagination";

const { Text } = Typography;
const { Option } = Select;

const KbliTable = () => {

  const columns = [
    {
      title: '#',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Kode KBLI',
      dataIndex: 'kodeKbli',
      key: 'kodeKbli',
    },
    {
      title: 'KBLI',
      dataIndex: 'kbli',
      key: 'kbli',
    },
    {
      title: 'Deskripsi',
      dataIndex: 'deskripsi',
      key: 'deskripsi',
    },
  ];

  const dataSource = [
    {
      key: '1',
      number: '03',
      kodeKbli: 'Lorem Ipsum',
      kbli: '#123-456ABC',
      deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      key: '2',
      number: '07',
      kodeKbli: 'Dolor Sit',
      kbli: '#789-123XYZ',
      deskripsi: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    },
    {
      key: '3',
      number: '10',
      kodeKbli: 'Amet Consectetur',
      kbli: '#456-789DEF',
      deskripsi: 'Amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    {
      key: '4',
      number: '15',
      kodeKbli: 'Adipiscing Elit',
      kbli: '#321-654GHI',
      deskripsi: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <Row className="w-full">
      <Col span={24}>
        <div className="p-5 md:p-10 md:m-10 border-2 rounded-lg">
          <Row>
            <Col span={24}>
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <div className="w-full md:w-[60%] border-b-2 border-[#007893] border-opacity-[40%] flex justify-center">
                    <Text className="text-[24px] md:text-[32px] font-[700] text-center">
                      Tabel KBLI
                    </Text>
                  </div>
                </div>

                <div className="flex justify-center mt-5">
                  <div className="w-full md:w-[58%]">
                    <Text className="text-[14px] md:text-[16px] font-[400] text-justify">
                      KBLI adalah klasifikasi rujukan yang digunakan untuk mengklasifikasikan aktivitas/kegiatan ekonomi Indonesia ke dalam beberapa lapangan usaha/bidang usaha yang dibedakan berdasarkan jenis kegiatan ekonomi yang menghasilkan produk/output baik berupa barang maupun jasa. Mohon diperhatikan bahwa dengan berlakunya OSS RBA maka pelaku usaha jasa pembuatan PT wajib menggunakan KBLI tahun 2020.
                    </Text>
                  </div>
                </div>

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
                    changeLimit={() => {}}
                    changePage={() => {}}
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

export default KbliTable;
