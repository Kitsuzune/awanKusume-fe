"use client";

import { useTranslationCustom } from '../../../public/i18n/client';
import useLanguage from '@/zustand/useLanguage';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function FloatingWhatsAppClient() {
  const { lng } = useLanguage();
  const { t } = useTranslationCustom(lng, "HomePage");
  return (
    <FloatingWhatsApp
      phoneNumber="628158968885"
      accountName="CS Awan Kusuma"
      avatar="https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-headphone-icon-customer-service-icon-png-image_2047538.jpg"
      statusMessage="Online"
      chatMessage={t("wa.ChatWa")}
      darkMode={true}
      style={{
        position: 'absolute',
      }}
    />
  );
}
