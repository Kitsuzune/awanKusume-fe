import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { useRouter } from 'next/navigation';

const { Text } = Typography;

interface ModalNavbarServiceContentProps {
  closeMenu?: () => void;
}

const ModalNavbarServiceContent: React.FC<ModalNavbarServiceContentProps> = ({ closeMenu }) => {
  const router = useRouter();
  const [language, setLanguage] = useState<number>(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language");
      setLanguage(storedLanguage ? parseInt(storedLanguage) : 1);
    }
  }, []);

  const getServiceId = (baseId: number) => {
    return baseId + (language - 1);
  };

  const handleRedirect = (baseId: number) => {
    const serviceId = getServiceId(baseId);
    if (closeMenu) {
      closeMenu();
    }
    router.push(`/layanan/${serviceId}`);
  };

  return (
    <div className='flex flex-col'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <div>
          <Text className='text-lg md:text-xl font-bold'>
            Pendirian Perusahaan
          </Text>
          <div className='mt-1'>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => window.location.href = '/layanan/pendirian-perusahaan'}>
              <img src='/image/Office_building.png' alt='Office_building' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Pendirian PT
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => window.location.href = '/layanan/pendirian-perusahaan'}>
              <img src='/image/City_store.png' alt='City_store' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Pendirian CV
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => window.location.href = '/layanan/pendirian-perusahaan'}>
              <img src='/image/City_tower.png' alt='City_tower' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Pendirian PT Perorangan
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => window.location.href = '/layanan/perizinan-bisnis'}>
              <img src='/image/Apartment_building.png' alt='Apartment_building' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Pendirian Yayasan
              </Text>
            </div>
          </div>
        </div>
        <div>
          <Text className='text-lg md:text-xl font-bold'>
            Virtual Office
          </Text>
          <div className='mt-1'>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(124)}>
              <img src='/image/Virtual_Event_11.png' alt='Virtual_Event_11' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Jakarta Barat
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(127)}>
              <img src='/image/Virtual_Event_11.png' alt='Virtual_Event_11' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Jakarta Utara
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(130)}>
              <img src='/image/Virtual_Event_11.png' alt='Virtual_Event_11' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Jakarta Pusat
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(133)}>
              <img src='/image/Virtual_Event_11.png' alt='Virtual_Event_11' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Tangerang
              </Text>
            </div>
          </div>
        </div>
        <div>
          <Text className='text-lg md:text-xl font-bold'>
            Izin Edar
          </Text>
          <div className='mt-1'>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(136)}>
              <img src='/image/Prescription.png' alt='Prescription' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                NIE BPOM
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(139)}>
              <img src='/image/Insurance.png' alt='Insurance' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                NIE AKL
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(142)}>
              <img src='/image/Checklist.png' alt='Checklist' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                SNI
              </Text>
            </div>
          </div>
        </div>
        <div>
          <Text className='text-lg md:text-xl font-bold'>
            Perizinan Khusus
          </Text>
          <div className='mt-1'>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(145)}>
              <img src='/image/Construction.png' alt='Construction' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                SBU
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(148)}>
              <img src='/image/Hospital.png' alt='Hospital' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Klinik
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <div>
          <Text className='text-lg md:text-xl font-bold'>
            Pembuatan dan Perubahan Dokumen Perusahaan
          </Text>
          <div className='mt-1'>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(151)}>
              <img src='/image/Electronic_Signature.png' alt='Electronic_Signature' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Perubahan Kegiatan Usaha Perusahaan
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(154)}>
              <img src='/image/Mini_tour.png' alt='Mini_tour' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Perubahaan Alamat Perusahaan
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(157)}>
              <img src='/image/Employee_Switch.png' alt='Employee_Switch' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Perubahan Direksi Perusahaan
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(160)}>
              <img src='/image/Aggrement.png' alt='Aggrement' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Jual Beli Saham Perusahaan
              </Text>
            </div>
          </div>
        </div>
        <div>
          <Text className='text-lg md:text-xl font-bold'>
            Perizinan Usaha
          </Text>
          <div className='mt-1'>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(163)}>
              <img src='/image/Passport.png' alt='Passport' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                OSS
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(166)}>
              <img src='/image/Magnifying_a_Contract.png' alt='Magnifying_a_Contract' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                NIB
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(169)}>
              <img src='/image/Document_with_a_Stamp.png' alt='Document_with_a_Stamp' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                SINNAS
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(172)}>
              <img src='/image/Global_business.png' alt='Global_business' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                INSW
              </Text>
            </div>
          </div>
        </div>
        <div>
          <Text className='text-lg md:text-xl font-bold'>
            HAKI
          </Text>
          <div className='mt-1'>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(175)}>
              <img src='/image/Certificate.jpg' alt='Certificate' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Merek/Trademark
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(178)}>
              <img src='/image/Contract.jpg' alt='Contract' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Paten
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(181)}>
              <img src='/image/Agreement.jpg' alt='Agreement' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Hak Cipta
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(184)}>
              <img src='/image/Film.jpg' alt='Film' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Design Industri
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(187)}>
              <img src='/image/Contract_with_a_Lock.png' alt='Contract_with_a_Lock' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Rahasia Dagang
              </Text>
            </div>
          </div>
        </div>
        <div>
          <Text className='text-lg md:text-xl font-bold'>
            Accounting dan Pajak
          </Text>
          <div className='mt-1'>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(190)}>
              <img src='/image/Document.png' alt='Document' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                PKP
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(193)}>
              <img src='/image/Calendar.png' alt='Calendar' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                SPT Tahunan
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <div>
          <Text className='text-lg md:text-xl font-bold'>
            Marketing Agency
          </Text>
          <div className='mt-1'>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(196)}>
              <img src='/image/Global.png' alt='Global' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Website
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(199)}>
              <img src='/image/Asset_Management.png' alt='Asset_Management' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Digital Marketing
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(202)}>
              <img src='/image/Creator.png' alt='Creator' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Video
              </Text>
            </div>
          </div>
        </div>
        <div>
          <Text className='text-lg md:text-xl font-bold'>
            Service Lainnya
          </Text>
          <div className='mt-1'>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(205)}>
              <img src='/image/Contract_with_a_Broken.png' alt='Contract_with_a_Broken' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                Penutupan PT
              </Text>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300" onClick={() => handleRedirect(208)}>
              <img src='/image/Warehouse.png' alt='Warehouse' className='w-4 h-4 md:w-5 md:h-5' />
              <Text className='text-sm md:text-base'>
                TDG (Tanda Daftar Gudang)
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNavbarServiceContent;