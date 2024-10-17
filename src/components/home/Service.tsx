'use client';
import React, { useState, useEffect } from "react";
import { Col, Row, Typography } from "antd";
import AnimatedCursor from "react-animated-cursor";
import useLanguage from "@/zustand/useLanguage";
import { useTranslationCustom } from "@/i18n/client";

const Text = Typography;

const Service = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { lng } = useLanguage();
    const { t } = useTranslationCustom(lng, "HomePage");

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex items-center">
            {!isMobile && isHovered && (
                <AnimatedCursor
                    innerSize={8}
                    outerSize={40}
                    color="255, 255, 255"
                    outerAlpha={0.3}
                    innerScale={1}
                    outerScale={1.5}
                    hasBlendMode={true}
                    showSystemCursor={true}
                    outerStyle={{
                        border: "3px solid #1A2A3A",
                    }}
                    innerStyle={{
                        backgroundColor: "#FEA500",
                    }}
                />
            )}
            <Row className="w-[100%] lg:w-[65%] mx-auto">
                <Col span={24}>
                    <div>
                        <Text className="text-[24px] md:text-[40px] font-[700] text-center">
                            {/* SERVICE */}
                            {t("service.Title")}
                        </Text>

                        <Text className="text-center text-[16px] md:text-[24px] mt-2 md:mt-4">
                        {t("service.SubTitle")}
                        </Text>
                    </div>

                    <Row className="mt-5 md:mt-10">
                        <Col xs={24} md={12}>
                            <div
                                className="flex items-center justify-center md:justify-end mt-5 md:mt-0 cursor-none"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div className="relative w-[90%] md:w-[650px] h-[200px] md:h-[444px] group md:mr-5">
                                    <img
                                        src="https://www.thestatesman.com/wp-content/uploads/2019/04/Physics-and-business.jpg"
                                        alt="service-1"
                                        className="rounded-[20px] opacity-100 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
                                    />
                                    <div className="absolute inset-0 flex flex-col text-white px-[16px] md:px-[34px] pt-[20px] md:pt-[51px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <Text className="text-[14px] md:text-[20px] font-[800] text-start">Pendirian Perusahaan</Text>
                                        <Text className="text-[14px] md:text-[20px] mt-3 md:mt-5 w-[90%] md:w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex items-center justify-center md:justify-end mt-10 cursor-none"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div className="relative w-[90%] md:w-[650px] h-[200px] md:h-[444px] group md:mr-5">
                                    <img
                                        src="https://img.freepik.com/free-photo/african-american-business-woman-by-window_1303-10869.jpg"
                                        alt="service-1"
                                        className="rounded-[20px] opacity-100 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
                                    />
                                    <div className="absolute inset-0 flex flex-col text-white px-[16px] md:px-[34px] pt-[20px] md:pt-[51px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <Text className="text-[14px] md:text-[20px] font-[800] text-start">Marketing Agency</Text>
                                        <Text className="text-[14px] md:text-[20px] mt-3 md:mt-5 w-[90%] md:w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} md={12}>
                            <div
                                className="flex items-center justify-center md:justify-start mt-10 md:mt-24 cursor-none"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div className="relative w-[90%] md:w-[650px] h-[200px] md:h-[444px] group md:ml-5">
                                    <img
                                        src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"
                                        alt="service-1"
                                        className="rounded-[20px] opacity-100 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
                                    />
                                    <div className="absolute inset-0 flex flex-col text-white px-[16px] md:px-[34px] pt-[20px] md:pt-[51px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <Text className="text-[14px] md:text-[20px] font-[800] text-start">Izin Business</Text>
                                        <Text className="text-[14px] md:text-[20px] mt-3 md:mt-5 w-[90%] md:w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex items-center justify-center md:justify-start mt-10 md:mt-10 cursor-none"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div className="relative w-[90%] md:w-[650px] h-[200px] md:h-[444px] group md:ml-5">
                                    <img
                                        src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/10/business_with_esa/21093947-3-eng-GB/Business_with_ESA_pillars.jpg"
                                        alt="service-1"
                                        className="rounded-[20px] opacity-100 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
                                    />
                                    <div className="absolute inset-0 flex flex-col text-white px-[16px] md:px-[34px] pt-[20px] md:pt-[51px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <Text className="text-[14px] md:text-[20px] font-[800] text-start">Lorem Ipsum</Text>
                                        <Text className="text-[14px] md:text-[20px] mt-3 md:mt-5 w-[90%] md:w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Service;
