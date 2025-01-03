"use client";

import { useTranslationCustom } from "../../public/i18n/client";
import useLanguage from "@/zustand/useLanguage";
import React from "react";

const Footer = () => {
  const { lng } = useLanguage();
  const { t } = useTranslationCustom(lng, "HomePage");
  return (
    <>
      <footer className="bg-[#007893] text-white py-20 xl:py-40">
        <div className="mx-auto px-4">
          <div className="flex flex-wrap justify-between">

            {/* Logo and Button */}
            <div className="w-full xl:w-1/4 mb-8 xl:mb-0 hidden xl:block">
              <div className="flex flex-col items-start justify-start xl:items-center xl:justify-center">
                <img src="/image/footer-logo.png" alt="Logo" className="mb-4" />
              </div>
            </div>

            {/* Navigation Links
            <div className="w-full xl:w-1/5 mb-8 xl:mb-0 xl:text-left hidden xl:block">
              <h3 className="font-[900] mb-4 text-[18px] xl:text-[20px]">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/layanan" className="hover:underline">Service</a></li>
                <li><a href="/faq" className="hover:underline">FAQ</a></li>
                <li><a href="/about-us" className="hover:underline">About</a></li>
              </ul>
            </div> */}

            {/* Contact Us */}
            <div className="w-full xl:w-1/4 mb-8 xl:mb-0 xl:text-left">
              <h3 suppressHydrationWarning className="font-[900] mb-4 text-[18px] xl:text-[20px]">{t("footer.HubungiKami")}</h3>
              <ul className="space-y-2">
                <li className="flex items-center xl:justify-start">
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
                <li className="flex items-center xl:justify-start">
                  <i className="mr-2">
                    <img src="/image/Mail.svg" alt="Mail" />
                  </i>
                  <a href="mailto:marketing@awankusuma.com" className="hover:underline">marketing@awankusuma.com</a>
                </li>
              </ul>
            </div>

            {/* Main Office */}
            <div className="w-full xl:w-1/4 mb-8 xl:mb-0 xl:text-left">
              <h3 suppressHydrationWarning className="font-[900] mb-4 text-[18px] xl:text-[20px]">{t("footer.KantorUtama")}</h3>
              <p>
                Cluster Florida 5 No. 27<br />
                Kel Tanjung Burung, <br />
                Kec. Teluk Naga, <br />
                Kab Tangerang, <br />
                Banten, 15510
              </p>
            </div>

            {/* Operational Office */}
            <div className="w-full xl:w-1/4 xl:text-start">
              <h3 suppressHydrationWarning className="font-[900] mb-4 text-[18px] xl:text-[20px]">{t("footer.KantorOperasional")}</h3>
              <p>
                Cluster Florida 5 No. 27<br />
                Kel Tanjung Burung, Kec. Teluk Naga,<br />
                Kab. Tangerang, Banten, 15510
              </p>
              <button
                suppressHydrationWarning
                className="mt-5 bg-white text-black py-2 px-4 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
                onClick={() => window.open('https://wa.me/628158968885?text=Hello%2C%20I%20have%20a%20question%20about%20Awan%20Kusuma%2C%20can%20you%20help%20me%3F', '_blank')}
              >
                {t("footer.ButtonButuhBantuan")}
              </button>
            </div>

          </div>
        </div>
      </footer>

      <footer className="bg-[#1A2A3A] text-white text-center xl:text-left">
        <span className="block py-4 px-4 xl:px-16">
          © Copyright 2024
          <span className="font-bold"> AWANKUSUMA. </span>
          All Rights Reserved
        </span>
      </footer>
    </>
  );
};

export default Footer;
