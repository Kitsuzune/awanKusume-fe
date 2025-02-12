'use client';
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Typography } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightOutlined } from '@ant-design/icons';
import { apiRequest } from "@/utils/api";
import { truncateText } from "@/const/truncateText";
import { formatDate } from "@/const/dateFormat";
import idTranslations from "@/../public/i18n/locales/id/HomePage.json";
import enTranslations from "@/../public/i18n/locales/en/HomePage.json";
import cnTranslations from "@/../public/i18n/locales/cn/HomePage.json";
import Link from "next/link";

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


type HeaderModelType = 'CenterRight' | 'Between' | 'None';

interface ArticleProps {
    title: string;
    HeaderModel: HeaderModelType;
}

interface Post {
    id: string;
    slug: string;
    title: string;
    content: string;
    image: string;
    show: boolean;
    updatedAt?: string;
    createdBy: string;
}

const Article: React.FC<ArticleProps> = ({ title, HeaderModel }) => {
    const [post, setPost] = useState<Post[]>([]);
    const [pagination, setPagination] = useState({ page: 1, perPage: 4, totalData: 1 });
    const [language, setLanguage] = useState<number>(1);
    const [order, setOrder] = useState({
        order: 'desc',
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLanguage = localStorage.getItem("language");
            setLanguage(storedLanguage ? parseInt(storedLanguage) : 1);
        }
    }, []);

    const translations = getTranslations(language);

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

    const fetchPost = async () => {
        try {
            const response = await apiRequest('get', '/homepage/blog', {}, {
                page: pagination.page,
                perPage: pagination.perPage,
                where: "",
                orderBy: "id:desc"
            });

            let posts = response.data.data.map((item: any) => ({
                id: item.id,
                slug: item.slug,
                title: item.title,
                content: item.content.replace(/<[^>]+>/g, ''),
                image: item.image,
                show: false,
                updatedAt: item.updatedAt,
                createdBy: item.createdBy,
            }));

            if (posts.length < 4) {
                const repeatCount = Math.ceil(4 / posts.length); 
                posts = Array(repeatCount).fill(posts).flat().slice(0, 4);
            }

            setPost(posts);

            setPagination({
                page: response.data.meta.current_page,
                perPage: response.data.meta.per_page,
                totalData: response.data.meta.total,
            });

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPost();
    }, []);

    const renderHeader = () => {
        switch (HeaderModel) {
            case 'CenterRight':
                return (
                    <div className="grid grid-cols-6 justify-between md:justify-center items-center">
                        <div className="col-span-6 md:col-span-4 text-start flex flex-col w-full md:mx-auto md:w-auto">
                            <Text className="text-[24px] md:text-[40px] font-[700]">{title}</Text>
                            <Text suppressHydrationWarning className="text-[16px] md:text-[18px] mt-2 md:mt-4 font-[400]">
                                {translations.artikel["Title"]}
                            </Text>
                        </div>
                        <div className="col-span-6 hidden md:flex md:col-span-2 items-center justify-end gap-3 mt-4 md:mt-0 w-full md:w-auto">
                            <Link href={'/blogPost'} className="hover:bg-gray-100 cursor-pointer flex items-center gap-3 p-3 rounded-lg transition-all">
                                <Text className="text-[16px] md:text-[18px] font-bold">View More</Text>
                                <div className="flex items-center border-2 border-[#007893] rounded-full p-1 md:p-2">
                                    <ArrowRightOutlined className="text-[16px] md:text-[18px] text-[#007893]" />
                                </div>
                            </Link>
                        </div>
                    </div>
                );

            case 'Between':
                return (
                    <div className="flex justify-between items-center md:mx-5">
                        <div className="flex flex-col w-full md:w-3/4">
                            <Text className="text-[24px] md:text-[40px] font-[700]">{title}</Text>
                            <Text suppressHydrationWarning className="text-[16px] md:text-[18px] mt-2 md:mt-4 font-[400]">
                                {translations.artikel["Title"]}
                            </Text>
                        </div>
                        <div className="hidden md:flex items-center gap-3 mt-4 md:mt-0 w-full md:w-auto">
                            <Link href={'/blogPost'} className="hover:bg-gray-100 cursor-pointer flex items-center gap-3 p-3 rounded-lg transition-all">
                                <Text className="text-[16px] md:text-[18px] font-bold">View More</Text>
                                <div className="flex items-center border-2 border-[#007893] rounded-full p-1 md:p-2">
                                    <ArrowRightOutlined className="text-[16px] md:text-[18px] text-[#007893]" />
                                </div>
                            </Link>
                        </div>
                    </div>
                );

            case 'None':
                return null;

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
                    {post.map((article) => (
                        <div key={article.id} className="px-2 md:px-4">
                            <Link href={`/blogPost/${article.slug}`} className="relative">
                                <img
                                    src={`${process.env.NEXT_PUBLIC_API_URL_CSM}/public/blog/${article.id}/${article.image}`}
                                    alt={article.title}
                                    className="rounded-lg object-cover w-full aspect-square"
                                />
                                <div>
                                    <div className="absolute bottom-14 md:bottom-20 left-0 p-2 md:p-4 bg-white bg-opacity-75">
                                        <Text className="font-bold text-sm md:text-base">{formatDate(article.updatedAt)}</Text>
                                    </div>
                                    <div className="absolute bottom-4 md:bottom-5 left-0 p-2 md:p-4 bg-white bg-opacity-75">
                                        <Text className="text-xs md:text-sm">
                                            {/* {article.content} */}
                                            {truncateText(article.createdBy, 30)}
                                        </Text>
                                    </div>
                                </div>
                            </Link>
                            <div className="flex flex-col">
                                <Text className="truncate mt-2 md:mt-4 text-[24px] md:text-[24px] font-[700]">
                                    {article.title}
                                </Text>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Mobile View More Button */}
            <div className="flex md:hidden justify-center">
                <div className="flex items-center gap-3">
                    <Link href={'/blogPost'} className="hover:bg-gray-100 cursor-pointer flex items-center gap-3 p-3 rounded-lg transition-all">
                        <Text className="text-[16px] md:text-[18px] font-bold">View More</Text>
                        <div className="flex items-center border-2 border-[#007893] rounded-full p-1 md:p-2">
                            <ArrowRightOutlined className="text-[16px] md:text-[18px] text-[#007893]" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Article;
