'use client';
import React, { useEffect, useState } from "react";
import { Col, Collapse, message, Row, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import ImageCarousel from "./imageCarousell";
import useLanguage from "@/zustand/useLanguage";
import { useTranslationCustom } from "@/i18n/client";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/utils/api";

const { Text } = Typography;
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
    const { lng } = useLanguage();
    const { t } = useTranslationCustom(lng, "HomePage");
    const router = useRouter();
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
            const response = await apiRequest('get', `/homepage/faqs/${language}?category=ABOUT_US`);
            setData(response.data.data);
        } catch (error) {
            message.error('Server Unreachable, Please Check Your Internet Connection');
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [language]);

    const handleKenapaAwanKusumaClick = () => {
        router.push("/about-us/detail#kenapa-awan-kusuma");
    };

    const handleVisiMisiClick = () => {
        router.push("/about-us/detail#visi-misi");
    };

    return (
        <Row className="w-full p-5">
            <Col span={24}>
                <Row className="w-full mx-auto mt-[40px] md:mt-[120px]">
                    <Col span={24} md={12} className="flex justify-center md:justify-start">
                        <Text className="text-[24px] md:text-[32px] font-[700] ml-0 md:ml-[250px] text-center md:text-left">
                            {t("aboutus.Title-1")}
                        </Text>
                    </Col>

                    <Col span={24} md={12} className="flex flex-col items-center md:items-start">
                        <img
                            src="https://images.pexels.com/photos/303159/pexels-photo-303159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="About Us"
                            className="w-[300px] h-[200px] md:w-[485px] md:h-[280px] rounded-2xl"
                        />
                        <Text className="text-[14px] md:text-[16px] font-[400] mt-4 w-[90%] md:w-[60%] text-justify">
                            {t("aboutus.SubTitle-1")}
                        </Text>
                        <div className="flex items-center gap-3 mt-4 w-auto hover:cursor-pointer hover:bg-gray-200 rounded-md p-3 transition-all duration-300" onClick={handleKenapaAwanKusumaClick}>
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
                            {t("aboutus.Title-2")}
                        </Text>
                    </Col>

                    <Col span={24} md={12} className="flex flex-col items-center md:items-start">
                        <img
                            src="https://images.pexels.com/photos/3394141/pexels-photo-3394141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="About Us"
                            className="w-[300px] h-[200px] md:w-[485px] md:h-[280px] rounded-2xl"
                        />
                        <Text className="text-[14px] md:text-[16px] font-[400] mt-4 w-[90%] md:w-[60%] text-justify">
                            {t("aboutus.SubTitle-2")}
                        </Text>
                        <div className="flex items-center gap-3 mt-4 w-auto hover:cursor-pointer hover:bg-gray-200 rounded-md p-3 transition-all duration-300" onClick={handleVisiMisiClick}>
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

                    <Col span={24} md={12} className="flex flex-col items-center md:items-start mt-5 md:mt-0">
                        <img
                            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
