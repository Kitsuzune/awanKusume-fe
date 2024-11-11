'use client'
import React, { useEffect, useState } from "react";
import { Col, Row, Typography, Modal } from "antd";
import useLanguage from "@/zustand/useLanguage";
import { useTranslationCustom } from "../../../public/i18n/client";
import { apiRequest } from "@/utils/api";

const Text = Typography;

const SaleBar = () => {
    const { lng } = useLanguage();
    const { t } = useTranslationCustom(lng, "HomePage");
    const [data, setData] = useState({
        link: '',
        name: '',
        image: ''
    });
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalWidth, setModalWidth] = useState("100%");

    const fetchData = async () => {
        try {
            const response = await apiRequest('get', `/homepage/promotion`);
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        fetchData();
        console.log(data.link + '/embed');

        const updateModalWidth = () => {
            setModalWidth(window.innerWidth <= 768 ? "80%" : "100%");
        };

        updateModalWidth();  // Set initial width
        window.addEventListener("resize", updateModalWidth);

        return () => {
            window.removeEventListener("resize", updateModalWidth);
        };
    }, []);

    return (
        <Row className="w-full p-4 md:p-5">
            <Col span={24}>
                <div className="w-full h-full bg-gray-500 rounded-xl bg-[url('/image/bar-1.png')] bg-cover bg-center p-4 md:p-5 py-[50px] md:py-[100px]">
                    <div className="flex justify-center items-center h-full">
                        <div className="text-start">
                            <Text className="text-[24px] md:text-[48px] w-full md:w-[60%] text-white font-[600]">
                                {t("salebar.Title")}
                            </Text>
                            <Text className="text-[14px] md:text-[20px] w-full md:w-[60%] mt-2 md:mt-4 text-white font-[300]">
                                {t("salebar.SubTitle")}
                            </Text>
                            <button
                                className="bg-[#FEA500] text-white font-bold px-[20px] md:px-[43px] py-[10px] md:py-[18px] text-[14px] md:text-[15px] rounded-[25px] md:rounded-[35px] mt-3 md:mt-5 hover:bg-[#8f802b] transition-all duration-500"
                                onClick={showModal}
                            >
                                {t("salebar.Button")}
                            </button>
                        </div>
                    </div>
                </div>
            </Col>
            <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={modalWidth}
            >
                <Row className="w-full h-full">
                    <Col span={24}>
                        <div className="flex justify-center items-center text-[24px] md:text-[28px] pb-5">
                            {data.name}
                        </div>

                        <img 
                            src={data.image} 
                            alt="Promotion" 
                            className="w-full md:w-[600px] h-auto md:h-[600px] object-contain cursor-pointer hover:backdrop-filter hover:opacity-90 transition-all duration-300"
                            onClick={() => window.open(data.link, '_blank')}
                        />
                    </Col>
                </Row>
            </Modal>
        </Row>
    );
};

export default SaleBar;
