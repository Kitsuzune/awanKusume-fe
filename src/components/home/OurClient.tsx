'use client';
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row, Typography, message } from "antd";
import quote from "@/../public/image/quote.svg";
import { apiRequest } from "@/utils/api";
import idTranslations from "@/../public/i18n/locales/id/HomePage.json";
import enTranslations from "@/../public/i18n/locales/en/HomePage.json";
import cnTranslations from "@/../public/i18n/locales/cn/HomePage.json";

const { Text } = Typography;
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

interface OurClientProps {
    slidesToShow: number;
    TopText?: boolean;
    BottomText?: boolean;
}

interface Testimonial {
    id: string;
    description: string;
    image: string;
    name: string;
    hastag: string;
    link: string;
}

const OurClient: React.FC<OurClientProps> = ({ slidesToShow, TopText = true, BottomText = true }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [language, setLanguage] = useState<number>(() => {
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('language');
            return storedLanguage ? parseInt(storedLanguage) : 1;
        }
        return 1;
    });

    const fetchTestimonials = async () => {
        try {
            const response = await apiRequest('get', `/homepage/our-clients/${language}`);
            setTestimonials(response.data.data);
        } catch (error) {
            // message.error('Failed to fetch testimonials');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, [language]);

    const translations = getTranslations(language);

    const repeatedTestimonials = Array.from({ length: 10 }, (_, i) => testimonials[i % testimonials.length]);

    const settings = {
        loop: true,
        centerMode: true,
        slidesToShow: slidesToShow,
        margin: 0,
        autoplay: true,
        dots: false,
        autoplaySpeed: 8500,
        arrows: false,
        speed: 450,
        beforeChange: (current: number, next: number) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: Math.min(slidesToShow, 3),
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Row className="w-full bg-[#F8F8F8] p-5">
            <Col span={24}>
                {TopText && (
                    <div className="text-center flex flex-col">
                        <Text suppressHydrationWarning className="text-[24px] md:text-[40px] font-[700]">
                            {/* OURCLIENT */}
                            {translations.ourclient["Title"]}
                        </Text>
                        <Text suppressHydrationWarning className="text-[16px] md:text-[24px] mt-2 md:mt-4">
                            {/* SUB OURCLIENT*/}
                            {translations.ourclient["SubTitle"]}
                        </Text>
                    </div>
                )}

                <div className="mt-4">
                    <Slider {...settings}>
                        {repeatedTestimonials.map((testimonial, index) => (
                            <div
                                key={`${testimonial?.id}-${index}`}
                                className={`px-2 md:px-4 py-10 md:py-10 transform transition-transform duration-300 ease-in-out ${index === activeSlide ? 'scale-105 md:scale-110' : 'scale-95 md:scale-90 opacity-70 md:opacity-50'}`}
                                onDoubleClick={() => window.open(testimonial?.link, '_blank')}
                            >
                                <div className="shadow-effect bg-white p-3 md:p-5 pt-[50px] md:pt-[70px] rounded-[20px] md:rounded-[35px] text-center">
                                    <img
                                        src={quote.src}
                                        alt="quote"
                                        className="absolute top-8 md:top-11 right-8 md:right-10 w-[60px] md:w-[78px]"
                                    />
                                    <p className="text-sm md:text-lg text-start font-light px-3 md:px-5 text-gray-700 mb-4 md:mb-6">
                                        {testimonial?.description}
                                    </p>
                                    <img
                                        className="img-circle mx-auto mt-3 md:mt-5 mb-3 md:mb-4 rounded-full w-[70px] md:w-[90px] object-cover h-[70px] md:h-[90px]"
                                        src={testimonial?.image}
                                        alt={testimonial?.name}
                                    />
                                    <p className="text-sm md:text-lg font-semibold text-gray-700">
                                        #{testimonial?.hastag}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {BottomText && (
                    <div className="text-center flex flex-col relative h-[60px] md:h-[80px]">
                        {repeatedTestimonials.map((testimonial, index) => (
                            <Text
                                key={`bottom-${testimonial?.id}-${index}`}
                                className={`absolute w-full text-[24px] md:text-[40px] font-[500] transition-all duration-700 ease-in-out transform ${index === activeSlide
                                        ? 'opacity-100 translate-y-0 scale-100'
                                        : 'opacity-0 -translate-y-4 scale-95'
                                    }`}
                            >
                                {testimonial?.name}
                            </Text>
                        ))}
                    </div>
                )}

            </Col>
        </Row>
    );
};

export default OurClient;
