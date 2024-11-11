'use client';
import React, { useRef } from "react";
import { Button, Col, Row, Typography } from "antd";
import Service from "@/components/home/Service";
import SaleBar from "@/components/home/SaleBar";

const Text = Typography;

const Page: React.FC = () => {
    const ptSectionRef = useRef<HTMLDivElement>(null);
    const cvSectionRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

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
                                    onClick={() => scrollToSection(ptSectionRef)}
                                >
                                    Pendirian PT
                                </button>
                                <button
                                    className="text-white rounded-[5px] text-[16px] px-[10px] md:px-[12px] py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                    onClick={() => scrollToSection(cvSectionRef)}
                                >
                                    Pendirian CV
                                </button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10" ref={ptSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                Pendirian PT
                            </Text>
                            <div className="flex justify-center">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    Pendirian PT adalah proses pembentukan badan hukum perseroan terbatas yang dilakukan oleh satu atau lebih orang yang disebut sebagai pendiri.
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} status="PT" type="0" />
                </Col>
            </Row>

            <Row className="my-10" ref={cvSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                Pendirian CV
                            </Text>
                            <div className="flex justify-center">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    Pendirian CV adalah proses pembentukan badan hukum perseroan terbatas yang dilakukan oleh dua orang atau lebih yang disebut sebagai para pengelola.
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} status="CV" type="0" />
                </Col>
            </Row>

            <Row className="my-20">
                <Col span={24}>
                    <SaleBar />
                </Col>
            </Row>
        </>
    );
};

export default Page;