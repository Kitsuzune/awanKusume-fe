'use client';
import Lottie from 'react-lottie';
import Animation from '../assets/lotties/404.json';
import { Col, Row } from 'antd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='w-full'>
            <Row>
                <Col span={24}>
                    <Navbar />
                </Col>
            </Row>

            <Row className='flex justify-center'>
                <Lottie
                    options={defaultOptions}
                    height={'100%'}
                    width={900}
                />
            </Row>

            <Row>
                <Col span={24}>
                    <Footer />
                </Col>
            </Row>


        </div>
    )
}