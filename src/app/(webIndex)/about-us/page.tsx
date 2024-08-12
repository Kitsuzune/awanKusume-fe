'use client';
import React from "react";
import { Col, Collapse, Row, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import ImageCarousel from "./imageCarousell";

const { Text } = Typography;
const { Panel } = Collapse;

const page = () => {
    return (
        <Row className="w-full p-5">
            <Col span={24}>
                <Row className="w-full mx-auto mt-[40px] md:mt-[120px]">
                    <Col span={24} md={12} className="flex justify-center md:justify-start">
                        <Text className="text-[24px] md:text-[32px] font-[700] ml-0 md:ml-[250px] text-center md:text-left">
                            Kenapa Awan Kusuma?
                        </Text>
                    </Col>

                    <Col span={24} md={12} className="flex flex-col items-center md:items-start">
                        <img
                            src="https://www.themillsbuilding.com/userfiles/cms/building/images/1/building.jpg"
                            alt="About Us"
                            className="w-[300px] h-[200px] md:w-[485px] md:h-[280px] rounded-2xl"
                        />
                        <Text className="text-[14px] md:text-[16px] font-[400] mt-4 w-[90%] md:w-[60%] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                        <div className="flex items-center gap-3 mt-4 w-auto">
                            <Text className="text-[14px] md:text-[18px] font-bold">View More</Text>
                            <div className="flex items-center border-2 border-[#007893] rounded-full p-1 md:p-2">
                                <ArrowRightOutlined className="text-[14px] md:text-[18px] text-[#007893]" />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="w-full mx-auto mt-[60px] md:mt-[80px]">
                    <Col span={24} md={12} className="flex justify-center md:justify-start">
                        <Text className="text-[24px] md:text-[32px] font-[700] ml-0 md:ml-[250px] text-center md:text-left">
                            Visi Misi
                        </Text>
                    </Col>

                    <Col span={24} md={12} className="flex flex-col items-center md:items-start">
                        <img
                            src="https://www.themillsbuilding.com/userfiles/cms/building/images/1/building.jpg"
                            alt="About Us"
                            className="w-[300px] h-[200px] md:w-[485px] md:h-[280px] rounded-2xl"
                        />
                        <Text className="text-[14px] md:text-[16px] font-[400] mt-4 w-[90%] md:w-[60%] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                        <div className="flex items-center gap-3 mt-4 w-auto">
                            <Text className="text-[14px] md:text-[18px] font-bold">View More</Text>
                            <div className="flex items-center border-2 border-[#007893] rounded-full p-1 md:p-2">
                                <ArrowRightOutlined className="text-[14px] md:text-[18px] text-[#007893]" />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="w-full mx-auto mt-[60px] md:mt-[80px]">
                    <ImageCarousel />
                </Row>

                <Row className="w-full mx-auto my-[60px] md:my-[80px]">
                    <Col span={24} md={12} className="flex flex-col items-center md:items-start">
                        <Text className="text-[32px] md:text-[40px] font-[700] text-center md:text-left md:ml-[250px]">
                            Culture
                        </Text>
                        <Collapse
                            className="w-full md:w-auto md:ml-[250px] mr-0 md:mr-10"
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
                                className="text-[18px] md:text-[30px] font-[600]"
                                style={{ borderBottom: '1px solid #1A2A3A' }}
                            >
                                <Text>This is the content for the first panel.</Text>
                            </Panel>
                            <Panel
                                header="Lorem ipsum dolor sit amet?"
                                key="2"
                                className="text-[18px] md:text-[30px] font-[600]"
                                style={{ borderBottom: '1px solid #1A2A3A' }}
                            >
                                <Text>This is the content for the second panel.</Text>
                            </Panel>
                        </Collapse>
                    </Col>

                    <Col span={24} md={12} className="flex flex-col items-center md:items-start mt-5 md:mt-0">
                        <img
                            src="https://www.themillsbuilding.com/userfiles/cms/building/images/1/building.jpg"
                            alt="About Us"
                            className="w-[300px] h-[200px] md:w-[485px] md:h-[280px] rounded-2xl"
                        />
                        <Text className="text-[14px] md:text-[16px] font-[400] mt-4 w-[90%] md:w-[60%] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default page;
