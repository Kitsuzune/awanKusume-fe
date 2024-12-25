"use client";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import whatsappChat from "@/../public/json/whatsappChat.json";
import { useEffect, useState } from 'react';

export default function FloatingWhatsAppClient() {
  const [message, setMessage] = useState<any>(null);
  const [language, setLanguage] = useState<number>(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language");
      setLanguage(storedLanguage ? parseInt(storedLanguage) : 1);
    }
  }, []);

  useEffect(() => {
    const chatData = whatsappChat?.whatsAppMessage.find((chat: any) => chat.languageId == language);
    setMessage(chatData);
  }, [language]);

  return (
    <FloatingWhatsApp
      phoneNumber="628158968885"
      accountName="CS Awan Kusuma"
      avatar="https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-headphone-icon-customer-service-icon-png-image_2047538.jpg"
      statusMessage="Online"
      chatMessage={message?.message}
      darkMode={true}
      style={{
        position: 'absolute',
      }}
    />
  );
}
