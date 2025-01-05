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
    const IDAKSectionRef = useRef<HTMLDivElement>(null);
    const BPOMSectionRef = useRef<HTMLDivElement>(null);
    const TrademarkLokalPeroranganSectionRef = useRef<HTMLDivElement>(null);
    const TrademarkBadanUsahaSectionRef = useRef<HTMLDivElement>(null);
    const TrademarkLuarNegeriPeroranganSectionRef = useRef<HTMLDivElement>(null);
    const TrademarkBadanUsahaLuarNegeriSectionRef = useRef<HTMLDivElement>(null);
    const SMKPOSectionRef = useRef<HTMLDivElement>(null);
    const KlinikPratamaSectionRef = useRef<HTMLDivElement>(null);
    const INSWSectionRef = useRef<HTMLDivElement>(null);
    const AKLSectionRef = useRef<HTMLDivElement>(null);
    const [language, setLanguage] = useState<number>(1);
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
                                {translations.layanan["TitlePB"]}
                            </Text>
                            <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-start mt-3 md:mt-5 w-[100%] md:w-[50%]">
                                {translations.layanan["SubTitlePB"]}
                            </Text>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10" ref={IDAKSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text suppressHydrationWarning className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                {translations.layanan["IDAK"]}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {translations.layanan["SubIDAK"]}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} type="1" status="ALL" />
                </Col>
            </Row>

            <Row className="my-10" ref={BPOMSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text suppressHydrationWarning className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                {translations.layanan["BPOM"]}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {translations.layanan["SubBPOM"]}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} type="2" status="ALL" />
                </Col>
            </Row>

            <Row className="my-10" ref={TrademarkLokalPeroranganSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text suppressHydrationWarning className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                {translations.layanan["TrademarkUntukLokalPerorangan"]}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {translations.layanan["SubTrademarkUntukLokalPerorangan"]}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} type="3" status="ALL" />
                </Col>
            </Row>

            <Row className="my-10" ref={TrademarkBadanUsahaSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text suppressHydrationWarning className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                {translations.layanan["TrademarkUntukBadanUsaha"]}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {translations.layanan["SubTrademarkUntukBadanUsaha"]}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} type="4" status="ALL" />
                </Col>
            </Row>

            <Row className="my-10" ref={TrademarkLuarNegeriPeroranganSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text suppressHydrationWarning className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                {translations.layanan["TrademarkUntukLuarNegeriPerorangan"]}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {translations.layanan["SubTrademarkUntukLuarNegeriPerorangan"]}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} type="5" status="ALL" />
                </Col>
            </Row>

            <Row className="my-10" ref={TrademarkBadanUsahaLuarNegeriSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text suppressHydrationWarning className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                {translations.layanan["TrademarkUntukBadanUsahaLuarNegeri"]}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {translations.layanan["SubTrademarkUntukBadanUsahaLuarNegeri"]}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} type="6" status="ALL" />
                </Col>
            </Row>

            <Row className="my-10" ref={SMKPOSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text suppressHydrationWarning className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                {translations.layanan["SMKPO"]}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {translations.layanan["SubSMKPO"]}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} type="7" status="ALL" />
                </Col>
            </Row>

            <Row className="my-10" ref={KlinikPratamaSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text suppressHydrationWarning className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                {translations.layanan["KlinikPratama"]}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {translations.layanan["SubKlinikPratama"]}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} type="8" status="ALL" />
                </Col>
            </Row>

            <Row className="my-10" ref={INSWSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text suppressHydrationWarning className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                {translations.layanan["INSW"]}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {translations.layanan["SubINSW"]}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} type="9" status="ALL" />
                </Col>
            </Row>

            <Row className="my-10" ref={AKLSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text suppressHydrationWarning className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                {translations.layanan["AKL"]}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {translations.layanan["SubAKL"]}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10">
                <Col span={24}>
                    <Service showHeader={false} type="10" status="ALL" />
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
