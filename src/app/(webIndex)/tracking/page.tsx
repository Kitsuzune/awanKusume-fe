'use client';
import React, { useState, useEffect } from "react";
import { Col, Row, Typography } from "antd";
import { Collapse } from 'antd';
import Article from "@/components/home/Article";
import SaleBar from "@/components/home/SaleBar";
import TrackingTable from "./TrackingTable";
import { apiRequest } from "@/utils/api";
import { message } from "antd";
import idTranslations from "@/../public/i18n/locales/id/HomePage.json";
import enTranslations from "@/../public/i18n/locales/en/HomePage.json";
import cnTranslations from "@/../public/i18n/locales/cn/HomePage.json";
const Text = Typography;
const { Panel } = Collapse;
const getTranslations = (language: number) => {
  switch (language) {
    case 1:
      return idTranslations;
    case 2:
      return enTranslations;
    case 3:
      return cnTranslations;
    default:
      return idTranslations;
  }
};


const page = () => {
  const [data, setData] = useState<any[]>([]);
  const [login, setLogin] = useState(false);
  const [pagination, setPagination] = useState({ page: 1, perPage: 10, totalData: 1 });
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState({
    key: 'id',
    order: 'desc',
  });
  const [unique, setUnique] = useState('');
  const [searchUnique, setSearchUnique] = useState(false);
  const [language, setLanguage] = useState<number>(1);

  const handleCheckLogin = async () => {
    try {
      const res = await apiRequest('get', '/auth/check-login');
      if (res.status === 200) {
        setLogin(true);
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  }

  const formatPaymentStatus = (status: string) => {

    if (status === 'FRONTEND_PAYMENT') {
      return 'PREPAID';
    }

    return status.replace(/_/g, ' ').toUpperCase();
  };

  const fetchData = async () => {
    setSearchUnique(false);
    try {
      const response = await apiRequest('get', '/order', {}, {
        page: pagination.page,
        perPage: pagination.perPage,
        where: search,
        orderBy: `${order.key}:${order.order}`,
      });

      setData(response.data.data.map((item: any) => ({
        ...item,
        key: item.id,
        paymentStatus: formatPaymentStatus(item.paymentStatus)
      })));

      setPagination({
        page: response.data.meta.currentPage,
        perPage: response.data.meta.perPage,
        totalData: response.data.meta.total,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const fetchDataSearch = async () => {
    try {
      const response = await apiRequest('get', '/order/unique/' + unique);
      if (response.status === 200) {
        setData([
          {
            ...response.data.data,
            key: response.data.data.id,
            paymentStatus: formatPaymentStatus(response.data.data.paymentStatus)
          }
        ]);

        setPagination({
          page: 1,
          perPage: 10,
          totalData: 1,
        });

        setSearchUnique(true);
      }
    } catch (err) {
      message.error('Data tidak ditemukan');
    }
  }

  useEffect(() => {
    if (searchUnique) {
      return;
    }

    fetchData();
  }, [pagination.page, pagination.perPage, search]);

  useEffect(() => {
    handleCheckLogin();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language");
      setLanguage(storedLanguage ? parseInt(storedLanguage) : 1);
    }
  }, []);

  const translations = getTranslations(language);


  return (
    <>
      <Row className="my-10 w-[80%] mx-auto pt-20">
        <Col span={24} className="">
          <Text suppressHydrationWarning className="text-[32px] md:text-[40px] font-[600] text-center">
            {translations.tracking["Title"]}
          </Text>
          <Text suppressHydrationWarning className="mt-4 text-[16px] md:text-[20px] font-[400] text-center">
            {translations.tracking["SubTitle"]}
          </Text>

          {/* <input type="text" className="w-full mt-10 p-4 border border-gray-300 rounded-md" placeholder="Search" /> */}
          <div className="w-full my-10 p-4 border border-gray-300 rounded-md flex gap-3 justify-between items-center">
            <input type="text" className="w-full text-[18px] h-[50px] outline-none" placeholder="Search Here" value={unique} onChange={(e) => { setUnique(e.target.value); }} />
            <button suppressHydrationWarning className="bg-orange text-white px-4 py-2 rounded-md w-[200px]" onClick={fetchDataSearch}>
              {translations.tracking["Button"]}
            </button>
          </div>

          {(login || searchUnique) && <TrackingTable data={data} pagination={pagination} order={order} search={search} setSearch={setSearch} setPagination={setPagination} setSearchUnique={setSearchUnique} fetchData={fetchData} />}
        </Col>
      </Row>


      <Row className="my-20">
        <Col span={24}>
          <SaleBar />
        </Col>
      </Row>

    </>
  );
}

export default page;
