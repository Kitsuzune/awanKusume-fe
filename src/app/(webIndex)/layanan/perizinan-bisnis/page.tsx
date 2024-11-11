'use client';
import React, { useRef } from "react";
import { Button, Col, Row, Typography } from "antd";
import Service from "@/components/home/Service";
import SaleBar from "@/components/home/SaleBar";

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
                            <Text className="text-[28px] md:text-[40px] font-[600] text-start">
                                Lorem Ipsum dolor sit amet!
                            </Text>
                            <Text className="text-[16px] md:text-[18px] font-[500] text-start mt-3 md:mt-5 w-[100%] md:w-[50%]">
                                Whether your time-saving automation needs are large or small, we’re here to help you scale. Whether your time-saving automation needs are large or small, we’re here to help you scale. Whether your time-saving automation needs are large or small, we’re here to help you scale.
                            </Text>
                            {/* <div className="flex flex-col md:flex-row mt-3 md:mt-5 gap-3">
                                <button
                                    className="text-white rounded-[5px] text-[16px] px-[10px] md:px-[12px] py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                    onClick={() => scrollToSection(IDAKSectionRef)}
                                >
                                    IDAK
                                </button>
                                <button
                                    className="text-white rounded-[5px] text-[16px] px-[10px] md:px-[12px] py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                    onClick={() => scrollToSection(BPOMSectionRef)}
                                >
                                    BPOM
                                </button>
                                <button
                                    className="text-white rounded-[5px] text-[16px] px-[10px] md:px-[12px] py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                    onClick={() => scrollToSection(TrademarkLokalPeroranganSectionRef)}
                                >
                                    Trademark Untuk Lokal Perorangan
                                </button>
                                <button
                                    className="text-white rounded-[5px] text-[16px] px-[10px] md:px-[12px] py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                    onClick={() => scrollToSection(TrademarkBadanUsahaSectionRef)}
                                >
                                    Trademark Untuk Badan Usaha
                                </button>
                                <button
                                    className="text-white rounded-[5px] text-[16px] px-[10px] md:px-[12px] py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                    onClick={() => scrollToSection(TrademarkLuarNegeriPeroranganSectionRef)}
                                >
                                    Trademark Untuk Luar Negeri Perorangan
                                </button>
                                <button
                                    className="text-white rounded-[5px] text-[16px] px-[10px] md:px-[12px] py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                    onClick={() => scrollToSection(TrademarkBadanUsahaLuarNegeriSectionRef)}
                                >
                                    Trademark Untuk Badan Usaha Luar Negeri
                                </button>
                                <button
                                    className="text-white rounded-[5px] text-[16px] px-[10px] md:px-[12px] py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                    onClick={() => scrollToSection(SMKPOSectionRef)}
                                >
                                    SMKPO
                                </button>
                                <button
                                    className="text-white rounded-[5px] text-[16px] px-[10px] md:px-[12px] py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                    onClick={() => scrollToSection(KlinikPratamaSectionRef)}
                                >
                                    Klinik Pratama atau Klinik Kecantikan
                                </button>
                                <button
                                    className="text-white rounded-[5px] text-[16px] px-[10px] md:px-[12px] py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                    onClick={() => scrollToSection(INSWSectionRef)}
                                >
                                    INSW
                                </button>
                                <button
                                    className="text-white rounded-[5px] text-[16px] px-[10px] md:px-[12px] py-[5px] bg-[#FEA500] hover:bg-[#FFB800]"
                                    onClick={() => scrollToSection(AKLSectionRef)}
                                >
                                    AKL
                                </button>
                            </div> */}
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-10" ref={IDAKSectionRef}>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col justify-center">
                            <Text className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                IDAK
                            </Text>
                            <div className="flex justify-center">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    IDAK adalah proses pembentukan badan hukum perseroan terbatas yang dilakukan oleh satu atau lebih orang yang disebut sebagai pendiri.
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
                            <Text className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                BPOM
                            </Text>
                            <div className="flex justify-center">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    BPOM adalah proses pembentukan badan hukum perseroan terbatas yang dilakukan oleh dua orang atau lebih yang disebut sebagai para pengelola.
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
                            <Text className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                Trademark Untuk Lokal Perorangan
                            </Text>
                            <div className="flex justify-center">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    Trademark Untuk Lokal Perorangan adalah proses pembentukan badan hukum perseroan terbatas yang dilakukan oleh dua orang atau lebih yang disebut sebagai para pengelola.
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
                            <Text className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                Trademark Untuk Badan Usaha
                            </Text>
                            <div className="flex justify-center">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    Trademark Untuk Badan Usaha adalah proses pembentukan badan hukum perseroan terbatas yang dilakukan oleh dua orang atau lebih yang disebut sebagai para pengelola.
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
                            <Text className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                Trademark Untuk Luar Negeri Perorangan
                            </Text>
                            <div className="flex justify-center">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    Trademark Untuk Luar Negeri Perorangan adalah proses pembentukan badan hukum perseroan terbatas yang dilakukan oleh dua orang atau lebih yang disebut sebagai para pengelola.
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
                            <Text className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                Trademark Untuk Badan Usaha Luar Negeri
                            </Text>
                            <div className="flex justify-center">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    Trademark Untuk Badan Usaha Luar Negeri adalah proses pembentukan badan hukum perseroan terbatas yang dilakukan oleh dua orang atau lebih yang disebut sebagai para pengelola.
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
                            <Text className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                SMKPO
                            </Text>
                            <div className="flex justify-center">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    SMKPO adalah proses pembentukan badan hukum perseroan terbatas yang dilakukan oleh dua orang atau lebih yang disebut sebagai para pengelola.
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
                            <Text className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                Klinik Pratama atau Klinik Kecantikan
                            </Text>
                            <div className="flex justify-center">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    Klinik Pratama atau Klinik Kecantikan adalah proses pembentukan badan hukum perseroan terbatas yang dilakukan oleh dua orang atau lebih yang disebut sebagai para pengelola.
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
                            <Text className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                INSW
                            </Text>
                            <div className="flex justify-center">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    INSW adalah proses pembentukan badan hukum perseroan terbatas yang dilakukan oleh dua orang atau lebih yang disebut sebagai para pengelola.
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
                            <Text className="text-[28px] md:text-[55px] font-[600] text-center text-main">
                                AKL
                            </Text>
                            <div className="flex justify-center">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-center mt-3 md:mt-5 w-[80%]">
                                    AKL adalah proses pembentukan badan hukum perseroan terbatas yang dilakukan oleh dua orang atau lebih yang disebut sebagai para pengelola.
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
