'use client'
import { apiRequest } from "@/utils/api";
import { Col, message, Row } from "antd";
import { useEffect, useState } from "react";

const VideoHero = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        title: '',
        subTitle: '',
        image: '',
    });
    const [language, setLanguage] = useState<number>(() => {
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('language');
            return storedLanguage ? parseInt(storedLanguage) : 1;
        }
        return 1; // Default language if localStorage is not available
    });

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await apiRequest('get', `/homepage/showcase/${language}`);
            setData(response.data.data)
            setLoading(false);
        } catch (error) {
            //   message.error(error.response.data.message ? error.response.data.message : 'Server Unreachable, Please Check Your Internet Connection');
            // message.error('Server Unreachable, Please Check Your Internet Connection');
            console.log(error)
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [language]);

    return (
        <Row className="shadow-xl">
            <Col span={24}>
                <div className="relative h-[250px] md:h-[699px] w-full">
                    <video autoPlay muted loop playsInline preload="auto" id="myVideo" className="h-[250px] md:h-[699px] w-full object-cover" src={data?.image} />
                    <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
                    <div className="absolute inset-0 flex items-center pl-[16px] md:pl-[56px]">
                        <div className="text-white">
                            <h1 className="text-[24px] md:text-[48px] font-[900] w-[90%] md:w-[80%]">{data?.title}</h1>
                            {/* <h1 className="text-[24px] md:text-[48px] font-[900]">LEAVE EVERYTHING TO US</h1> */}
                            <button
                                className="bg-[#FEA500] text-white font-bold px-[20px] py-[10px] md:px-[43px] md:py-[18px] text-[12px] md:text-[15px] rounded-[25px] md:rounded-[35px] mt-4 md:mt-10 hover:bg-[#8f802b] transition-all duration-500"
                                onClick={() => window.open('https://wa.me/628158968885?text=Hello%2C%20I%20want%20to%20know%20more%20about%20Awan%20Kusuma', '_blank')}
                            >
                                {data?.subTitle}
                            </button>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default VideoHero;
