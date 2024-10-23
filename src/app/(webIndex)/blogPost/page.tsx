'use client'

import React from "react";
import { Col, Row, Typography } from "antd";
import { MdArrowOutward } from "react-icons/md";
import { CustomPagination } from "@/components/ui/Table/CustomPagination";

const Text = Typography;

const page = () => {
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
                                <div>
                                    <img src="https://via.placeholder.com/150" alt="Blog post" className="w-full h-[200px] object-cover" />

                                    <div className="mt-5 flex flex-col">
                                        <span className="text-main inline-block font-semibold">Olivia Rhye • 1 Jan 2023</span>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-2xl font-bold">How to create a UX portfolio</span>
                                            <MdArrowOutward className="text-2xl" />
                                        </div>

                                        <Text className="mt-2">
                                            A UX portfolio is a must-have for any designer. It’s the first thing potential employers look at when they’re considering hiring you
                                        </Text>

                                        <div className="mt-5 flex justify-start gap-5">
                                            <span className="inline-block font-semibold">#Lorem</span>
                                            <span className="inline-block font-semibold">#Lorem</span>
                                            <span className="inline-block font-semibold">#Lorem</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            {/* Right blog post */}
                            <Col span={12} className="mb-5">

                                <Row gutter={16} className="w-full">
                                    {/* Right blog post - 1 */}
                                    <Col span={24} className="mb-5">
                                        <div>
                                            <Row gutter={16} className="w-full p-5 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:bg-gray-100">
                                                <Col span={10}>
                                                    <img src="https://via.placeholder.com/150" alt="Blog post" className="w-full h-[150px] object-cover" />
                                                </Col>
                                                <Col span={14}>
                                                    <span className="text-main inline-block font-semibold">Phoenix Baker • 1 Jan 2023</span>
                                                    <div className="flex justify-between items-center mt-2">
                                                        <span className="text-xl font-bold">Migrating to Linear 101</span>
                                                        <MdArrowOutward className="text-xl" />
                                                    </div>

                                                    <Text className="mt-2">
                                                        Linear helps streamline software projects, sprints, tasks, and bug tracking.
                                                    </Text>

                                                    <div className="mt-3 flex justify-start gap-2">
                                                        <span className="inline-block font-semibold">#Lorem</span>
                                                        <span className="inline-block font-semibold">#Lorem</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    {/* Right blog post - 2 */}
                                    <Col span={24}>
                                        <div>
                                            <Row gutter={24} className="w-full p-5 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:bg-gray-100">
                                                <Col span={10}>
                                                    <img src="https://via.placeholder.com/150" alt="Blog post" className="w-full h-[150px] object-cover" />
                                                </Col>
                                                <Col span={14}>
                                                    <span className="text-main inline-block font-semibold">Lana Steiner • 1 Jan 2023</span>
                                                    <div className="flex justify-between items-center mt-2">
                                                        <span className="text-xl font-bold">Building your API Stack</span>
                                                        <MdArrowOutward className="text-xl" />
                                                    </div>

                                                    <Text className="mt-2">
                                                        The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
                                                    </Text>

                                                    <div className="mt-3 flex justify-start gap-2">
                                                        <span className="inline-block font-semibold">#Lorem</span>
                                                        <span className="inline-block font-semibold">#Lorem</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>

                            </Col>

                        </Row>

                        {/* Blog post section 2 */}
                        <Row gutter={16} className="w-full p-2 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:bg-gray-100">
                            {/* Left Column with Image */}
                            <Col span={12} className="my-5 flex items-center">
                                <div className="w-full h-full flex items-center justify-center">
                                    <img src="https://via.placeholder.com/150" alt="Blog post" className="w-full h-[200px] object-cover" />
                                </div>
                            </Col>

                            {/* Right Column with Text */}
                            <Col span={12} className="my-5 flex items-center">
                                <div className="w-full h-full flex items-center">
                                    <div className="flex flex-col">
                                        <span className="text-main inline-block font-semibold">Olivia Rhye • 1 Jan 2023</span>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-2xl font-bold">How to create a UX portfolio</span>
                                            <MdArrowOutward className="text-2xl" />
                                        </div>

                                        <Text className="mt-2">
                                            A UX portfolio is a must-have for any designer. It’s the first thing potential employers look at when they’re considering hiring you.
                                        </Text>

                                        <div className="mt-5 flex justify-start gap-5">
                                            <span className="inline-block font-semibold">#Lorem</span>
                                            <span className="inline-block font-semibold">#Lorem</span>
                                            <span className="inline-block font-semibold">#Lorem</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>


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
                            {[1, 2, 3, 4, 5, 6].map((index) => (
                                <Col span={8} className="mb-5 cursor-pointer hover:shadow-lg transition-all duration-300 hover:bg-gray-100 rounded-lg p-5">
                                    <div>
                                        <img src="https://via.placeholder.com/150" alt="Blog post" className="w-full h-[200px] object-cover" />

                                        <div className="mt-5 flex flex-col">
                                            <span className="text-main inline-block font-semibold">Olivia Rhye • 1 Jan 2023</span>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-2xl font-bold">How to create a UX portfolio</span>
                                                <MdArrowOutward className="text-2xl" />
                                            </div>

                                            <Text className="mt-2">
                                                A UX portfolio is a must-have for any designer. It’s the first thing potential employers look at when they’re considering hiring you
                                            </Text>

                                            <div className="mt-5 flex justify-start gap-5">
                                                <span className="inline-block font-semibold">#Lorem</span>
                                                <span className="inline-block font-semibold">#Lorem</span>
                                                <span className="inline-block font-semibold">#Lorem</span>
                                            </div>
                                        </div>
                                    </div>
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
