'use client';
import React, { useState } from "react";
import { Button, Col, Collapse, Row, Typography } from "antd";
import ServiceComponent from "./serviceComponent";
import Article from "@/components/home/Article";
import Service from "@/components/home/Service";

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
                                    className="text-white rounded-[5px] text-[16px] px-[10px] md:px-[12px] py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                >
                                    Pendirian PT
                                </button>

                                <button
                                    className="text-white rounded-[5px] text-[16px] px-[10px] md:px-[12px] py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                >
                                    Pendirian CV
                                </button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} />
                </Col>
            </Row>
        </>
    );
};

export default Page;
