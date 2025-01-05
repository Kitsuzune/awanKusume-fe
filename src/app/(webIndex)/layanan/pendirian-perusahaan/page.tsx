'use client';
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Row, Typography } from "antd";
import Service from "@/components/home/Service";
import SaleBar from "@/components/home/SaleBar";
import idTranslations from "@/../public/i18n/locales/id/HomePage.json";
import enTranslations from "@/../public/i18n/locales/en/HomePage.json";
import cnTranslations from "@/../public/i18n/locales/cn/HomePage.json";

const Text = Typography;
const getTranslations = (language: number) => {
    switch (language) {
        case 1:
            return idTranslations;
        case 2:
            return enTranslations;
        case 3:
            return cnTranslations;
        default:
            return idTranslations;
    }
};

const Page: React.FC = () => {
    const ptSectionRef = useRef<HTMLDivElement>(null);
    const cvSectionRef = useRef<HTMLDivElement>(null);
    const [language, setLanguage] = useState<number>(1);

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

        useEffect(() => {
            if (typeof window !== "undefined") {
                const storedLanguage = localStorage.getItem("language");
                setLanguage(storedLanguage ? parseInt(storedLanguage) : 1);
            }
        }, []);
    
        const translations = getTranslations(language);

    return (
        <>
            <Row>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col">
                            <Text suppressHydrationWarning className="text-[28px] md:text-[40px] font-[600] text-start">
                                {translations.layanan["TitlePP"]}
                            </Text>
                            <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-start mt-3 md:mt-5 w-[100%] md:w-[50%]">
                                {translations.layanan["SubTitlePP"]}
                            </Text>
                            <div className="flex flex-col md:flex-row mt-3 md:mt-5 gap-3">
                                <Button
                                    className="text-white rounded-[35px] text-[16px] px-[10px] md:px-[15px] py-[5px] bg-[#FEA500]"
                                    onClick={() => scrollToSection(ptSectionRef)}
                                >
                                    {translations.layanan["PT"]}
                                </Button>
                                <Button
                                    suppressHydrationWarning
                                    className="text-white rounded-[35px] text-[16px] px-[10px] md:px-[15px] py-[5px] bg-[#FEA500]"
                                    onClick={() => scrollToSection(cvSectionRef)}
                                >
                                    {translations.layanan["CV"]}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10" ref={ptSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text suppressHydrationWarning className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                {translations.layanan["PT"]}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {translations.layanan["SubPT"]}
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
                            <Text suppressHydrationWarning className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                {translations.layanan["CV"]}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {translations.layanan["SubCV"]}
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
