'use client';
import React, { useState } from 'react';
import { Input, Button, Row, Col, Typography, message } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';
import OurClient from '@/components/home/OurClient';
import Link from 'next/link';
import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/components/ui/animated-modal';
import { apiRequest } from '@/utils/api';

const Text = Typography;

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isRegisterSuccessful, setIsRegisterSuccessful] = useState(false);
    const [dataRegister, setDataRegister] = useState({
        email: '',
        firstName: '',
        lastName: '',
        username: '',
        nomorTelp: '',
        password: '',
    });
    const [errors, setErrors] = useState<Record<string, string[]>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDataRegister((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: [] })); // Clear errors on change
    };

    const handleRegister = async () => {
        try {
            const response = await apiRequest('post', '/auth/register', dataRegister);
            if (response.status === 200) {
                setIsRegisterSuccessful(true);
            } else {
                handleErrorMessages(response.data.errors);
            }
        } catch (error: any) {
            setIsRegisterSuccessful(false);
            if (error?.response?.data?.errors) {
                handleErrorMessages(error.response.data.errors);
            } else {
                message.error(error?.response?.data?.message || 'Registration failed');
            }
        }
    };

    const handleErrorMessages = (errors: Record<string, string[]>) => {
        setErrors(errors);
    };

    const getErrorMessage = (field: string) => {
        return errors[field]?.map((error, index) => (
            <Text key={index} className="block mt-1 text-red-500">
                {error}
            </Text>
        ));
    };


    return (
        <>
            <Row>
                <Modal>
                    <Col span={24} md={8}>
                        <Row className='bg-[#1A2A3A] py-[60px] px-[20px] md:py-[80px] md:px-[40px] h-full'>
                            <div className='w-full'>
                                <Text className='text-white text-[30px] md:text-[40px] font-[700]'>Welcome !</Text>
                                <Text className='text-white text-[16px] md:text-[20px] font-[300]'>
                                    Please Enter your details below.
                                </Text>

                                <div className="mt-4 md:mt-8">
                                    {/* First Name */}
                                    <Text className="text-white text-[14px]">First Name</Text>
                                    <Input
                                        placeholder="First Name"
                                        name="firstName"
                                        value={dataRegister.firstName}
                                        onChange={handleChange}
                                        className="mb-1 pr-0 pl-4 py-0 h-[40px] md:h-[45px] rounded-[8px] mt-2"
                                        style={{ backgroundColor: '#F8F8F8', border: 'none' }}
                                        suffix={
                                            <div className='bg-[#007893] rounded-[8px] h-[40px] md:h-[45px] w-[50px] md:w-[60px] p-0 m-0 flex justify-center items-center'>
                                                <UserOutlined className="text-white p-2" />
                                            </div>
                                        }
                                    />
                                    {getErrorMessage('firstName')}

                                    {/* Last Name */}
                                    <Text className="text-white text-[14px] mt-3">Last Name</Text>
                                    <Input
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={dataRegister.lastName}
                                        onChange={handleChange}
                                        className="mb-1 pr-0 pl-4 py-0 h-[40px] md:h-[45px] rounded-[8px] mt-2"
                                        style={{ backgroundColor: '#F8F8F8', border: 'none' }}
                                        suffix={
                                            <div className='bg-[#007893] rounded-[8px] h-[40px] md:h-[45px] w-[50px] md:w-[60px] p-0 m-0 flex justify-center items-center'>
                                                <UserOutlined className="text-white p-2" />
                                            </div>
                                        }
                                    />
                                    {getErrorMessage('lastName')}

                                    {/* Username */}
                                    <Text className="text-white text-[14px] mt-3">Username</Text>
                                    <Input
                                        placeholder="Username"
                                        name="username"
                                        value={dataRegister.username}
                                        onChange={handleChange}
                                        className="mb-1 pr-0 pl-4 py-0 h-[40px] md:h-[45px] rounded-[8px] mt-2"
                                        style={{ backgroundColor: '#F8F8F8', border: 'none' }}
                                        suffix={
                                            <div className='bg-[#007893] rounded-[8px] h-[40px] md:h-[45px] w-[50px] md:w-[60px] p-0 m-0 flex justify-center items-center'>
                                                <UserOutlined className="text-white p-2" />
                                            </div>
                                        }
                                    />
                                    {getErrorMessage('username')}

                                    {/* Phone Number */}
                                    <Text className="text-white text-[14px] mt-3">Phone Number</Text>
                                    <Input
                                        placeholder="Phone Number"
                                        name="nomorTelp"
                                        value={dataRegister.nomorTelp}
                                        onChange={handleChange}
                                        className="mb-1 pr-0 pl-4 py-0 h-[40px] md:h-[45px] rounded-[8px] mt-2"
                                        style={{ backgroundColor: '#F8F8F8', border: 'none' }}
                                        suffix={
                                            <div className='bg-[#007893] rounded-[8px] h-[40px] md:h-[45px] w-[50px] md:w-[60px] p-0 m-0 flex justify-center items-center'>
                                                <PhoneOutlined className="text-white p-2" />
                                            </div>
                                        }
                                    />
                                    {getErrorMessage('nomorTelp')}

                                    {/* Email */}
                                    <Text className="text-white text-[14px] mt-3">Email</Text>
                                    <Input
                                        placeholder="Email"
                                        name="email"
                                        value={dataRegister.email}
                                        onChange={handleChange}
                                        className="mb-1 pr-0 pl-4 py-0 h-[40px] md:h-[45px] rounded-[8px] mt-2"
                                        style={{ backgroundColor: '#F8F8F8', border: 'none' }}
                                        suffix={
                                            <div className='bg-[#007893] rounded-[8px] h-[40px] md:h-[45px] w-[50px] md:w-[60px] p-0 m-0 flex justify-center items-center'>
                                                <MailOutlined className="text-white p-2" />
                                            </div>
                                        }
                                    />
                                    {getErrorMessage('email')}

                                    {/* Password */}
                                    <Text className="text-white text-[14px] mt-3">Password</Text>
                                    <Input
                                        placeholder="Password"
                                        name="password"
                                        type={passwordVisible ? 'text' : 'password'}
                                        value={dataRegister.password}
                                        onChange={handleChange}
                                        className="mb-1 pr-0 pl-4 py-0 h-[40px] md:h-[45px] rounded-[8px] mt-2"
                                        style={{ backgroundColor: '#F8F8F8', border: 'none' }}
                                        suffix={
                                            <div 
                                                className='bg-[#007893] rounded-[8px] h-[40px] md:h-[45px] w-[50px] md:w-[60px] p-0 m-0 flex justify-center items-center cursor-pointer'
                                                onClick={() => setPasswordVisible(!passwordVisible)}
                                            >
                                                {passwordVisible ? (
                                                    <EyeOutlined className="text-white p-2" />
                                                ) : (
                                                    <EyeInvisibleOutlined className="text-white p-2" />
                                                )}
                                            </div>
                                        }
                                    />
                                    {getErrorMessage('password')}

                                    {/* Register Button */}
                                    <ModalTrigger className='w-full m-0 p-0 mt-3'>
                                        <Button
                                            type='primary'
                                            size='large'
                                            block
                                            onClick={handleRegister}
                                            className='bg-[#008c9e] hover:bg-[#007884] text-white py-2 md:py-3 rounded-[8px]'
                                        >
                                            Register
                                        </Button>
                                    </ModalTrigger>

                                    {/* Success Modal */}
                                    {isRegisterSuccessful && (
                                        <ModalBody className='h-[50%]'>
                                            <ModalContent>
                                                <div className='flex flex-col justify-center items-center h-full'>
                                                    <img src='/image/success1.svg' alt='Success' />
                                                    <Text className='text-[24px] font-[700] text-[#1A2A3A] mt-7'>You Registered Successfully</Text>
                                                    <Text className='text-[16px] text-[#1A2A3A] mt-2'>Please check your email to verify your account</Text>

                                                    <div className='mt-4'>
                                                        <Button
                                                            type='primary'
                                                            size='large'
                                                            block
                                                            onClick={() => window.open('https://mail.google.com/')}
                                                            className='bg-[#008c9e] hover:bg-[#007884] text-white py-2 md:py-3 rounded-[8px]'
                                                        >
                                                            Go To Gmail Inbox
                                                        </Button>
                                                    </div>
                                                </div>
                                            </ModalContent>
                                        </ModalBody>
                                    )}

                                    <div className='text-center mt-4'>
                                        <Text className='text-white'>
                                            Already have an account? <Link href='/auth/login'>Login</Link>
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Col>

                    <Col span={24} md={16}>
                        <Row className='bg-[#F8F8F8] py-[40px] md:py-[80px] hidden md:block'>
                            <div className='container'>
                                <div className='flex justify-end items-end'>
                                    <img src='/image/navbar-logo.png' alt='Hero Image' className='p-4 md:p-10' />
                                </div>
                                <OurClient slidesToShow={3} TopText={false} BottomText={false} />
                            </div>
                        </Row>
                    </Col>
                </Modal>
            </Row>
        </>
    );
};

export default dynamic(() => Promise.resolve(Register), { ssr: false });
