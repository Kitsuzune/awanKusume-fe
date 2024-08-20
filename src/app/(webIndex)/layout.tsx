import { Col, Row } from "antd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <>
        <Row>
          <Col span={24}>
            <Navbar />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            {children}
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Footer />
          </Col>
        </Row>
    </>
  );
}
