
"use client";
import React, { useState, useEffect } from 'react';
import { Input, Button, Row, Col, Typography, message } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import OurClient from '@/components/home/OurClient';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from '@/components/ui/animated-modal';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { apiRequest } from '@/utils/api';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Modal as AntdModal } from 'antd';

const Text = Typography;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [timer, setTimer] = useState(10);
  const router = useRouter();

  // Function to handle login
  const handleLogin = async () => {
    try {
      const response = await apiRequest('post', '/auth/login', { email, password, remember: false });
      if (response.status === 200) {
        setIsLoginSuccessful(true);
        // console.log(response.data);
        //   {
        //     "id": 1,
        //     "email": "john.adoe2@example.com",
        //     "firstName": "Joha",
        //     "lastName": "Doe",
        //     "username": "Admin",
        //     "nomorTelp": "081232242a678920",
        //     "role": "SUPER_ADMIN",
        //     "verified": 1,
        //     "createdAt": "2024-06-17T13:09:09.869Z",
        //     "updatedAt": "2024-10-28T09:13:51.855Z",
        //     "nomorKtp": null
        // }
        // set cookies dari frontend untuk menyimpan data user ke dalam cookies (user-data) menggunakan js-cookie
        // Cookies.set('user-data', response.data, { expires: 1 });
        // buat jika user remember me nya true maka expires nya 180 hari kalo false expires nya 30 hari
        const cookiesExpires = response.data.remember ? 180 : 1;
        // Cookies.set('user-data', response.data, { expires: cookiesExpires });
        Cookies.set('user-data', JSON.stringify(response.data), { expires: cookiesExpires });
      }
    } catch (error) {
      setIsLoginSuccessful(false);
      console.error(error);
      AntdModal.error({
        title: 'Login Failed',
        content: 'Email or Password is incorrect',
        centered: true,
      });
    }
  };

  useEffect(() => {
    if (isLoginSuccessful && timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (isLoginSuccessful && timer === 0) {
      // router.push('/');
      window.location.href = '/';
    }
  }, [isLoginSuccessful, timer, router]);

  return (
    <>
      <Row>
        <Modal>
          <Col span={24} md={16}>
            <Row className='bg-[#F8F8F8] pb-10 hidden md:pb-20 md:block'>
              <div className='container'>
                <img src='/image/navbar-logo.png' alt='Hero Image' className='p-5 md:p-10' />
                <OurClient slidesToShow={3} TopText={false} BottomText={false} />
              </div>
            </Row>
          </Col>

          <Col span={24} md={8}>
            <Row className='bg-[#1A2A3A] py-[100px] px-[36px] md:py-[190px] md:px-[72px] h-full'>
              <div className='w-full'>
                <Text className='text-white text-[40px] md:text-[60px] font-[700]'>Welcome !</Text>
                <Text className='text-white text-[18px] md:text-[24px] font-[300]'>
                  Please Enter your details below.
                </Text>

                <div className='mt-4 md:mt-8'>
                  <Text className='text-white text-[14px]'>Email</Text>
                  <Input
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='mb-4 pr-0 pl-4 py-0 h-[45px] md:h-[50px] rounded-[8px] mt-2'
                    style={{
                      backgroundColor: '#F8F8F8',
                      border: 'none',
                    }}
                    suffix={
                      <div className='bg-[#007893] rounded-[8px] h-[45px] md:h-[50px] w-[60px] p-0 m-0 flex justify-center items-center'>
                        <MailOutlined className='text-white p-2' />
                      </div>
                    }
                  />

                  <Text className='text-white text-[14px] mt-3'>Password</Text>
                  <Input.Password
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='mb-4 pr-5 pl-4 py-0 h-[45px] md:h-[50px] rounded-[8px] mt-2'
                    size='large'
                    style={{
                      backgroundColor: '#F8F8F8',
                      border: 'none',
                    }}
                  />

                  <ModalTrigger className='w-full m-0 p-0 mt-3'>
                    <Button
                      type='primary'
                      size='large'
                      block
                      className='bg-[#008c9e] hover:bg-[#007884] text-white py-3 md:py-4 rounded-[8px]'
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  </ModalTrigger>

                  {isLoginSuccessful && (
                    <ModalTrigger className="w-full m-0 p-0 mt-3">
                      <ModalBody className="h-[50%]">
                        <ModalContent>
                          <div className="flex flex-col justify-center items-center h-full">
                            <div className="text-center justify-center flex">
                              <img src="/image/success1.svg" alt="Success" />
                            </div>
                            <Text className="text-[20px] md:text-[24px] font-[700] text-[#1A2A3A] justify-center flex text-center mt-7">
                              You have logged in
                              <br />
                              successfully
                            </Text>
                            <Text className="text-[12px] md:text-[14px] text-[#1A2A3A] justify-center flex text-center mt-3">
                              Redirecting in {timer} seconds...
                            </Text>

                            <div className="mt-4">
                              <Button
                                type="primary"
                                size="large"
                                block
                                className="bg-[#1A2A3A] hover:bg-[#007884] text-white px-[50px] md:px-[100px] py-[12px] md:py-[16px] h-[50px] md:h-[56px] rounded-full"
                                onClick={() => window.location.href = '/'}
                              >
                                Continue
                              </Button>
                            </div>
                          </div>
                        </ModalContent>
                      </ModalBody>
                    </ModalTrigger>
                  )}

                  <div className='text-center mt-4'>
                    <Text className='text-white text-[14px]'>
                      Don’t Have Account?
                      <Link href='/auth/register'>
                        <span className='text-[#00a0e3] hover:text-[#007884] transition-all cursor-pointer'> Register </span>
                      </Link>
                    </Text>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Modal>
      </Row>
    </>
  );
};

export default dynamic(() => Promise.resolve(Login), { ssr: false });
