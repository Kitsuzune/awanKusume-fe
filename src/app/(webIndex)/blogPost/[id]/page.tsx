'use client';
import React, { useEffect, useState } from "react";
import { Col, Row, Typography } from "antd";
import Article from "@/components/home/Article";
import { apiRequest } from "@/utils/api";
import { useParams } from 'next/navigation';
import { formatDate } from "@/const/dateFormat";

const { Text } = Typography;

interface Post {
    id: string;
    title: string;
    content: string;
    image: string;
    show: boolean;
    updatedAt?: string;
    createdBy?: string;
    createdAt?: string;
}

const Page: React.FC = () => {
    const params = useParams<{ id: string }>();
    const id = params.id;
    const [post, setPost] = useState<Post | null>(null);

    const fetchPost = async () => {
        try {
            if (!id) return;
            const response = await apiRequest('get', `/homepage/blog/${id}`);
            setPost(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPost();
    }, [id]);

    return (
        <Row className="w-full p-5">
            <Col span={24}>
                <Row className="w-full lg:w-[70%] mx-auto my-[30px] md:my-[60px] border-b-2">
                    <Col span={24} className="mb-5">
                        <Row className="w-full">
                            <Col span={24} className="mb-5">
                                <div className="flex flex-col">
                                    <span className="text-[24px] font-semibold inline-block">
                                        {post?.title || 'Blog Name'}
                                    </span>
                                    <span className="text-[16px] text-main">
                                        {post?.createdBy} • {formatDate(post?.updatedAt)}
                                    </span>
                                </div>
                            </Col>
                        </Row>

                        <Row className="w-full">
                            <Col span={24} className="mb-5">
                                {post?.image && (
                                    <img
                                        // src={post.image}
                                        src={`${process.env.NEXT_PUBLIC_API_URL_CSM}/public/blog/${post.id}/${post.image}`}
                                        alt="blog"
                                        className="w-full h-[400px] object-cover"
                                    />
                                )}
                            </Col>
                        </Row>

                        <Row className="w-full">
                            <Col span={24}>
                                <div
                                    className="text-[16px] font-normal"
                                    dangerouslySetInnerHTML={{ __html: post?.content || '' }}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="my-20 w-full lg:w-[75%] mx-auto md:my-[60px]">
                    <Col span={24}>
                        <Article title={"More Artikel"} HeaderModel={"Between"} />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Page;
