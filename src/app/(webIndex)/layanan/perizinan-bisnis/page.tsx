'use client';
import React, { useRef } from "react";
import { Button, Col, Row, Typography } from "antd";
import Service from "@/components/home/Service";
import SaleBar from "@/components/home/SaleBar";
import useLanguage from "@/zustand/useLanguage";
import { useTranslationCustom } from "../../../../../public/i18n/client";

const Text = Typography;

const Page: React.FC = () => {
    // const ptSectionRef = useRef<HTMLDivElement>(null);
    // const cvSectionRef = useRef<HTMLDivElement>(null);
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

    const { lng } = useLanguage();
    const { t } = useTranslationCustom(lng, "HomePage");

    // <Option value="IDAK">IDAK</Option>
    // <Option value="BPOM">BPOM</Option>
    // <Option value="Trademark Untuk Lokal Perorangan">Trademark Untuk Lokal Perorangan</Option>
    // <Option value="Trademark Untuk Badan Usaha">Trademark Untuk Badan Usaha</Option>
    // <Option value="Trademark Untuk Luar Negeri Perorangan">Trademark Untuk Luar Negeri Perorangan</Option>
    // <Option value="Trademark Untuk Badan Usaha Luar Negeri">Trademark Untuk Badan Usaha Luar Negeri</Option>
    // <Option value="SMKPO">SMKPO</Option>
    // <Option value="Klinik Pratama atau Klinik Kecantikan">Klinik Pratama atau Klinik Kecantikan</Option>
    // <Option value="INSW">INSW</Option>
    // <Option value="AKL">AKL</Option>


    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Row>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col">
                            <Text suppressHydrationWarning className="text-[28px] md:text-[40px] font-[600] text-start">
                                {t("layanan.TitlePB")}
                            </Text>
                            <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-start mt-3 md:mt-5 w-[100%] md:w-[50%]">
                                {t("layanan.SubTitlePB")}
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
                                {t("layanan.IDAK")}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {t("layanan.SubIDAK")}
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
                                {t("layanan.BPOM")}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {t("layanan.SubBPOM")}
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
                                {t("layanan.TrademarkUntukLokalPerorangan")}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {t("layanan.SubTrademarkUntukLokalPerorangan")}
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
                                {t("layanan.TrademarkUntukBadanUsaha")}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {t("layanan.SubTrademarkUntukBadanUsaha")}
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
                                {t("layanan.TrademarkUntukLuarNegeriPerorangan")}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {t("layanan.SubTrademarkUntukLuarNegeriPerorangan")}
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
                                {t("layanan.TrademarkUntukBadanUsahaLuarNegeri")}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {t("layanan.SubTrademarkUntukBadanUsahaLuarNegeri")}
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
                                {t("layanan.SMKPO")}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {t("layanan.SubSMKPO")}
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
                                {t("layanan.KlinikPratama")}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {t("layanan.SubKlinikPratama")}
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
                                {t("layanan.INSW")}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {t("layanan.SubINSW")}
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
                                {t("layanan.AKL")}
                            </Text>
                            <div className="flex justify-center">
                                <Text suppressHydrationWarning className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    {t("layanan.SubAKL")}
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
