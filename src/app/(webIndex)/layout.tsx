import { Col, Row } from "antd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppClient from "@/components/ui/floating-whatsapp";

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <>

      <FloatingWhatsAppClient />
      
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
