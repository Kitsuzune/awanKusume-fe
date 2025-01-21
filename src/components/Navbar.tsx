'use client';
import { useTranslationCustom } from '../../public/i18n/client';
import useLanguage from '@/zustand/useLanguage';
import { RightOutlined, MenuOutlined, CloseOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Col, Row, Select, Dropdown, Menu, MenuProps, Typography, Modal } from 'antd';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Flag from 'react-world-flags';
import Cookies from 'js-cookie';
import { FaSignOutAlt } from 'react-icons/fa';
import { apiRequest } from '@/utils/api';
import ModalNavbarServiceContent from './ui/navbar-service-content';

import idTranslations from '../../public/i18n/locales/id/HomePage.json';
import enTranslations from '../../public/i18n/locales/en/HomePage.json';
import cnTranslations from '../../public/i18n/locales/cn/HomePage.json';

const { Text } = Typography;
const { Option } = Select;

interface UserData {
  firstName: string;
  role: string;
}

const getTranslations = (language: number) => {
  switch (language) {
    case 1:
      return idTranslations;
    case 2:
      return enTranslations;
    case 3:
      return cnTranslations;
    default:
      return idTranslations;
  }
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState<number>(1);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const translations = getTranslations(language);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage) {
        setLanguage(parseInt(storedLanguage));
      }
      const userCookie = Cookies.get('user-data');
      if (userCookie) {
        setUserData(JSON.parse(userCookie));
      }
    }
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const { lng } = useLanguage();
  const { t } = useTranslationCustom(lng, "HomePage");

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownVisibleChange = (visible: any) => {
    setIsDropdownOpen(visible);
  };

  const handleLanguageChange = (value: number) => {
    setLanguage(value);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', value.toString());
      window.location.reload();
    }
  };

  const handleLogout = async () => {
    try {
      const response = await apiRequest('post', '/auth/logout', {}, {})
      if (response?.status === 200) {
        Cookies.remove('user-data');
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link href="/kbli" className="flex items-center justify-between gap-[10px]" onClick={() => setIsDropdownOpen(false)}>
          <span suppressHydrationWarning>
            {translations.navbar.InformasiKbli}
          </span>
          <RightOutlined />
        </Link>
      )
    },
    {
      key: '2',
      label: (
        <Link href="/faq" className="flex items-center justify-between gap-[10px]" onClick={() => setIsDropdownOpen(false)}>
          <span suppressHydrationWarning>
            {translations.navbar.InformasiFaq}
          </span>
          <RightOutlined />
        </Link>
      )
    },
    {
      key: '3',
      label: (
        <div
          className="flex items-center justify-between gap-[10px]"
          onClick={() => window.open('https://api.whatsapp.com/send/?phone=628158968885', '_blank')}
        >
          <span suppressHydrationWarning>
            {translations.navbar.InformasiLiveChat}
          </span>
          <RightOutlined />
        </div>
      )
    },
  ];

  const userMenu = (
    <Menu className="p-5 bg-white shadow-md w-64">
      <div className="flex items-center space-x-3 mx-2 px-2 py-2 border-2 rounded-2xl">
        <img
          src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <Text strong>{userData?.firstName}</Text>
          <Text className="block text-gray-500 text-sm">{userData?.role}</Text>
        </div>
      </div>
      <Menu.Divider />
      <Menu.Item key="logout" onClick={handleLogout} className="flex items-center">
        <div className='px-2 mx-2 flex items-center'>
          <FaSignOutAlt className="mr-2 text-red-600" />
          {/* Logout */}
          <Text
            className='text-red-600'
            onClick={handleLogout}
          >
            Logout
          </Text>
        </div>
      </Menu.Item>
    </Menu>
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={`relative`}>
      {/* Overlay for dropdown focus */}
      {isDropdownOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-all duration-300" onClick={() => setIsDropdownOpen(false)} />
      )}

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Overlay for modal */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-all duration-300" onClick={handleCancel} />
      )}

      {/* Desktop Navbar */}
      <nav className="navbar bg-white py-[15px] px-[49px] shadow-lg z-20 fixed w-full">
        <Row className='flex justify-between'>
          <Col>
            <img
              src="/image/navbar-logo.png"
              alt="navbar-logo"
              className="w-[65px] h-[49px] cursor-pointer sm:w-[100px] sm:h-[75px] md:w-[90px] md:h-[70px]"
              onClick={() => window.location.href = '/'}
            />
          </Col>
          <Col className="hidden 3xl:flex items-center justify-center">
            <div className="flex gap-[23px] font-bold">
              <Link suppressHydrationWarning href="/about-us" className="text-[20px] text-black hover:text-orange">{translations.navbar.TentangKami}</Link>
              <span className="text-[20px] text-black hover:text-orange cursor-pointer" onClick={showModal}>
                {translations.navbar.Layanan}
              </span>
              <Dropdown
                menu={{ items }}
                onVisibleChange={handleDropdownVisibleChange}
              >
                <div className='hover:text-orange'>
                  <span className='text-[20px] cursor-pointer transition-all duration-300'>{translations.navbar.Informasi}</span>
                  <DownOutlined className='text-[20px] ml-2 transition-all duration-300' />
                </div>
              </Dropdown>
              <Link suppressHydrationWarning href="/tracking" className="text-[20px] text-black hover:text-orange">{translations.navbar.Tracking}</Link>
              <Link suppressHydrationWarning href="/blogPost" className="text-[20px] text-black hover:text-orange">{translations.navbar.InfoBisnis}</Link>
              <Link suppressHydrationWarning href="https://www.instagram.com/awankusuma.legalitas/" className="text-[20px] text-black hover:text-orange">{translations.navbar.Promo}</Link>
            </div>
          </Col>
          <Col className="hidden 3xl:flex items-center justify-end gap-[11px]">
            <Select
              value={language}
              onChange={handleLanguageChange}
              className="w-[100px] text-[16px] bg-white"
              bordered={false}
              dropdownStyle={{ minWidth: '100px' }}
            >
              <Option value={1}>
                <Flag
                  code="ID"
                  height="20"
                  className="inline w-[20px] h-[20px] mr-[8px] shadow-2xl"
                  style={{ filter: 'brightness(0.9)' }}
                />
                ID
              </Option>
              <Option value={2}>
                <Flag
                  code="GB"
                  height="20"
                  className="inline w-[20px] h-[20px] mr-[8px] shadow-2xl"
                  style={{ filter: 'brightness(0.9)' }}
                />
                EN
              </Option>
              <Option value={3}>
                <Flag
                  code="CN"
                  height="20"
                  className="inline w-[20px] h-[20px] mr-[8px] shadow-2xl"
                  style={{ filter: 'brightness(0.9)' }}
                />
                CN
              </Option>
            </Select>
            {userData ? (
              <>
                <Dropdown overlay={userMenu} trigger={['click']} placement="bottomRight">
                  <div
                    className="border-2 font-bold px-10 py-2 text-lg rounded-full flex items-center justify-center cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>{userData.firstName}</span>
                    <DownOutlined className="ml-2" />
                  </div>
                </Dropdown>
                <div
                  className='text-white border-2 font-semibold px-[41px] py-[10px] text-[16px] rounded-[35px] flex items-center justify-center bg-main hover:bg-blue-400 cursor-pointer transition-all duration-300 hover:text-black hover:border-black'
                  onClick={() => window.open(`${process.env.NEXT_PUBLIC_CMS_URL}/web/login`, '_blank')}
                >
                  <span>Panel Dashboard</span>
                </div>
              </>
            ) : (
              <>
                <Button className="bg-[#FEA500] text-white font-bold px-[41px] py-[23px] text-[16px] rounded-[35px]">
                  <Link href="/auth/login">LOGIN</Link>
                </Button>
                <Button
                  suppressHydrationWarning
                  className="bg-[#FEA500] text-white font-bold px-[41px] py-[23px] text-[16px] rounded-[35px]"
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=628158968885&text=Hello%2C%20I%20have%20an%20inquiry%20for%20Awan%20Kusuma%2C%20can%20you%20help%20me%3F', '_blank')}
                >
                  {translations.navbar.ButtonHubungiKami}
                </Button>
              </>
            )}
          </Col>
          {/* Mobile Menu Button */}
          <Col className="flex 3xl:hidden items-center justify-end">
            <Button className="text-[20px]" onClick={handleMobileMenuClick}>
              {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </Button>
          </Col>
        </Row>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div className={`fixed top-0 right-0 h-full bg-white z-30 shadow-lg transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        <div className="flex flex-col p-[20px]">
          <Link suppressHydrationWarning href="/about-us" className="text-[14px] md:text-[20px] py-[10px] hover:bg-gray-100 hover:text-orange px-5 rounded-lg transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>{translations.navbar.TentangKami}</Link>
          <Link 
            suppressHydrationWarning 
            href="/layanan" 
            className="text-[14px] md:text-[20px] py-[10px] hover:bg-gray-100 hover:text-orange px-5 rounded-lg transition-all duration-300"
            onClick={() => {
              setIsMobileMenuOpen(false);
              showModal();
            }}
          >{translations.navbar.Layanan}</Link>
          <Dropdown menu={{ items }} onVisibleChange={handleDropdownVisibleChange}>
            <div className='hover:text-orange hover:bg-gray-100 py-[10px] rounded-lg'>
              <span suppressHydrationWarning className='text-[14px] md:text-[20px] cursor-pointer px-5 py-[10px] text-start'>{translations.navbar.Informasi}</span>
              <DownOutlined className='text-[14px] md:text-[20px] ml-2' />
            </div>
          </Dropdown>
          <Link suppressHydrationWarning href="/tracking" className="text-[14px] md:text-[20px] py-[10px] hover:bg-gray-100 hover:text-orange px-5 rounded-lg transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>{translations.navbar.Tracking}</Link>
          <Link suppressHydrationWarning href="/blogPost" className="text-[14px] md:text-[20px] py-[10px] hover:bg-gray-100 hover:text-orange px-5 rounded-lg transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>{translations.navbar.InfoBisnis}</Link>
          <Link suppressHydrationWarning href="https://www.instagram.com/awankusuma.legalitas/" className="text-[14px] md:text-[20px] py-[10px] hover:bg-gray-100 hover:text-orange px-5 rounded-lg transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>{translations.navbar.Promo}</Link>
          {userData ? (
            <>
              <div className='border-2 font-bold w-full py-[15px] mt-[20px] rounded-lg flex items-center justify-center'>
                <span>{userData.firstName}</span>
              </div>
              <div
                className='text-white border-2 font-semibold w-full py-[15px] mt-[20px] rounded-lg text-[16px] flex items-center justify-center bg-main hover:bg-blue-400 cursor-pointer transition-all duration-300 hover:text-black hover:border-black'
                onClick={() => window.open(`${process.env.NEXT_PUBLIC_CMS_URL}/web/login`, '_blank')}
              >
                <span>Panel CMS</span>
              </div>
              <div
                className='text-white border-2 font-semibold w-full py-[15px] mt-[20px] rounded-lg text-[16px] flex items-center justify-center bg-red-500 hover:bg-red-700 cursor-pointer transition-all duration-300 hover:text-black hover:border-black'
                onClick={handleLogout}
              >
                <span>Logout</span>
              </div>
            </>
          ) : (
            <>
              <Button className="bg-[#FEA500] text-white font-bold w-full py-[15px] mt-[20px] rounded-lg" onClick={() => window.location.href = '/auth/login'}>LOGIN</Button>
              <Button
                suppressHydrationWarning
                className="bg-[#FEA500] text-white text-[14px] font-bold w-full py-[15px] mt-[10px] rounded-lg"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open('https://api.whatsapp.com/send/?phone=628158968885&text=Hello%2C%20I%20have%20an%20inquiry%20for%20Awan%20Kusuma%2C%20can%20you%20help%20me%3F', '_blank');
                }}
              >
                {translations.navbar.ButtonHubungiKami}
              </Button>
            </>
          )}

          <Select
            value={language}
            onChange={handleLanguageChange}
            className="w-[100px] text-[16px] bg-white mt-[20px]"
            bordered={false}
            dropdownStyle={{ minWidth: '100px' }}
          >
            <Option value={1}>
              <Flag
                code="ID"
                height="20"
                className="inline w-[20px] h-[20px] mr-[8px] shadow-2xl"
                style={{ filter: 'brightness(0.9)' }}
              />
              ID
            </Option>
            <Option value={2}>
              <Flag
                code="GB"
                height="20"
                className="inline w-[20px] h-[20px] mr-[8px] shadow-2xl"
                style={{ filter: 'brightness(0.9)' }}
              />
              EN
            </Option>
            <Option value={3}>
              <Flag
                code="CN"
                height="20"
                className="inline w-[20px] h-[20px] mr-[8px] shadow-2xl"
                style={{ filter: 'brightness(0.9)' }}
              />
              CN
            </Option>
          </Select>
        </div>
      </div>

      {/* Modal for Layanan */}
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width='90vw'
        className='-mt-5'
      >
        <ModalNavbarServiceContent />
      </Modal>
    </div>
  );
};

export default Navbar;
