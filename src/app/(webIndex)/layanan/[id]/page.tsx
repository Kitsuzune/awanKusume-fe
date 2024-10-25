'use client';
import React, { useEffect, useState } from 'react'
import { Col, Collapse, Row, Typography } from 'antd'
import { useParams } from 'next/navigation';
import { apiRequest } from '@/utils/api';
import ServiceComponent from '../serviceComponent';
import Article from '@/components/home/Article';
import SaleBar from '@/components/home/SaleBar';

const Text = Typography;
const { Panel } = Collapse;

interface ServiceDetail {
    id: string;
    serviceId: string;
    uuid: string;
    title: string;
    subTitle: string;
    show: number;
    price: string;
    discount: number;
    benefit: string[];
    syarat: string[];
    createdAt: string;
    updatedAt: string;
}

interface Faq {
    id: string;
    languageId: number;
    serviceId: number;
    uuid: string;
    title: string;
    subTitle: string;
    show: number;
    question: string;
    answer: string;
    createdAt: string;
    updatedAt: string;
}

interface Service {
    id: string;
    languageId: number;
    desainId: number;
    uuid: string;
    title: string;
    subTitle: string;
    showcaseTitle: string;
    showcaseSub: string;
    image: string;
    show: number;
    articleShow: number;
    promoShow: number;
    createdAt: string;
    updatedAt: string;
    serviceDetail: ServiceDetail[];
    faq: Faq[];
}


const Page: React.FC = () => {
    const params = useParams<{ id: string }>();
    const id = params.id;
    const [service, setService] = useState<Service | null>(null);

    const fetchService = async () => {
        try {
            if (!id) return;
            const response = await apiRequest('get', `/homepage/service/${id}`);
            setService(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchService();
    }, [id]);

    return (
        <React.Fragment>
            <Row>
                <Col span={24}>
                    <div className="mx-auto w-[90%] md:w-[80%] mt-[40px] md:mt-[80px]">
                        <div className="flex flex-col">
                            <Text className="text-[28px] md:text-[40px] font-[600] text-start">
                                {service?.title}
                            </Text>

                            <Text className="text-[16px] md:text-[18px] font-[500] text-start mt-3 md:mt-5 w-[100%] md:w-[50%]">
                                {service?.subTitle}
                            </Text>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <ServiceComponent service={service} />
                </Col>
            </Row>

            {(service?.faq?.length ?? 0) > 0 && (

                <Row className='w-full p-5'>
                    <Col span={24}>
                        <Row className="w-full lg:w-[70%] mx-auto my-[80px] md:my-[160px]">
                            <Col span={24} md={8}>
                                <div className="flex flex-col mb-4 md:mb-0">
                                    <Text className="text-[32px] md:text-[40px] font-[600] text-start text-[#007893]">
                                        FAQ {service?.title}
                                    </Text>
                                </div>
                            </Col>

                            <Col span={24} md={16}>
                                <Collapse
                                    defaultActiveKey={[]}
                                    ghost
                                    expandIconPosition="end"
                                    expandIcon={({ isActive }) => (
                                        <div
                                            className="text-[20px] md:text-[40px]"
                                            style={{ fontWeight: 600, marginTop: 15, fontSize: '40px' }}
                                        >
                                            {isActive ? '-' : '+'}
                                        </div>
                                    )}
                                >
                                    {service?.faq.map((item, index) => (
                                        <Panel
                                            header={item.question}
                                            key={index + 1}
                                            className="text-[20px] md:text-[30px] font-[600]"
                                            style={{ borderBottom: '1px solid #1A2A3A' }}
                                        >
                                            <Text>{item.answer}</Text>
                                        </Panel>
                                    ))}
                                </Collapse>
                            </Col>
                        </Row>

                    </Col>
                </Row>

            )}

            {service?.promoShow == 1 && (
                <Row className="mb-[80px]">
                    <Col span={24}>
                        <SaleBar />
                    </Col>
                </Row>
            )}

            {service?.articleShow == 1 && (
                <Row className="mb-[80px]">
                    <Col span={24}>
                        <Article title={"More Artikel"} HeaderModel={"Between"} />
                    </Col>
                </Row>
            )}



        </React.Fragment>
    )
}

export default Page