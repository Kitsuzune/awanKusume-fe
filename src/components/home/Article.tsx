'use client';
import React from "react";
import Slider from "react-slick";
import { Typography } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightOutlined } from '@ant-design/icons';

const { Text } = Typography;

type HeaderModelType = 'CenterRight' | 'Between';

interface ArticleProps {
    title: string;
    HeaderModel: HeaderModelType;
}

const Article: React.FC<ArticleProps> = ({ title, HeaderModel }) => {
    const articles = [
        {
            id: 1,
            title: "Lorem Ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consec",
            image: "https://via.placeholder.com/300",
            hashtags: "#Lorem #Ipsum #Dolor"
        },
        {
            id: 2,
            title: "Another Ipsum Article",
            description: "Dolor sit amet, consectetur adipiscing elit",
            image: "https://via.placeholder.com/300",
            hashtags: "#Lorem #Dolor #Adipiscing"
        },
        {
            id: 3,
            title: "Third Ipsum dolor",
            description: "Adipiscing elit Lorem ipsum dolor",
            image: "https://via.placeholder.com/300",
            hashtags: "#Lorem #Adipiscing #Elit"
        },
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            },
        ],
    };

    const renderHeader = () => {
        switch (HeaderModel) {
            case 'CenterRight':
                return (
                    <div className="flex justify-between md:justify-center items-center">
                        <div className="text-start flex flex-col w-full md:mx-auto md:w-auto">
                            <Text className="text-[24px] md:text-[30px] font-bold">{title}</Text>
                            <Text className="text-[16px] md:text-[18px] mt-2 md:mt-4 font-[400]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </Text>
                        </div>
                        <div className="hidden md:flex items-center justify-end gap-3 mt-4 md:mt-0 w-full md:w-auto">
                            <div className="hover:bg-gray-100 cursor-pointer flex items-center gap-3 p-3 rounded-lg transition-all">
                                <Text className="text-[16px] md:text-[18px] font-bold">View More</Text>
                                <div className="flex items-center border-2 border-[#007893] rounded-full p-1 md:p-2">
                                    <ArrowRightOutlined className="text-[16px] md:text-[18px] text-[#007893]" />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'Between':
                return (
                    <div className="flex justify-between items-center md:mx-5">
                        <div className="flex flex-col w-full md:w-3/4">
                            <Text className="text-[24px] md:text-[30px] font-bold">{title}</Text>
                            <Text className="text-[16px] md:text-[18px] mt-2 md:mt-4 font-[400]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </Text>
                        </div>
                        <div className="hidden md:flex items-center gap-3 mt-4 md:mt-0 w-full md:w-auto">
                            <div className="hover:bg-gray-100 cursor-pointer flex items-center gap-3 p-3 rounded-lg transition-all">
                                <Text className="text-[16px] md:text-[18px] font-bold">View More</Text>
                                <div className="flex items-center border-2 border-[#007893] rounded-full p-1 md:p-2">
                                    <ArrowRightOutlined className="text-[16px] md:text-[18px] text-[#007893]" />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div>
            <div className="p-5">
                {renderHeader()}
            </div>
            <div className="p-7 md:p-5">
                <Slider {...settings} className="mt-0 md:mt-8">
                    {articles.map((article) => (
                        <div key={article.id} className="px-2 md:px-4">
                            <div className="relative">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="rounded-lg w-full object-cover"
                                />
                                <div>
                                    <div className="absolute bottom-14 md:bottom-20 left-0 p-2 md:p-4 bg-white bg-opacity-75">
                                        <Text className="font-bold text-sm md:text-base">{article.title}</Text>
                                    </div>
                                    <div className="absolute bottom-4 md:bottom-5 left-0 p-2 md:p-4 bg-white bg-opacity-75">
                                        <Text className="text-xs md:text-sm">{article.description}</Text>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <Text className="mt-2 md:mt-4 text-[24px] md:text-[36px] font-[700]">
                                    {article.title}
                                </Text>
                                <Text className="text-[12px] md:text-[14px] text-gray-500">{article.hashtags}</Text>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Mobile View More Button */}
            <div className="flex md:hidden justify-center">
                <div className="flex items-center gap-3">
                    <div className="hover:bg-gray-100 cursor-pointer flex items-center gap-3 p-3 rounded-lg transition-all">
                        <Text className="text-[16px] md:text-[18px] font-bold">View More</Text>
                        <div className="flex items-center border-2 border-[#007893] rounded-full p-1 md:p-2">
                            <ArrowRightOutlined className="text-[16px] md:text-[18px] text-[#007893]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;
