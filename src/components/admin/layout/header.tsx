import React from "react";
import { BellOutlined, UserOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div className="w-full h-16 bg-[#007893] flex items-center justify-between px-6">
      <div className="text-white font-bold text-lg">
        AWAN KUSUMA
      </div>
      <div className="flex items-center space-x-6">
        <BellOutlined className="text-white text-xl" />
        <div className="flex items-center space-x-2">
          <UserOutlined className="text-white text-xl" />
          <span className="text-white">Alex</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
