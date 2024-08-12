'use client';
import React from "react";
import { Col, Row, Typography } from "antd";
import { Collapse } from 'antd';
import Article from "@/components/home/Article";
import SaleBar from "@/components/home/SaleBar";
import KbliTable from "./KbliTable";

const Text = Typography;
const { Panel } = Collapse;

const page = () => {
  return (
    <>
      <Row className="my-10">
        <Col span={24}>
          <KbliTable />
        </Col>
      </Row>

      <Row className="w-full p-5">
        <Col span={24}>

          {[1].map((index) => (
            <Row className="w-full lg:w-[70%] mx-auto my-[80px] md:my-[160px]" key={index}>
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
