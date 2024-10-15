'use client';
import React, { useEffect, useState } from "react";
import { Col, message, Row, Typography } from "antd";
import { apiRequest } from "@/utils/api";
import useLanguage from "@/zustand/useLanguage";
import { useTranslationCustom } from "@/i18n/client";

const { Text } = Typography;

interface Partner {
    id: string;
    title: string;
    image: string;
    link: string;
}

const CompanyLogo = () => {
    const [partners, setPartners] = useState<Partner[]>([]);
    const { lng } = useLanguage();
    const { t } = useTranslationCustom(lng, "HomePage");

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                // const response = await axios.get('/homepage/partners');
                // if (response.data.code === 200) {
                //     setPartners(response.data.data);
                // }
                const response = await apiRequest('get', '/homepage/partners');
                setPartners(response.data.data);
            } catch (error) {
                message.error('Failed to fetch partners');
                console.log(error);
            }
        };

        fetchPartners();
    }, []);

    return (
        <Row className="w-full p-4 md:p-5">
            <Col span={24}>
                <div className="text-center flex flex-wrap justify-center items-center gap-10 md:gap-20 pb-5">
                    {partners.map(partner => (
                        <a key={partner.id} href={`http://${partner.link}`} target="_blank" rel="noopener noreferrer">
                            <img src={partner.image} alt={partner.title} className="h-[80px] w-[80px]" />
                        </a>
                    ))}
                </div>
            </Col>

            <Col span={24} className="mt-12 md:mt-16">
                <div className="flex justify-center items-center mt-5 md:mt-10">
                    <button className="bg-[#FEA500] text-white font-bold px-[20px] md:px-[43px] py-[10px] md:py-[18px] text-[14px] md:text-[15px] rounded-[25px] md:rounded-[35px] hover:bg-[#8f802b] transition-all duration-500">
                        {/* BUTTON */}
                        {t("companylogo.Button")}
                    </button>
                </div>
            </Col>
        </Row>
    );
};

export default CompanyLogo;
