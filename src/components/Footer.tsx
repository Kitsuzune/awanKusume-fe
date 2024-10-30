"use client";

import { useTranslationCustom } from "@/i18n/client";
import useLanguage from "@/zustand/useLanguage";
import React from "react";

const Footer = () => {
  const { lng } = useLanguage();
  const { t } = useTranslationCustom(lng, "HomePage");
  return (
    <>
      <footer className="bg-[#007893] text-white py-20 md:py-40">
        <div className="mx-auto px-4">
          <div className="flex flex-wrap justify-between">

            {/* Logo and Button */}
            <div className="w-full md:w-1/5 mb-8 md:mb-0 hidden md:block">
              <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
                <img src="/image/footer-logo.png" alt="Logo" className="mb-4" />
                <button 
                  className="bg-white text-black py-2 px-4 rounded-full font-semibold"
                  onClick={() => window.open('https://wa.me/628158968885?text=Hello%2C%20I%20have%20a%20question%20about%20Awan%20Kusuma%2C%20can%20you%20help%20me%3F', '_blank')}
                >
                  {t("footer.ButtonButuhBantuan")}
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="w-full md:w-1/5 mb-8 md:mb-0 md:text-left hidden md:block">
              <h3 className="font-[900] mb-4 text-[18px] md:text-[20px]">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/layanan" className="hover:underline">Service</a></li>
                <li><a href="/faq" className="hover:underline">FAQ</a></li>
                <li><a href="/about-us" className="hover:underline">About</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="w-full md:w-1/5 mb-8 md:mb-0 md:text-left">
              <h3 className="font-[900] mb-4 text-[18px] md:text-[20px]">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center md:justify-start">
                  <i className="mr-2">
                    <img src="/image/WhatsApp.svg" alt="WhatsApp" />
                  </i>
                  <a
                    className="hover:underline cursor-pointer"
                    href="https://wa.me/628158968885"
                  >
                    +62 815-9868-885
                  </a>
                </li>
                <li className="flex items-center md:justify-start">
                  <i className="mr-2">
                    <img src="/image/Mail.svg" alt="Mail" />
                  </i>
                  <a href="mailto:marketing@awankusuma.com" className="hover:underline">marketing@awankusuma.com</a>
                </li>
              </ul>
            </div>

            {/* Main Office */}
            <div className="w-full md:w-1/5 mb-8 md:mb-0 md:text-left">
              <h3 className="font-[900] mb-4 text-[18px] md:text-[20px]">Main Office</h3>
              <p>
                Gedung Thamrin City<br />
                Lantai 6 Unit 7A, Jl. Thamrin Boulevard,<br />
                Kel. Kebon Melati, Kec. Tanah Abang, Jakarta Pusat
              </p>
            </div>

            {/* Operational Office */}
            <div className="w-full md:w-1/5 md:text-start">
              <h3 className="font-[900] mb-4 text-[18px] md:text-[20px]">Operational Office</h3>
              <p>
                Tokyo Riverside, PIK 2<br />
                Kel, Lemo Kec. Teluk Naga Kab.<br />
                Tangerang, Banten, 15510
              </p>
            </div>

          </div>
        </div>
      </footer>

      <footer className="bg-[#1A2A3A] text-white text-center md:text-left">
        <span className="block py-4 px-4 md:px-16">
          © Copyright 2024
          <span className="font-bold"> AWANKUSUMA. </span>
          All Rights Reserved
        </span>
      </footer>
    </>
  );
};

export default Footer;
