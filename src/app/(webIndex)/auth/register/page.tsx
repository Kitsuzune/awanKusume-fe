'use client';
import React from 'react';
import { Input, Button, Row, Col, Typography } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, KeyOutlined, LockOutlined, CalculatorOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';
import OurClient from '@/components/home/OurClient';
import Link from 'next/link';
import { Modal, ModalBody, ModalContent, ModalTrigger, ModalTriggerClose } from '@/components/ui/animated-modal';

const Text = Typography;

const Register = () => {
    const [paswordVisible, setPasswordVisible] = React.useState(false);
    const [confirmPaswordVisible, setConfirmPasswordVisible] = React.useState(false);

    return (
        <>
            <Row>
                <Modal>
                    <Col span={8}>
                        <Row className='bg-[#1A2A3A] py-[80px] px-[40px] h-full'>
                            <div className='w-full'>
                                <Text className='text-white text-[40px] font-[700]'>Welcome !</Text>
                                <Text className='text-white text-[20px] font-[300]'>
                                    Please Enter your details below.
                                </Text>

                                <div className='mt-8'>
                                    <Text className='text-white text-[14px]'>Nama Lengkap</Text>
                                    <Input
                                        placeholder='Nama Lengkap'
                                        className='mb-4 pr-0 pl-4 py-0 h-[45px] rounded-[8px] mt-2'
                                        style={{
                                            backgroundColor: '#F8F8F8',
                                            border: 'none',
                                        }}
                                        suffix={
                                            <div className='bg-[#007893] rounded-[8px] h-[45px] w-[60px] p-0 m-0 flex justify-center items-center'>
                                                <UserOutlined className='text-white p-2' />
                                            </div>
                                        }
                                    />

                                    <Text className='text-white text-[14px] mt-3'>Email</Text>
                                    <Input
                                        placeholder='Email'
                                        className='mb-4 pr-0 pl-4 py-0 h-[45px] rounded-[8px] mt-2'
                                        style={{
                                            backgroundColor: '#F8F8F8',
                                            border: 'none',
                                        }}
                                        suffix={
                                            <div className='bg-[#007893] rounded-[8px] h-[45px] w-[60px] p-0 m-0 flex justify-center items-center'>
                                                <MailOutlined className='text-white p-2' />
                                            </div>
                                        }
                                    />

                                    <Text className='text-white text-[14px] mt-3'>No Tip</Text>
                                    <Input
                                        placeholder='No Tlp'
                                        className='mb-4 pr-0 pl-4 py-0 h-[45px] rounded-[8px] mt-2'
                                        style={{
                                            backgroundColor: '#F8F8F8',
                                            border: 'none',
                                        }}
                                        suffix={
                                            <div className='bg-[#007893] rounded-[8px] h-[45px] w-[60px] p-0 m-0 flex justify-center items-center'>
                                                <PhoneOutlined className='text-white p-2' />
                                            </div>
                                        }
                                    />

                                    <Text className='text-white text-[14px] mt-3'>Bidang Usaha</Text>
                                    <Input
                                        placeholder='Bidang Usaha'
                                        className='mb-4 pr-0 pl-4 py-0 h-[45px] rounded-[8px] mt-2'
                                        style={{
                                            backgroundColor: '#F8F8F8',
                                            border: 'none',
                                        }}
                                        type=''
                                        suffix={
                                            <div className='bg-[#007893] rounded-[8px] h-[45px] w-[60px] p-0 m-0 flex justify-center items-center'>
                                                <CalculatorOutlined className='text-white p-2' />
                                            </div>
                                        }
                                    />

                                    <Text className='text-white text-[14px] mt-3'>Password</Text>
                                    <Input
                                        placeholder='Password'
                                        className='mb-4 pr-0 pl-4 py-0 h-[45px] rounded-[8px] mt-2'
                                        type={paswordVisible ? 'text' : 'password'}
                                        style={{
                                            backgroundColor: '#F8F8F8',
                                            border: 'none',
                                        }}
                                        suffix={
                                            <div className='bg-[#007893] rounded-[8px] h-[45px] w-[60px] p-0 m-0 flex justify-center items-center'>
                                                {paswordVisible ? (
                                                    <EyeOutlined
                                                        className='text-white p-2'
                                                        onClick={() => setPasswordVisible(!paswordVisible)}
                                                    />
                                                ) : (
                                                    <EyeInvisibleOutlined
                                                        className='text-white p-2'
                                                        onClick={() => setPasswordVisible(!paswordVisible)}
                                                    />
                                                )}
                                            </div>
                                        }
                                    />

                                    <Text className='text-white text-[14px] mt-3'>Confirm Password</Text>
                                    <Input
                                        placeholder='Confirm Password'
                                        className='mb-4 pr-0 pl-4 py-0 h-[45px] rounded-[8px] mt-2'
                                        style={{
                                            backgroundColor: '#F8F8F8',
                                            border: 'none',
                                        }}
                                        type={confirmPaswordVisible ? 'text' : 'password'}
                                        suffix={
                                            <div className='bg-[#007893] rounded-[8px] h-[45px] w-[60px] p-0 m-0 flex justify-center items-center'>
                                                {confirmPaswordVisible ? (
                                                    <EyeOutlined
                                                        className='text-white p-2'
                                                        onClick={() => setConfirmPasswordVisible(!confirmPaswordVisible)}
                                                    />
                                                ) : (
                                                    <EyeInvisibleOutlined
                                                        className='text-white p-2'
                                                        onClick={() => setConfirmPasswordVisible(!confirmPaswordVisible)}
                                                    />
                                                )}
                                            </div>
                                        }
                                    />

                                    <ModalTrigger className='w-full m-0 p-0 mt-3'>
                                        <Button
                                            type='primary'
                                            size='large'
                                            block
                                            className='bg-[#008c9e] hover:bg-[#007884] text-white py-3 rounded-[8px]'
                                        >
                                            Register
                                        </Button>
                                    </ModalTrigger>

                                    <ModalBody className='h-[50%]'>
                                        <ModalContent>
                                            <div className='flex flex-col justify-center items-center h-full'>
                                                <div className='text-center justify-center flex'>
                                                    <img src='/image/success1.svg' alt='Success' />
                                                </div>
                                                <Text className='text-[24px] font-[700] text-[#1A2A3A] justify-center flex text-center mt-7'>
                                                    You Register
                                                    <br />
                                                    successfully
                                                </Text>
                                                <Text className='text-[14px] text-[#1A2A3A] justify-center flex text-center mt-3'>
                                                    Lorem Ipsum is simply dummy text of the
                                                    <br />
                                                    printing and typesetting industry.
                                                </Text>

                                                <div className='mt-4'>
                                                    <ModalTriggerClose className='w-full m-0 p-0 mt-3'>
                                                        <Button
                                                            type='primary'
                                                            size='large'
                                                            block
                                                            className='bg-[#1A2A3A] hover:bg-[#007884] text-white px-[100px] py-[16px] h-[56px] rounded-full'
                                                        >
                                                            Continue
                                                        </Button>
                                                    </ModalTriggerClose>
                                                </div>
                                            </div>
                                        </ModalContent>
                                    </ModalBody>

                                    <div className='text-center mt-4'>
                                        <Text className='text-white text-[14px]'>
                                            Already have an account? <Link href='/auth/login'>Login</Link>
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Col >

                    <Col span={16}>
                        <Row className='bg-[#F8F8F8] py-[80px]'>
                            <div className='container'>
                                <div className='flex justify-end items-end'>
                                    <img src='/image/navbar-logo.png' alt='Hero Image' className='p-10' />
                                </div>
                                <OurClient slidesToShow={3} TopText={false} BottomText={false} />
                            </div>
                        </Row>
                    </Col>
                </Modal>
            </Row >
        </>
    );
};

export default dynamic(() => Promise.resolve(Register), { ssr: false });
