'use client';
import React from "react";
import { Col, Row, Typography } from "antd";
import Article from "@/components/home/Article";

const Text = Typography;

const page = () => {
    return (
        <Row className="w-full p-5">
            <Col span={24}>
                <Row className="w-full lg:w-[70%] mx-auto my-[30px] md:my-[60px] border-b-2">

                    <Col span={24} className="mb-5">

                        <Row className="w-full">
                            <Col span={24} className="mb-5">
                                <div className="flex flex-col">

                                    <span className="text-[24px] font-semibold inline-block">Blog Name</span>
                                    <span className="text-[16px] text-main">Createed At 12/12/2021</span>

                                </div>
                            </Col>
                        </Row>

                        <Row className="w-full">
                            <Col span={24} className="mb-5">
                                <img src="https://via.placeholder.com/150" alt="blog" className="w-full h-[400px] object-cover" />
                            </Col>
                        </Row>

                        <Row className="w-full">
                            <Col span={24}>
                                <Text className="text-[16px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, metus id ultricies aliquet, purus metus aliqu
                                    et turpis, eu ultricies enim purus nec nunc. Praesent auctor, felis nec tempus vehicula, lectus
                                    nisl feugiat dolor,
                                    ac aliquam lacus purus nec nunc. Praesent auctor, felis nec tempus vehicula, lectus n
                                    isl feugiat dolor, ac aliquam lacus purus nec nunc. Praesent auctor, felis nec tempus vehicula, lectus nisl feugiat dolor, ac aliquam lacus purus nec nunc.</Text>
                                <br />
                                <br />
                                <Text className="text-[16px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, metus id ultricies aliquet, purus metus aliqu
                                    et turpis, eu ultricies enim purus nec nunc. Praesent auctor, felis nec tempus vehicula, lectus
                                    nisl feugiat dolor,
                                    ac aliquam lacus purus nec nunc. Praesent auctor, felis nec tempus vehicula, lectus n
                                    isl feugiat dolor, ac aliquam lacus purus nec nunc. Praesent auctor, felis nec tempus vehicula, lectus nisl feugiat dolor, ac aliquam lacus purus nec nunc.</Text>
                                <br />
                            </Col>
                        </Row>

                    </Col>

                </Row>

                <Row className="my-20 w-full lg:w-[75%] mx-auto md:my-[60px]">
                    <Col span={24}>
                        <Article title={"More Artkel"} HeaderModel={"Between"} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default page