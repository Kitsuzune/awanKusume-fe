'use client';
import React from "react";
import { Col, Row, Typography } from "antd";
import { Collapse } from 'antd';
import Article from "@/components/home/Article";
import SaleBar from "@/components/home/SaleBar";

const Text = Typography;
const { Panel } = Collapse;

const page = () => {
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

          {[1, 2, 3].map((index) => (
            <Row className="w-full lg:w-[70%] mx-auto my-[80px] md:my-[160px]" key={index}>
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
                  <Panel
                    header="Lorem ipsum dolor sit amet?"
                    key="1"
                    className="text-[20px] md:text-[30px] font-[600]"
                    style={{ borderBottom: '1px solid #1A2A3A' }}
                  >
                    <Text>This is the content for the first panel.</Text>
                  </Panel>
                  <Panel
                    header="Lorem ipsum dolor sit amet?"
                    key="2"
                    className="text-[20px] md:text-[30px] font-[600]"
                    style={{ borderBottom: '1px solid #1A2A3A' }}
                  >
                    <Text>This is the content for the second panel.</Text>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
          ))}
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
