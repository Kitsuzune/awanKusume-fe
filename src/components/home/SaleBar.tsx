'use client'
import React from "react";
import { Col, Row, Typography } from "antd";
import useLanguage from "@/zustand/useLanguage";
import { useTranslationCustom } from "@/i18n/client";

const Text = Typography;


const SaleBar = () => {
    const { lng } = useLanguage();
    const { t } = useTranslationCustom(lng, "HomePage");
    return (
        <Row className="w-full p-4 md:p-5">
            <Col span={24}>
                <div className="w-full h-full bg-gray-500 rounded-xl bg-[url('/image/bar-1.png')] bg-cover bg-center p-4 md:p-5 py-[50px] md:py-[100px]">
                    <div className="flex justify-center items-center h-full">
                        <div className="text-start">
                            <Text className="text-[24px] md:text-[48px] w-full md:w-[60%] text-white font-[600]">
                                {/* SALEBAR*/}
                                {t("salebar.Title")}
                            </Text>
                            <Text className="text-[14px] md:text-[20px] w-full md:w-[60%] mt-2 md:mt-4 text-white font-[300]">
                                {/* SUB SALEBAR*/}
                                {t("salebar.SubTitle")}
                            </Text>
                            <form action="https://www.instagram.com/awankusuma.legalitas/">
                                <button
                                    className="bg-[#FEA500] text-white font-bold px-[20px] md:px-[43px] py-[10px] md:py-[18px] text-[14px] md:text-[15px] rounded-[25px] md:rounded-[35px] mt-3 md:mt-5 hover:bg-[#8f802b] transition-all duration-500"
                                    type="submit"
                                >
                                    {/* BUTTON */}
                                    {t("salebar.Button")}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default SaleBar;
