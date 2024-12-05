"use client";
import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Collapse, message } from "antd";
import Slider from "react-slick";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCarouselDetail from "./imageCarousellDetail";
import SaleBar from "@/components/home/SaleBar";
import Article from "@/components/home/Article";
import ImageCarouselDetail2 from "./imageCarousellDetail2";
import { apiRequest } from "@/utils/api";
import whyawan from "@/../public/json/whyawan.json";
import visimisi from "@/../public/json/visimisi.json";
import { useTranslationCustom } from "../../../../../public/i18n/client";
import useLanguage from "@/zustand/useLanguage";

const { Text } = Typography;
const { Panel } = Collapse;

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                fontSize: "48px",
                color: "#007C92",
            }}
            onClick={onClick}
        >
            <FaCircleArrowRight className="relative top-[100px] left-[40px] hover:text-gray-500 transition-all duration-300" />
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "absolute",
                fontSize: "48px",
                color: "#007C92",
            }}
            onClick={onClick}
        >
            <FaCircleArrowLeft className="relative top-[100px] right-[40px] hover:text-gray-500 transition-all duration-300" />
        </div>
    );
}

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
    const [whyAwanKusuma, setWhyAwanKusuma] = useState<any>(null);
    const [visiMisi, setVisiMisi] = useState<any>(null);

    const { lng } = useLanguage();
    const { t } = useTranslationCustom(lng, "HomePage");


    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLanguage = localStorage.getItem("language");
            setLanguage(storedLanguage ? parseInt(storedLanguage) : 1);
        }
    }, []);

    const fetchData = async () => {
        try {
            const response = await apiRequest('get', `/homepage/faqs/${language}?category=ALL`);
            setData(response.data.data);
        } catch (error) {
            // message.error('Server Unreachable, Please Check Your Internet Connection');
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();

        const whyAwanData = whyawan?.whyAwan.find((whyawan: any) => whyawan.languageId == language);
        setWhyAwanKusuma(whyAwanData);

        const visiMisiData = visimisi?.visimisi.find((visimisi: any) => visimisi.languageId == language);
        setVisiMisi(visiMisiData);

    }, [language]);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    return (
        <Row className="w-full p-5">
            <Col span={24}>
                <Row className="w-full mx-auto">
                    <Col span={24} className="mt-10 md:mt-[124px]">
                        <div className="flex flex-col items-center justify-center z-10" id="kenapa-awan-kusuma">
                            <div className="flex justify-center">
                                <Text className="text-center text-[28px] md:text-[40px] font-semibold inline-block">
                                    {whyAwanKusuma?.title}
                                </Text>
                            </div>
                            <Slider {...settings} className="w-full md:w-1/3 aboutSlider mt-10">
                                {whyAwanKusuma?.items.map((item: any, index: number) => (
                                    <div key={index} className="flex flex-col justify-center pb-10">
                                        <div className="flex justify-center">
                                            <Text className="text-center font-bold text-[20px] md:text-[24px] mt-[20px]">
                                                {item.title}
                                            </Text>
                                        </div>
                                        <div className="flex justify-center">
                                            <Text className="indent-2 text-justify w-11/12 md:w-2/3 text-[16px] md:text-[18px] z-10 mt-[40px] font-medium inline-block">
                                                {item.description}
                                            </Text>
                                        </div>
                                    </div>
                                ))}

                            </Slider>
                        </div>
                        <div className="flex flex-col items-center justify-center md:hidden">
                            <div className="absolute -z-40 bottom-[-110px]">
                                <svg width="1300" height="330" viewBox="0 0 1300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="650" cy="700" r="700" fill="#E6F3F6" />
                                </svg>
                            </div>
                        </div>
                        <div className="hidden flex-col items-center justify-center md:flex">
                            <div className="absolute -z-40 bottom-[-110px]">
                                <svg width="1300" height="300" viewBox="0 0 1300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="650" cy="650" r="650" fill="#E6F3F6" />
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="w-full mx-auto mt-[190px]">
                    <ImageCarouselDetail />
                </Row>


                <Row className="w-full mx-auto my-[60px] md:my-[80px]">
                    <Col span={24} md={12} className="flex flex-col items-center md:items-start">
                        <Text className="text-[28px] md:text-[40px] font-[700] text-center md:text-left md:ml-[250px]">
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
                                    style={{ fontWeight: 600, marginTop: 15 }}
                                >
                                    {isActive ? '-' : '+'}
                                </div>
                            )}
                        >
                            {data.map((item, index) => (
                                <Panel
                                    header={item.question}
                                    key={index + 1}
                                    className="text-[18px] md:text-[30px] font-[600]"
                                    style={{ borderBottom: '1px solid #1A2A3A' }}
                                >
                                    <Text>{item.answer}</Text>
                                </Panel>
                            ))}
                        </Collapse>
                    </Col>

                    <Col span={24} md={12} className="flex flex-col items-center md:items-start mt-5 md:mt-0">
                        <img
                            src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="About Us"
                            className="w-[250px] h-[150px] md:w-[485px] md:h-[280px] rounded-2xl"
                        />
                        <Text className="text-[12px] md:text-[16px] font-[400] mt-4 w-[90%] md:w-[60%] text-justify">
                           {t("culture.Title")}
                        </Text>
                    </Col>
                </Row>

                <Row className="w-full mx-auto">
                    <Col span={24} className="mt-10 md:mt-[124px]">
                        <div className="flex flex-col items-center justify-center z-10" id="visi-misi">
                            <div className="flex justify-center">
                                <Text className="text-center text-[28px] md:text-[40px] font-semibold inline-block">
                                    {visiMisi?.title}
                                </Text>
                            </div>
                            <Slider {...settings} className="w-full md:w-1/3 aboutSlider">
                                {visiMisi?.items.map((item: any, index: number) => (
                                    <div key={index} className="flex flex-col justify-center pb-10">
                                        <div className="flex justify-center">
                                            <Text className="text-center font-bold text-[20px] md:text-[24px] mt-[20px]">
                                                {item.title}
                                            </Text>
                                        </div>
                                        <div className="flex justify-center">
                                            <Text className="indent-2 text-justify w-11/12 md:w-2/3 text-[16px] md:text-[18px] z-10 mt-[40px] font-medium inline-block">
                                                {item.description}
                                            </Text>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="absolute -z-40 bottom-[-110px]">
                                <svg width="1300" height="300" viewBox="0 0 1300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="650" cy="650" r="650" fill="#E6F3F6" />
                                </svg>

                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="w-full mx-auto mt-[190px]">
                    <ImageCarouselDetail2 />
                </Row>


                <Row className="mb-20 mt-[190px]">
                    <Col span={24}>
                        <SaleBar />
                    </Col>
                </Row>

                <Row className="my-20">
                    <Col span={24}>
                        <Article title={"Artikel"} HeaderModel={"Between"} />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default page;
