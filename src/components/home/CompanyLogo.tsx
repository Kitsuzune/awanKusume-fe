import React from "react";
import { Col, Row, Typography } from "antd";
import Logo1 from "@/../public/image/logo1.png";
import Logo2 from "@/../public/image/logo2.png";
import Logo3 from "@/../public/image/logo3.png";
import Logo4 from "@/../public/image/logo4.png";
import Logo5 from "@/../public/image/logo5.png";

const { Text } = Typography;

const CompanyLogo = () => {
    return (
        <Row className="w-full p-4 md:p-5">
            <Col span={24}>
                <div className="text-center flex flex-wrap justify-center items-center gap-10 md:gap-20 pb-5">
                    <img src={Logo3.src} alt="logo1" className="h-[60px] md:h-auto" />
                    <img src={Logo2.src} alt="logo2" className="h-[60px] md:h-auto" />
                    <img src={Logo1.src} alt="logo3" className="h-[60px] md:h-auto" />
                </div>

                <div className="text-center flex flex-wrap justify-center items-center gap-10 md:gap-20 pt-5">
                    <img src={Logo5.src} alt="logo4" className="h-[80px] md:h-auto" />
                    <img src={Logo4.src} alt="logo5" className="h-[80px] md:h-auto" />
                </div>
            </Col>

            <Col span={24} className="mt-12 md:mt-16">
                <div className="flex justify-center items-center mt-5 md:mt-10">
                    <button className="bg-[#FEA500] text-white font-bold px-[20px] md:px-[43px] py-[10px] md:py-[18px] text-[14px] md:text-[15px] rounded-[25px] md:rounded-[35px] hover:bg-[#8f802b] transition-all duration-500">
                        Join Partnership 
                    </button>
                </div>
            </Col>
        </Row>
    );
};

export default CompanyLogo;
