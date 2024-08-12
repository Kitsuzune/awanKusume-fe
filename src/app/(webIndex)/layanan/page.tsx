'use client';
import React, { useState } from "react";
import { Button, Col, Collapse, Row, Typography } from "antd";
import ServiceComponent from "./serviceComponent";
import Article from "@/components/home/Article";

const Text = Typography;
const { Panel } = Collapse;

interface Plan {
    price: string;
    title: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}

const Page: React.FC = () => {

    return (
        <>
            <Row>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col">
                            <Text className="text-[28px] md:text-[40px] font-[600] text-start">
                                Lorem Ipsum dolor sit amet!
                            </Text>

                            <Text className="text-[16px] md:text-[18px] font-[500] text-start mt-3 md:mt-5 w-[100%] md:w-[50%]">
                                Whether your time-saving automation needs are large or small, we’re here to help you scale. Whether your time-saving automation needs are large or small, we’re here to help you scale. Whether your time-saving automation needs are large or small, we’re here to help you scale.
                            </Text>

                            <div className="flex flex-col md:flex-row mt-3 md:mt-5 gap-3">
                                <button
                                    className="text-white rounded-[5px] text-[10px] md:text-[11px] px-[10px] md:px-[12px] py-[4px] md:py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                >
                                    Pendirian PT
                                </button>

                                <button
                                    className="text-white rounded-[5px] text-[10px] md:text-[11px] px-[10px] md:px-[12px] py-[4px] md:py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                >
                                    Pendirian CV
                                </button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>


            <Row>
                <Col span={24}>
                    <ServiceComponent />
                </Col>
            </Row>

            <Row className="w-full p-5">
                <Col span={24}>

                    {[1].map((index) => (
                        <Row className="w-full lg:w-[70%] mx-auto my-[80px] md:my-[160px]" key={index}>
                            <Col span={24} md={8}>
                                <div className="flex flex-col mb-4 md:mb-0">
                                    <Text className="text-[32px] md:text-[40px] font-[600] text-start text-[#007893]">
                                        Lorem Ipsum
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

            <Row>
                <Col span={24}>
                    <ServiceComponent />
                </Col>
            </Row>

            <Row className="w-full p-5">
                <Col span={24}>

                    {[1].map((index) => (
                        <Row className="w-full lg:w-[70%] mx-auto my-[80px] md:my-[160px]" key={index}>
                            <Col span={24} md={8}>
                                <div className="flex flex-col mb-4 md:mb-0">
                                    <Text className="text-[32px] md:text-[40px] font-[600] text-start text-[#007893]">
                                        Lorem Ipsum
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

            <Row className="mb-[80px]">
                <Col span={24}>
                    <Article title="Hukum" HeaderModel="Between" />
                </Col>
            </Row>
        </>
    );
};

export default Page;
