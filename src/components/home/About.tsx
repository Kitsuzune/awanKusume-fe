'use client';
import { apiRequest } from "@/utils/api";
import { Col, Row, Typography } from "antd";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
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


interface About {
    id: string;
    title: string;
    subTitle: string;
    image: string;
    link: string;
}

const About: React.FC = () => {
    
    const [abouts, setAbouts] = useState<About[]>([]);
    const [language, setLanguage] = useState<number>(() => {
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('language');
            return storedLanguage ? parseInt(storedLanguage) : 1;
        }
        return 1;
    });
    const translations = getTranslations(language);

    const fetchAbouts = async () => {
        try {
            const response = await apiRequest('get', `/homepage/abouts/${language}`);
            setAbouts(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchAbouts();
    }, []);

    return (
        <div className="flex items-center">
            <Row className="w-[100%] lg:w-[65%] mx-auto">
                <Col span={24}>
                    <div className="mx-7 md:mx-0">
                        <Text suppressHydrationWarning className="text-[24px] md:text-[40px] font-[700]">
                            {/* SERVICE */}
                            {translations.about["Title"]}
                        </Text>

                        <Text suppressHydrationWarning className="text-[16px] md:text-[24px] mt-2 md:mt-4 inline-block text-justify">
                            {/* SUB SERVICE */}
                            {translations.about["SubTitle"]}
                        </Text>
                    </div>

                    <Row className="mt-5 md:mt-10">
                        {abouts.map((about) => (
                            <Col xs={24} md={12} key={about.id}>
                                <div className="flex items-center justify-center md:justify-end mt-5 md:mt-0">
                                    <div
                                        className="relative w-[90%] md:w-[650px] h-[200px] md:h-[444px] mr-0 md:mr-5 group mt-5 cursor-pointer"
                                        onClick={() => {
                                            const url = about.link.startsWith('http://') || about.link.startsWith('https://')
                                                ? about.link
                                                : `http://${about.link}`;
                                            window.open(url, '_blank');
                                        }}
                                    >
                                        <img
                                            src={about.image}
                                            alt={about.title}
                                            className="rounded-[20px] opacity-100 w-full h-full object-cover transition-opacity duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 rounded-[20px] hover:bg-opacity-100 transition-all duration-300 group-hover:bg-opacity-50" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-[20px]" />
                                        <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 text-white">
                                            <Text className="text-lg md:text-2xl text-white font-[800]">{about.title}</Text>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default About;
