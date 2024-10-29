'use client';
import React, { useState, useEffect } from "react";
import { Col, message, Row, Typography } from "antd";
import AnimatedCursor from "react-animated-cursor";
import useLanguage from "@/zustand/useLanguage";
import { useTranslationCustom } from "@/i18n/client";
import { apiRequest } from "@/utils/api";
import Link from "next/link";

const Text = Typography;

interface ServiceData {
    id: string;
    title: string;
    subTitle: string;
    image: string;
    show: boolean;
    updatedAt?: string;
    createdBy?: string;
}

interface ServiceProps {
    showHeader?: boolean;
}

const Service: React.FC<ServiceProps> = ({ showHeader = true }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [services, setServices] = useState<ServiceData[]>([]);
    const { lng } = useLanguage();
    const { t } = useTranslationCustom(lng, "HomePage");
    const [language, setLanguage] = useState<number>(() => {
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('language');
            return storedLanguage ? parseInt(storedLanguage) : 1;
        }
        return 1;
    });

    const fetchData = async () => {
        try {
            const response = await apiRequest('get', `/homepage/services/${language}`);
            setServices(response.data.data);
        } catch (error) {
            message.error('Server Unreachable, Please Check Your Internet Connection');
            console.log(error);
        }
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        fetchData();
    }, [language]);

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
                    outerStyle={{ border: "3px solid #1A2A3A" }}
                    innerStyle={{ backgroundColor: "#FEA500" }}
                />
            )}

            <Row className="w-full lg:w-2/3 mx-auto">
                <Col span={24}>
                    {showHeader && (
                        <div className="text-center">
                            <Text className="text-2xl md:text-4xl font-bold">{t("service.Title")}</Text>
                            <Text className="text-base md:text-lg mt-2 md:mt-4">{t("service.SubTitle")}</Text>
                        </div>
                    )}
                    <Row gutter={[16, 16]} className="mt-5 md:mt-10 justify-center">
                        {services.map((service, index) => (
                            <Col 
                                key={service.id} 
                                xs={24} 
                                md={12} 
                                className="flex justify-center md:justify-start items-center"
                            >
                                <Link 
                                    href={`/layanan/${service.id}`}
                                    className="relative w-11/12 md:w-[650px] h-[200px] md:h-[444px] group cursor-none"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <img
                                        src={service.image}
                                        alt={`service-${index + 1}`}
                                        className="rounded-2xl w-full h-[200px] md:h-[444px] object-cover transition-opacity duration-300 group-hover:opacity-30"
                                    />
                                    <div className="absolute inset-0 flex flex-col text-white px-4 md:px-8 pt-5 md:pt-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <Text className="text-sm md:text-lg font-bold text-center md:text-start">{service.title}</Text>
                                        <Text className="text-sm md:text-lg mt-3 text-center md:text-start w-4/5 md:w-3/5 mx-auto md:mx-0">{service.subTitle}</Text>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Service;
