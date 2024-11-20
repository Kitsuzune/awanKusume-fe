'use client';
import React, { useEffect, useState } from "react";
import { Col, message, Row, Typography } from "antd";
import { Collapse } from 'antd';
import Article from "@/components/home/Article";
import SaleBar from "@/components/home/SaleBar";
import KbliTable from "./KbliTable";
import { apiRequest } from "@/utils/api";

const Text = Typography;
const { Panel } = Collapse;

interface FaqData {
  id: number;
  languageId: number;
  uuid: string;
  title: string;
  subTitle: string;
  show: number;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}


const page = () => {
  const [data, setData] = useState<FaqData[]>([]);
  const [language, setLanguage] = useState<number>(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language");
      setLanguage(storedLanguage ? parseInt(storedLanguage) : 1);
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiRequest('get', `/homepage/faqs/${language}?category=KBLI`);
      setData(response.data.data);
    } catch (error) {
      // message.error('Server Unreachable, Please Check Your Internet Connection');
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [language]);

  return (
    <>
      <Row className="my-10">
        <Col span={24}>
          <KbliTable />
        </Col>
      </Row>

      <Row className="w-full p-5">
        <Col span={24}>

          <Row className="w-full lg:w-[70%] mx-auto my-[80px] md:my-[160px]">
            <Col span={24} md={8}>
              <div className="flex flex-col mb-4 md:mb-0">
                <Text className="text-[32px] md:text-[40px] font-[600] text-start text-[#007893]">
                  Question KBLI
                </Text>
              </div>
            </Col>

            <Col span={24} md={16}>
              <Collapse
                defaultActiveKey={[]}
                ghost
                expandIconPosition="end"
                expandIcon={({ isActive }) => (
                  <div
                    className="text-[20px] md:text-[40px]"
                    style={{ fontWeight: 600, marginTop: 15, fontSize: '40px' }}
                  >
                    {/* <div style={{ fontSize: '40px', fontWeight: '600', marginTop: 15 }}>
                        {isActive ? '-' : '+'}
                      </div> */}
                    {isActive ? '-' : '+'}
                  </div>
                )}
              >
                 {data.map((item, index) => (
                    <Panel
                      header={item.question}
                      key={index + 1}
                      className="text-[20px] md:text-[30px] font-[600]"
                      style={{ borderBottom: '1px solid #1A2A3A' }}
                    >
                      <Text>{item.answer}</Text>
                    </Panel>
                  ))}
              </Collapse>
            </Col>
          </Row>
        </Col>
      </Row>


      <Row className="my-20">
        <Col span={24}>
          <Article title={"Hukum"} HeaderModel={"Between"} />
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
