import React, { useEffect, useState } from "react";
import { Col, Row, Typography, Table, Input, Select, message } from "antd";
import { CustomPagination } from "@/components/ui/Table/CustomPagination";
import { apiRequest } from "@/utils/api";

const { Text } = Typography;
const { Option } = Select;

const KbliTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, perPage: 10, totalData: 1 });
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState({
    key: 'id',
    order: 'asc',
  });

  const fetchData = async () => {
    try {
      const response = await apiRequest("get", "/kbli", {}, {
        page: pagination.page,
        perPage: pagination.perPage,
        where: search,
        orderBy: `${order.key}:${order.order}`,
      });
      setDataSource(response.data.data.data.map((item: any) => ({
        ...item,
        key: item.id,
      })));
      setPagination({
        page: response.data.data.meta.currentPage,
        perPage: response.data.data.meta.perPage,
        totalData: response.data.data.meta.total,
      });
      console.log(response.data.data.meta);
    } catch (error) {
      message.error("Server Unreachable, Please Check Your Internet Connection");
      console.log(error);
    }
  }

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Kode KBLI',
      dataIndex: 'kode',
      key: 'kode',
    },
    {
      title: 'KBLI',
      dataIndex: 'judul',
      key: 'judul',
    },
    {
      title: 'Deskripsi',
      dataIndex: 'uraian',
      key: 'uraian',
    },
  ];

  useEffect(() => {
    fetchData();
  }, [pagination.page, pagination.perPage, search]);


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
                    <span className="text-[15px] mr-3">Query For: </span>
                        <Select
                          defaultValue={pagination.perPage}
                          style={{ width: 80 }}
                          onChange={(value) => {
                            setPagination({ ...pagination, perPage: value });
                          }}
                        >
                          <Option value={10}>10</Option>
                          <Option value={20}>20</Option>
                          <Option value={30}>30</Option>
                        </Select>
                        <span className="text-[15px] ml-3">Items Per Page</span>
                    </Col>
                    <Col>
                      <Input.Search
                        placeholder="Search..."
                        onSearch={(value) => {
                          setSearch(value);
                          setPagination({
                            ...pagination,
                            page: 1,
                          });
                        }}
                      />
                    </Col>
                  </Row>

                  <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    bordered
                    scroll={{ x: 768 }}
                  />
                  <CustomPagination
                    data={dataSource}
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

export default KbliTable;
