'use client'

import React, { useEffect, useState } from "react";
import { Col, Row, Typography } from "antd";
import { MdArrowOutward } from "react-icons/md";
import { CustomPagination } from "@/components/ui/Table/CustomPagination";
import { apiRequest } from "@/utils/api";
import { formatDate } from "@/const/dateFormat";
import Link from 'next/link';

const Text = Typography;

interface Post {
    id: string;
    title: string;
    content: string;
    image: string;
    show: boolean;
    updatedAt?: string;
    createdBy?: string;
}

const page: React.FC = () => {

    const [post, setPost] = useState<Post[]>([]);
    const [pagination, setPagination] = useState({ page: 1, perPage: 10, totalData: 1 });
    const [order, setOrder] = useState({
        order: 'desc',
    });


    const fetchPost = async () => {
        try {
            const response = await apiRequest('get', '/blog', {}, {
                page: pagination.page,
                perPage: pagination.perPage,
                where: "",
                orderBy: "id:desc"
            });

            // setPost(response.data.data);

            setPost(response.data.data.map((item: any) => ({
                id: item.id,
                title: item.title,
                content: item.content.replace(/<[^>]+>/g, ''),
                image: item.image,
                show: false,
                updatedAt: item.updatedAt,
                createdBy: item.createdBy,
            })));

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
    }, [pagination.page, pagination.perPage]);

    return (
        <Row className="w-full p-5">
            <Col span={24}>
                <Row className="w-full lg:w-[70%] mx-auto my-[30px] md:my-[60px]">

                    <Col span={24} className="mb-5">

                        <Row className="w-full">
                            <Col span={24} className="mb-5">
                                <span className="text-[24px] font-semibold">Recent Blog Posts</span>
                            </Col>
                        </Row>

                        {/* Blog post section 1 */}
                        <Row gutter={24} className="w-full">
                            {/* Left blog post */}
                            <Col span={12} className="mb-5 cursor-pointer hover:shadow-lg transition-all duration-300 hover:bg-gray-100 rounded-lg p-5">
                                {post.length > 0 && (
                                    <Link href={`/blogPost/${post[0].id}`}>
                                        <div>
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_API_URL_CSM}/public/blog/${post[0].image}`}
                                                alt={post[0].title}
                                                className="w-full h-[200px] object-cover"
                                            />
                                            <div className="mt-5 flex flex-col">
                                                <span className="text-main inline-block font-semibold">
                                                    {post[0].createdBy} • {formatDate(post[0].updatedAt)}
                                                </span>
                                                <div className="flex justify-between items-center mt-2">
                                                    <span className="text-2xl font-bold">{post[0].title}</span>
                                                    <MdArrowOutward className="text-2xl" />
                                                </div>
                                                <Text className="mt-2">{post[0].content}</Text>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </Col>

                            {/* Right blog post */}
                            <Col span={12} className="mb-5">

                                <Row gutter={16} className="w-full">
                                    {/* Right blog post - 1 */}
                                    <Col span={24} className="mb-5">
                                        {post.length > 1 && (
                                            <Link href={`/blogPost/${post[1].id}`}>
                                                <Row gutter={16} className="w-full p-5 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:bg-gray-100">
                                                    <Col span={10}>
                                                        <img
                                                            src={`${process.env.NEXT_PUBLIC_API_URL_CSM}/public/blog/${post[1].image}`}
                                                            alt={post[1].title}
                                                            className="w-full h-[200px] object-cover"
                                                        />
                                                    </Col>
                                                    <Col span={14}>
                                                        <span className="text-main inline-block font-semibold">
                                                            {post[1].createdBy} • {formatDate(post[1].updatedAt)}
                                                        </span>
                                                        <div className="flex justify-between items-center mt-2">
                                                            <span className="text-xl font-bold">{post[1].title}</span>
                                                            <MdArrowOutward className="text-xl" />
                                                        </div>
                                                        <Text className="mt-2">{post[1].content}</Text>
                                                    </Col>
                                                </Row>
                                            </Link>
                                        )}
                                    </Col>

                                    {/* Right blog post - 2 */}
                                    <Col span={24}>
                                        {post.length > 2 && (
                                            <Link href={`/blogPost/${post[2].id}`}>
                                                <Row gutter={24} className="w-full p-5 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:bg-gray-100">
                                                    <Col span={10}>
                                                        <img
                                                            src={`${process.env.NEXT_PUBLIC_API_URL_CSM}/public/blog/${post[2].image}`}
                                                            alt={post[2].title}
                                                            className="w-full h-[200px] object-cover"
                                                        />
                                                    </Col>
                                                    <Col span={14}>
                                                        <span className="text-main inline-block font-semibold">
                                                            {post[2].createdBy} • {formatDate(post[2].updatedAt)}
                                                        </span>
                                                        <div className="flex justify-between items-center mt-2">
                                                            <span className="text-xl font-bold">{post[2].title}</span>
                                                            <MdArrowOutward className="text-xl" />
                                                        </div>
                                                        <Text className="mt-2">{post[2].content}</Text>
                                                    </Col>
                                                </Row>
                                            </Link>
                                        )}
                                    </Col>
                                </Row>

                            </Col>

                        </Row>

                        {/* Blog post section 2 */}
                        {post.length > 3 && (
                            <Link href={`/blogPost/${post[3].id}`}>
                                <Row gutter={16} className="w-full p-2 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:bg-gray-100">

                                    <Col span={12} className="my-5 flex items-center">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <img src={`${process.env.NEXT_PUBLIC_API_URL_CSM}/public/blog/${post[3].image}`} alt={post[3].title} className="w-full h-[200px] object-cover" />
                                        </div>
                                    </Col>

                                    <Col span={12} className="my-5 flex items-center w-full">
                                        <div className="w-full h-full flex items-center">
                                            <div className="flex flex-col w-full">
                                                <span className="text-main inline-block font-semibold">
                                                    {post[3].createdBy} • {formatDate(post[3].updatedAt)}
                                                </span>
                                                <div className="flex justify-between items-center mt-2 w-full">
                                                    <span className="text-2xl font-bold">
                                                        {post[3].title}
                                                    </span>
                                                    <MdArrowOutward className="text-2xl" />
                                                </div>

                                                <Text className="mt-2">
                                                    {post[3].content}
                                                </Text>

                                                {/* <div className="mt-5 flex justify-start gap-5">
                                                    <span className="inline-block font-semibold">#Lorem</span>
                                                    <span className="inline-block font-semibold">#Lorem</span>
                                                    <span className="inline-block font-semibold">#Lorem</span>
                                                </div> */}
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                            </Link>
                        )}


                    </Col>

                </Row>

                <Row className="w-full lg:w-[70%] mx-auto my-[30px] md:my-[60px]">

                    <Col span={24} className="mb-5">

                        <Row className="w-full">
                            <Col span={24} className="mb-5">
                                <span className="text-[24px] font-semibold">All Blog Posts</span>
                            </Col>
                        </Row>

                        {/* All Blog Post */}
                        <Row gutter={24} className="w-full">
                            {post.map((item, index) => (
                                <Col
                                    key={index + 1}
                                    span={8}
                                    className="mb-5 cursor-pointer hover:shadow-lg transition-all duration-300 hover:bg-gray-100 rounded-lg p-5"
                                >
                                    <Link href={`/blogPost/${item.id}`}>
                                        {/* <img src="https://via.placeholder.com/150" alt="Blog post" className="w-full h-[200px] object-cover" /> */}
                                        <img src={`${process.env.NEXT_PUBLIC_API_URL_CSM}/public/blog/${item.image}`} alt={item.title} className="w-full h-[200px] object-cover" />

                                        <div className="mt-5 flex flex-col">
                                            <span className="text-main inline-block font-semibold">
                                                {/* Olivia Rhye • 1 Jan 2023 */}
                                                {item.createdBy} • {formatDate(item.updatedAt)}
                                            </span>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-2xl font-bold">
                                                    {/* How to create a UX portfolio */}
                                                    {item.title}
                                                </span>
                                                <MdArrowOutward className="text-2xl" />
                                            </div>

                                            <Text className="mt-2">
                                                {/* A UX portfolio is a must-have for any designer. It’s the first thing potential employers look at when they’re considering hiring you */}
                                                {item.content}
                                            </Text>
                                            {/* 
                                            <div className="mt-5 flex justify-start gap-5">
                                                <span className="inline-block font-semibold">#Lorem</span>
                                                <span className="inline-block font-semibold">#Lorem</span>
                                                <span className="inline-block font-semibold">#Lorem</span>
                                            </div> */}
                                        </div>
                                    </Link>
                                </Col>
                            ))}
                        </Row>

                        <CustomPagination
                            data={[]}
                            pagination={{ page: 1, perPage: 10, totalData: 1 }}
                            changeLimit={() => { }}
                            changePage={() => { }}
                        />
                    </Col>

                </Row>
            </Col>
        </Row>
    )
}

export default page;
