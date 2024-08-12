'use client';
import React, { useState } from "react";
import {
  BiHomeAlt,
  BiGridAlt,
  BiCreditCardAlt,
  BiUser,
  BiCalculator,
} from "react-icons/bi";
import { RiSettings5Line } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export default function Sidebar() {
  const [isContentOpen, setIsContentOpen] = useState(false);

  const menu = [
    { name: "Dashboard", icon: <BiHomeAlt /> },
    {
      name: "Content",
      icon: <BiGridAlt />,
      subMenu: [
        "Navbar",
        "Showcase",
        "Service",
        "About",
        "Our Client",
        "Artikel",
        "Promo",
        "Partnership",
        "Faq",
      ],
    },
    { name: "Tracking", icon: <BiCreditCardAlt /> },
    { name: "Share Auth", icon: <BiUser /> },
    { name: "Posts", icon: <BiCalculator /> },
    { name: "Pengajuan", icon: <RiSettings5Line /> },
    { name: "Users", icon: <RiSettings5Line /> },
  ];

  return (
    <div className="h-screen border-r border-gray-200 w-72 px-5 py-4 space-y-10">
      <div className="flex items-center justify-center">
        <span className="text-xl font-semibold">AWAN KUSUMA</span>
      </div>
      <div>
        <ul className="space-y-4">
          {menu.map((val, index) => {
            return (
              <li key={index} className="space-y-1">
                {val.subMenu ? (
                  <div>
                    <div
                      onClick={() => setIsContentOpen(!isContentOpen)}
                      className="flex items-center justify-between p-2 text-gray-400 transition-all duration-300 ease-in-out hover:text-indigo-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className="mr-4">{val.icon}</div>
                        <div>{val.name}</div>
                      </div>
                      <div>
                        {isContentOpen ? (
                          <IoIosArrowDown />
                        ) : (
                          <IoIosArrowForward />
                        )}
                      </div>
                    </div>
                    {isContentOpen && (
                      <ul className="pl-8 mt-2 space-y-1">
                        {val.subMenu.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="text-gray-400 transition-all duration-300 ease-in-out hover:text-indigo-700 hover:bg-gray-100 rounded-lg cursor-pointer p-2"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center p-2 text-gray-400 transition-all duration-300 ease-in-out hover:text-indigo-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <div className="mr-4">{val.icon}</div>
                    <div>{val.name}</div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
