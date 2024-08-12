'use client';
import { RightOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Col, Row, Select, Dropdown, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import Flag from 'react-world-flags';

const { Option } = Select;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownVisibleChange = (visible: any) => {
    setIsDropdownOpen(visible);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link href="/kbli" className="flex items-center justify-between gap-[10px]" onClick={() => setIsDropdownOpen(false)}>
          <span>KBLI</span>
          <RightOutlined />
        </Link>
      )
    },
    {
      key: '2',
      label: (
        <Link href="/faq" className="flex items-center justify-between gap-[10px]" onClick={() => setIsDropdownOpen(false)}>
          <span>FAQ</span>
          <RightOutlined />
        </Link>
      )
    },
    {
      key: '3',
      label: (
        <Link href="/live-chat" className="flex items-center justify-between gap-[10px]" onClick={() => setIsDropdownOpen(false)}>
          <span>LIVE CHAT</span>
          <RightOutlined />
        </Link>
      )
    },
    {
      key: '4',
      label: (
        <Link href="/partnership" className="flex items-center justify-between gap-[10px]" onClick={() => setIsDropdownOpen(false)}>
          <span>PARTNERSHIP</span>
          <RightOutlined />
        </Link>
      )
    }
  ];

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

      <nav className="navbar bg-white py-[21px] px-[49px] shadow-lg z-20 relative">
        <Row className='flex justify-between'>
          <Col>
            <img
              src="/image/navbar-logo.png"
              alt="navbar-logo"
              className="w-[65px] h-[49px] cursor-pointer sm:w-[100px] sm:h-[75px] md:w-[130px] md:h-[98px]"
              onClick={() => window.location.href = '/'}
            />
          </Col>
          <Col className="hidden 2xl:flex items-center justify-center">
            <div className="flex gap-[23px] font-bold">
              <Link href="/about-us" className="text-[24px]">TENTANG KAMI</Link>
              <Link href="/layanan" className="text-[24px]">LAYANAN</Link>
              <Dropdown
                menu={{ items }}
                trigger={['click']}
                onVisibleChange={handleDropdownVisibleChange}
              >
                <span className='text-[24px] cursor-pointer hover:text-[#FEA500] transition-all duration-300'>INFORMASI</span>
              </Dropdown>
              <Link href="/tracking" className="text-[24px]">TRACKING</Link>
              <Link href="/info-bisnis" className="text-[24px]">INFO BISNIS</Link>
              <Link href="/promo" className="text-[24px]">PROMO</Link>
            </div>
          </Col>
          <Col className="hidden 2xl:flex items-center justify-end gap-[11px]">
            <Select
              defaultValue="ID"
              className="w-[100px] text-[16px] bg-white"
              bordered={false}
              dropdownStyle={{ minWidth: '100px' }}
            >
              <Option value="ID">
                <Flag
                  code="ID"
                  height="20"
                  className="inline w-[20px] h-[20px] mr-[8px] shadow-2xl"
                  style={{ filter: 'brightness(0.9)' }}
                />
                ID
              </Option>
              <Option value="EN">
                <Flag
                  code="GB"
                  height="20"
                  className="inline w-[20px] h-[20px] mr-[8px] shadow-2xl"
                  style={{ filter: 'brightness(0.9)' }}
                />
                EN
              </Option>
              <Option value="CN">
                <Flag
                  code="CN"
                  height="20"
                  className="inline w-[20px] h-[20px] mr-[8px] shadow-2xl"
                  style={{ filter: 'brightness(0.9)' }}
                />
                CN
              </Option>
            </Select>
            <Button className="bg-[#FEA500] text-white font-bold px-[43px] py-[25px] text-[16px] rounded-[35px]">
              <Link href="/auth/login">LOGIN</Link>
            </Button>
            <Button className="bg-[#FEA500] text-white font-bold px-[43px] py-[25px] text-[16px] rounded-[35px]">
              <Link href="/hubungi-kami">HUBUNGI KAMI</Link>
            </Button>
          </Col>
          {/* Mobile Menu Button */}
          <Col className="flex 2xl:hidden items-center justify-end">
            <Button className="text-[24px]" onClick={handleMobileMenuClick}>
              {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </Button>
          </Col>
        </Row>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div className={`fixed top-0 right-0 h-full bg-white z-30 shadow-lg transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        <div className="flex flex-col p-[20px]">
          <Link href="/about-us" className="text-[24px] py-[10px]" onClick={() => setIsMobileMenuOpen(false)}>TENTANG KAMI</Link>
          <Link href="/layanan" className="text-[24px] py-[10px]" onClick={() => setIsMobileMenuOpen(false)}>LAYANAN</Link>
          <Dropdown menu={{ items }} onVisibleChange={handleDropdownVisibleChange}>
            <span className='text-[24px] cursor-pointer hover:text-[#FEA500] transition-all duration-300'>INFORMASI</span>
          </Dropdown>
          <Link href="/tracking" className="text-[24px] py-[10px]" onClick={() => setIsMobileMenuOpen(false)}>TRACKING</Link>
          <Link href="/info-bisnis" className="text-[24px] py-[10px]" onClick={() => setIsMobileMenuOpen(false)}>INFO BISNIS</Link>
          <Link href="/promo" className="text-[24px] py-[10px]" onClick={() => setIsMobileMenuOpen(false)}>PROMO</Link>
          <Select
            defaultValue="ID"
            className="w-[100px] text-[16px] bg-white mt-[20px]"
            bordered={false}
            dropdownStyle={{ minWidth: '100px' }}
          >
            <Option value="ID">
              <Flag
                code="ID"
                height="20"
                className="inline w-[20px] h-[20px] mr-[8px] shadow-2xl"
                style={{ filter: 'brightness(0.9)' }}
              />
              ID
            </Option>
            <Option value="EN">
              <Flag
                code="GB"
                height="20"
                className="inline w-[20px] h-[20px] mr-[8px] shadow-2xl"
                style={{ filter: 'brightness(0.9)' }}
              />
              EN
            </Option>
            <Option value="CN">
              <Flag
                code="CN"
                height="20"
                className="inline w-[20px] h-[20px] mr-[8px] shadow-2xl"
                style={{ filter: 'brightness(0.9)' }}
              />
              CN
            </Option>
          </Select>
          <Button className="bg-[#FEA500] text-white font-bold w-full py-[15px] mt-[20px] rounded-[35px]" onClick={() => window.location.href = '/auth/login'}>LOGIN</Button>
          <Button className="bg-[#FEA500] text-white font-bold w-full py-[15px] mt-[10px] rounded-[35px]" onClick={() => setIsMobileMenuOpen(false)}>HUBUNGI KAMI</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
