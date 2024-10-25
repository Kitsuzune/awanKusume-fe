'use client';
import React, { useEffect, useState } from "react";
import { Col, message, Row, Typography } from "antd";
import { Collapse } from 'antd';
import Article from "@/components/home/Article";
import SaleBar from "@/components/home/SaleBar";
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

const page: React.FC = () => {
  const [data, setData] = useState<FaqData[]>([]);
  const [language, setLanguage] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      return storedLanguage ? parseInt(storedLanguage) : 1;
    }
    return 1;
  });

  const fetchData = async () => {
    try {
      const response = await apiRequest('get', `/homepage/faqs/${language}`);
      setData(response.data.data);
    } catch (error) {
      message.error('Server Unreachable, Please Check Your Internet Connection');
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [language]);

  return (
    <>

      <Row className="w-full p-5">
        <Col span={24}>
          <Row className="w-full lg:w-[70%] mx-auto my-[30px] md:my-[60px]">
            <div className="flex flex-col justify-center w-full">
              <Text className="text-[24px] md:text-[48px] font-[600] text-start">
                Lorem Ipsum dolor sit amet
              </Text>
              <Text className="text-[24px] md:text-[32px] text-[#007893] font-[600] -mt-2 md:-mt-5">
                FAQ
              </Text>
            </div>
          </Row>

   
            <Row className="w-full lg:w-[70%] mx-auto my-[80px] md:my-[160px]">
              <Col span={24} md={8}>
                <div className="flex flex-col mb-4 md:mb-0">
                  <Text className="text-[24px] md:text-[40px] font-[600] text-start">
                    Lorem Ipsum
                  </Text>
                  <Text className="text-[24px] md:text-[32px] text-[#007893] font-[600] -mt-2 md:-mt-5">
                    Legalitas
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
