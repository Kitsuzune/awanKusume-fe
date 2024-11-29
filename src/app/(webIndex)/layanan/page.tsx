'use client';
import React, { useRef } from "react";
import { Button, Col, Row, Typography } from "antd";
import Service from "@/components/home/Service";
import SaleBar from "@/components/home/SaleBar";
import useLanguage from "@/zustand/useLanguage";
import { useTranslationCustom } from "../../../../public/i18n/client";

const Text = Typography;

const Page: React.FC = () => {
    const ptSectionRef = useRef<HTMLDivElement>(null);
    const cvSectionRef = useRef<HTMLDivElement>(null);
    const { lng } = useLanguage();
    const { t } = useTranslationCustom(lng, "HomePage");

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
                                {t("layanan.Title")}
                            </Text>
                            <Text className="text-[16px] md:text-[18px] font-[500] text-start mt-3 md:mt-5 w-[100%] md:w-[50%]">
                                {t("layanan.SubTitle")}
                            </Text>
                            <div className="flex flex-col md:flex-row mt-3 md:mt-5 gap-3">
                                <Button
                                    className="text-white rounded-[35px] text-[16px] px-[10px] md:px-[15px] py-[5px] bg-[#FEA500]"
                                    onClick={() => scrollToSection(ptSectionRef)}
                                >
                                    {t("layanan.PT")}
                                </Button>
                                <Button
                                    className="text-white rounded-[35px] text-[16px] px-[10px] md:px-[15px] py-[5px] bg-[#FEA500]"
                                    onClick={() => scrollToSection(cvSectionRef)}
                                >
                                    {t("layanan.CV")}
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
                            <Text className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                            {t("layanan.PT")}
                            </Text>
                            <div className="flex justify-center">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                {t("layanan.SubPT")}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} status="PT" />
                </Col>
            </Row>

            <Row className="my-10" ref={cvSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                            {t("layanan.CV")}
                            </Text>
                            <div className="flex justify-center">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                {t("layanan.SubCV")}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} status="CV" />
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
