"use client";

import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function FloatingWhatsAppClient() {
  return (
    <FloatingWhatsApp
      phoneNumber="628158968885"
      accountName="CS Awan Kusuma"
      avatar="https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-headphone-icon-customer-service-icon-png-image_2047538.jpg"
      statusMessage="Online"
      chatMessage="Hallo, apa yang bisa kami bantu?"
      darkMode={true}
      style={{
        position: 'absolute',
      }}
    />
  );
}
