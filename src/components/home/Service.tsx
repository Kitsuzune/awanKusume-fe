'use client';
import React, { useState, useEffect } from "react";
import { Col, message, Row, Typography } from "antd";
import AnimatedCursor from "react-animated-cursor";
import idTranslations from "@/../public/i18n/locales/id/HomePage.json";
import enTranslations from "@/../public/i18n/locales/en/HomePage.json";
import cnTranslations from "@/../public/i18n/locales/cn/HomePage.json";
import { apiRequest } from "@/utils/api";
import Link from "next/link";

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

interface ServiceData {
    id: string;
    title: string;
    subTitle: string;
    image: string;
    show: boolean;
    type: number;
    updatedAt?: string;
    createdBy?: string;
}

interface ServiceProps {
    showHeader?: boolean;
    type?: string;
    status?: "PT" | "CV" | "ALL";
    redirectFromSpecificService?: boolean;
}

const Service: React.FC<ServiceProps> = ({ showHeader = true, type = "", status = "ALL", redirectFromSpecificService = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [services, setServices] = useState<ServiceData[]>([]);
    const [language, setLanguage] = useState<number>(() => {
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('language');
            return storedLanguage ? parseInt(storedLanguage) : 1;
        }
        return 1;
    });
    const translations = getTranslations(language);

    // const excludedIds = ["25", "37", "40", "55"];
    const excludedIds = [
        "25", "26", "27",
        "37", "38", "39",
        "40", "41", "42",
        "55", "56", "57"
    ];

    const fetchData = async () => {
        try {
            const statusQuery = status !== "ALL" ? `?status=${status}` : "";
            // const typeQuery = type ? `&type=${type}` : "";
            const typeQuery = status == "PT" || status == "CV" ? `&type=${type}` : `?type=${type}`;
            const response = await apiRequest(
                'get',
                `/homepage/services/${language}${statusQuery}${typeQuery}`
            );

            console.log("Raw data:", response.data.data);

            // Ensure service IDs are treated as strings for comparison
            const filteredServices = response.data.data.filter((service: ServiceData) =>
                !excludedIds.includes(service.id.toString())
            );

            console.log("Filtered data:", filteredServices);

            setServices(filteredServices);
        } catch (error) {
            // message.error('Server Unreachable, Please Check Your Internet Connection');
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
    }, [language, status]);

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
                            <Text suppressHydrationWarning className="text-2xl md:text-4xl font-bold inline-block">
                                {translations.service["Title"]}
                            </Text>
                            <Text suppressHydrationWarning className="text-base md:text-lg mt-2 md:mt-4 text-justify md:text-center inline-block mx-7 md:mx-0">
                                {translations.service["SubTitle"]}
                            </Text>
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
                                    href={redirectFromSpecificService === true ? service.type == 0 ? `/layanan/pendirian-perusahaan` : `/layanan/${service.id}` : `/layanan/${service.id}`}
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
