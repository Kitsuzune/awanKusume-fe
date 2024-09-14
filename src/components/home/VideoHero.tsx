import { Col, Row } from "antd";

const VideoHero = () => {
    return (
        <Row className="shadow-xl">
            <Col span={24}>
                <div className="relative h-[250px] md:h-[699px] w-full">
                    <video autoPlay muted loop playsInline preload="auto"  id="myVideo" className="h-[250px] md:h-[699px] w-full object-cover">
                        <source src="/video/vid-1.mp4" type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                    <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
                    <div className="absolute inset-0 flex items-center pl-[16px] md:pl-[56px]">
                        <div className="text-white text-justify">
                            <h1 className="text-[24px] md:text-[48px] font-[900]">FOCUS ON YOUR BUSINESS,</h1>
                            <h1 className="text-[24px] md:text-[48px] font-[900]">LEAVE EVERYTHING TO US</h1>
                            <button className="bg-[#FEA500] text-white font-bold px-[20px] py-[10px] md:px-[43px] md:py-[18px] text-[12px] md:text-[15px] rounded-[25px] md:rounded-[35px] mt-4 md:mt-10 hover:bg-[#8f802b] transition-all duration-500">
                                LINDUNGI USAHAMU
                            </button>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default VideoHero;
