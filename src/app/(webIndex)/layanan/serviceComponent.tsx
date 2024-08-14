'use client';
import React, { useState } from "react";
import { Button, Col, Row, Typography } from "antd";

const Text = Typography;

const ServiceComponent: React.FC = () => {
    const [hoveredPlanIndex, setHoveredPlanIndex] = useState<number | null>(null);
    const [selectedOption, setSelectedOption] = useState<"harga" | "syarat">("harga");

    const handleSwitch = (option: "harga" | "syarat") => {
        setSelectedOption(option);
    };

    const plans = [
        {
            price: "2 jt",
            title: "Lorem Ipsum",
            description: "Unleash the power of automation.",
            features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
        },
        {
            price: "3 jt",
            title: "Lorem Ipsum",
            description: "Advanced tools to take your work to the next level.",
            features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
        },
        {
            price: "5 jt",
            title: "Lorem Ipsum",
            description: "Automation plus enterprise-grade features.",
            features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
            isPopular: true,
        },
    ];

    return (
        <>
            <Row>
                <Col span={24}>
                    <Row className="mx-auto my-8 md:my-[80px] w-[90%] md:w-[80%]">
                        <Col span={24}>
                            <div className="flex flex-col">
                                <Text className="text-[28px] md:text-[40px] font-[400] text-start">
                                    Harga Pendirian PT
                                </Text>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-5">
                                <Text className="text-[16px] md:text-[18px] font-[500] text-start">
                                    Whether your time-saving automation needs are large or small, we’re here to help you scale.
                                </Text>

                                <div className="switch-container flex bg-gray-100 w-max rounded-full mt-4 md:mt-0">
                                    <div
                                        className={`switch-option px-4 py-3 md:px-7 md:py-4 cursor-pointer rounded-full transition-all ${selectedOption === "harga" ? "bg-[#FEA500] text-white" : "bg-gray-100 text-black"
                                            }`}
                                        onClick={() => handleSwitch("harga")}
                                    >
                                        Harga
                                    </div>
                                    <div
                                        className={`switch-option px-4 py-3 md:px-7 md:py-4 cursor-pointer rounded-full transition-all ${selectedOption === "syarat" ? "bg-[#FEA500] text-white" : "bg-gray-100 text-black"
                                            }`}
                                        onClick={() => handleSwitch("syarat")}
                                    >
                                        Syarat
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <div className="justify-center flex w-full">
                    <Row className="p-3 md:p-5 mb-8 md:mb-[80px] gap-4 md:gap-6 bg-[#9B8E8E] bg-opacity-10 w-[90%] md:w-[80%] rounded-xl justify-center">
                        {plans.map((plan, index) => (
                            <Col
                                key={index}
                                span={24}
                                md={7}
                                className={`relative p-4 md:p-6 rounded-xl shadow-lg w-[300px] h-auto md:w-[600px] md:h-[600px] transition-transform cursor-pointer 
                                ${hoveredPlanIndex === index && "bg-[#007893] text-white"}
                                ${hoveredPlanIndex === index && "md:hover:-translate-y-8 md:hover:-translate-x-5 hover:scale-105 md:hover:scale-110"}
                                ${hoveredPlanIndex !== index && "hover:bg-[#007893] hover:text-white"}
                                ${hoveredPlanIndex === index ? "bg-[#007893] text-white" : "bg-white"}
                                `}
                                style={{
                                    boxShadow: hoveredPlanIndex === index ? "0px 42px 34px rgba(82, 67, 194, 0.295755)" : "0px 0px 10px rgba(0, 0, 0, 0.05)",
                                }}
                                onMouseEnter={() => setHoveredPlanIndex(index)}
                                onMouseLeave={() => setHoveredPlanIndex(null)}
                            >
                                {plan.isPopular ? (
                                    <div className="flex justify-center w-full h-[30px] mb-2">
                                        <div className="px-3 py-1 px-auto bg-[#FEA500] text-white rounded-full text-center w-max">
                                            10 jt / 50% Off
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-[30px] md:h-[40px]"></div>
                                )}
                                <div className="min-h-[100px] md:h-[200px]">
                                    <span className="text-[24px] md:text-[36px] font-[700]">{plan.price}</span>
                                    <br />
                                    <span className="text-[20px] md:text-[28px] font-[600] mt-2">{plan.title}</span>
                                    <br />
                                    <span className="text-[12px] md:text-[15px] mt-2">
                                        {plan.description}
                                    </span>
                                </div>
                                <ul className="list-none mt-4 space-y-2 min-h-[100px] md:h-[200px]">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex gap-2 md:gap-3 items-center">
                                            <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1094 0.0344238C4.58653 0.0344238 0.109375 4.51158 0.109375 10.0344C0.109375 15.5573 4.58653 20.0344 10.1094 20.0344C15.6322 20.0344 20.1094 15.5573 20.1094 10.0344C20.1029 4.51424 15.6296 0.0408528 10.1094 0.0344238Z" fill="#1A2A3A" />
                                                <path d="M15.8816 6.8678L10.1774 14.6086C10.0413 14.7891 9.83849 14.9074 9.6144 14.9368C9.39031 14.9663 9.16378 14.9045 8.98572 14.7653L4.91238 11.5086C4.55294 11.221 4.49474 10.6964 4.78238 10.337C5.07003 9.97752 5.59461 9.91932 5.95405 10.207L9.35072 12.9245L14.5399 5.88196C14.71 5.62662 15.0068 5.48545 15.3122 5.51449C15.6177 5.54354 15.8825 5.73811 16.0015 6.02094C16.1205 6.30378 16.0744 6.62912 15.8816 6.8678Z" fill="white" />
                                            </svg>

                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    type="primary"
                                    className={`w-full mt-6 py-2 rounded-3xl h-[60px] transition-colors duration-200 ${hoveredPlanIndex === index
                                        ? "bg-white text-[#007893]"
                                        : "bg-[#007893] text-white"
                                        }`}
                                >
                                    Choose plan
                                </Button>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Row>
        </>
    );
};

export default ServiceComponent;
