import About from "@/components/home/About";
import Article from "@/components/home/Article";
import CompanyLogo from "@/components/home/CompanyLogo";
import OurClient from "@/components/home/OurClient";
import SaleBar from "@/components/home/SaleBar";
import Service from "@/components/home/Service";
import ServiceFixed from "@/components/home/ServiceFixed";
import VideoHero from "@/components/home/VideoHero";
import Navbar from "@/components/Navbar";
import { Col, Row } from "antd";
import Image from "next/image";

export default function Home() {
  return (

    <>
      <Row>
        <Col span={24}>
          <VideoHero />
        </Col>
      </Row>

      <Row className="my-20">
        <Col span={24}>
          <ServiceFixed />
        </Col>
      </Row>

      <Row className="my-20">
        <Col span={24}>
          <About />
        </Col>
      </Row>

      <Row className="my-20">
        <Col span={24}>
          <OurClient slidesToShow={5} />
        </Col>
      </Row>

      <Row className="my-20">
        <Col span={24}>
          <Article title={"Artikel"} HeaderModel={"CenterRight"} />
        </Col>
      </Row>

      <Row className="my-20">
        <Col span={24}>
          <SaleBar />
        </Col>
      </Row>

      <Row className="my-20">
        <Col span={24}>
          <CompanyLogo />
        </Col>
      </Row>
    </>

  );
}
