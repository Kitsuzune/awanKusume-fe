'use client';
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row, Typography, message } from "antd";
import quote from "@/../public/image/quote.svg";
import { apiRequest } from "@/utils/api"; // Assuming you have an apiRequest utility
import dynamic from "next/dynamic";

const { Text } = Typography;

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
            message.error('Failed to fetch testimonials');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, [language]);

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
                        <Text className="text-[24px] md:text-[40px] font-[700]">OUR CLIENT</Text>
                        <Text className="text-[16px] md:text-[24px] mt-2 md:mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Text>
                    </div>
                )}

                <div className="mt-4">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <>
                                <div key={testimonial?.id} className={`px-2 md:px-4 py-10 md:py-20 transform transition-transform duration-300 ease-in-out ${index === activeSlide ? 'scale-105 md:scale-110' : 'scale-95 md:scale-90 opacity-70 md:opacity-50'}`}>
                                    <div className="shadow-effect bg-white p-3 md:p-5 pt-[50px] md:pt-[70px] rounded-[20px] md:rounded-[35px] text-center">
                                        <img src={quote.src} alt="quote" className="absolute top-8 md:top-11 right-8 md:right-10 w-[60px] md:w-[78px]" />
                                        <p className="text-sm md:text-lg text-start font-light px-3 md:px-5 text-gray-700 mb-4 md:mb-6">{testimonial.description}</p>
                                        <img
                                            className="img-circle mx-auto mt-3 md:mt-5 mb-3 md:mb-4 rounded-full w-[70px] md:w-[90px] object-cover h-[70px] md:h-[90px]"
                                            src={testimonial?.image}
                                            alt={testimonial?.name}
                                        />
                                    </div>
                                </div>
                                {BottomText && (
                                    <div className="text-center flex flex-col mb-4 md:mb-5">
                                        <Text className="text-[24px] md:text-[40px] font-[500]">#{testimonial?.hastag}</Text>
                                    </div>
                                )}
                            </>
                        ))}
                    </Slider>
                </div>

                {/* {BottomText && (
                    <div className="text-center flex flex-col mb-4 md:mb-5">
                        <Text className="text-[24px] md:text-[40px] font-[500]">{testimonial?.hastag}</Text>
                    </div>
                )} */}
            </Col>
        </Row>
    );
};

export default OurClient;