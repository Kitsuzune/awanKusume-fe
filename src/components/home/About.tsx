import { Col, Row, Typography } from "antd";

const Text = Typography;

const About = () => {
    return (
        <div className="flex items-center">
            <Row className="w-[100%] lg:w-[65%] mx-auto">
                <Col span={24}>
                    <div className="ml-7 md:ml-0">
                        <Text className="text-[24px] md:text-[40px] font-[700]">
                            About
                        </Text>

                        <Text className="text-[16px] md:text-[24px] mt-2 md:mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Text>
                    </div>

                    <Row className="mt-5 md:mt-10">
                        <Col xs={24} md={12}>
                            <div className="flex items-center justify-center md:justify-end mt-5 md:mt-0">
                                <div className="relative w-[90%] md:w-[650px] h-[200px] md:h-[444px] mr-0 md:mr-5 group">
                                    <img
                                        src="https://media.istockphoto.com/id/1827291486/photo/a-dedicated-mentor-is-explaining-mentees-importance-of-project-while-sitting-at-the-boardroom.webp?b=1&s=170667a&w=0&k=20&c=MLRxSKvKfsfLubgWuMg-rLDj5QU_HJ07SKHBEh4f75w="
                                        alt="Pendirian Perusahaan"
                                        className="rounded-[20px] opacity-100 w-full h-full object-cover transition-opacity duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 rounded-[20px] hover:bg-opacity-100 transition-all duration-300 group-hover:bg-opacity-50" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-[20px]" />
                                    <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 text-white">
                                        <Text className="text-lg md:text-2xl text-white font-[800]">Tentang Kami</Text>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center md:justify-end mt-5 md:mt-10">
                                <div className="relative w-[90%] md:w-[650px] h-[200px] md:h-[444px] mr-0 md:mr-5 group">
                                    <img
                                        src="https://www.merchantmaverick.com/wp-content/uploads/2019/07/Calculating_costs_to_start_a_business.jpg"
                                        alt="Marketing Agency"
                                        className="w-full h-full rounded-[20px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 rounded-[20px] hover:bg-opacity-100 transition-all duration-300 group-hover:bg-opacity-50" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-[20px]" />
                                    <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 text-white">
                                        <Text className="text-lg md:text-2xl text-white font-[800]">Kenapa Awan Kusuma</Text>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} md={12}>
                            <div className="flex items-center justify-center md:justify-start mt-5 md:mt-0">
                                <div className="relative w-[90%] md:w-[650px] h-[200px] md:h-[444px] ml-0 md:ml-5 group">
                                    <img
                                        src="https://c8.alamy.com/comp/2D49JYX/business-lady-at-work-company-manager-woman-looking-through-documents-in-office-professional-corporate-dresscode-2D49JYX.jpg"
                                        alt="Izin Business"
                                        className="w-full h-full rounded-[20px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 rounded-[20px] hover:bg-opacity-100 transition-all duration-300 group-hover:bg-opacity-50" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-[20px]" />
                                    <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 text-white">
                                        <Text className="text-lg md:text-2xl text-white font-[800]">Life In Company</Text>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center md:justify-start mt-5 md:mt-10">
                                <div className="relative w-[90%] md:w-[650px] h-[200px] md:h-[444px] ml-0 md:ml-5 group">
                                    <img
                                        src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=960"
                                        alt="Lorem Ipsum"
                                        className="w-full h-full rounded-[20px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 rounded-[20px] hover:bg-opacity-100 transition-all duration-300 group-hover:bg-opacity-50" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-[20px]" />
                                    <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 text-white">
                                        <Text className="text-lg md:text-2xl text-white font-[800]">Karir</Text>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default About;
