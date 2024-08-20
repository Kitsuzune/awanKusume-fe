'use client';
import React from "react";
import { Col, Row, Typography } from "antd";
import { Collapse } from 'antd';
import Article from "@/components/home/Article";
import SaleBar from "@/components/home/SaleBar";
import TrackingTable from "./TrackingTable";

const Text = Typography;
const { Panel } = Collapse;

const page = () => {
  return (
    <>
      <Row className="my-10 w-[80%] mx-auto">
        <Col span={24} className="">
            <Text className="text-[32px] md:text-[40px] font-[600] text-center">
                Lorem Ipsum dolor sit amet!
            </Text>
            <Text className="mt-4 text-[16px] md:text-[20px] font-[400] text-center">
                Whether your time-saving automation needs are large or small, we’re here to help you scale. Whether your time-saving automation needs are large or small, we’re here to help you scale.Whether your time-saving automation needs are large or small, we’re here to help you scale.
            </Text>

            {/* <input type="text" className="w-full mt-10 p-4 border border-gray-300 rounded-md" placeholder="Search" /> */}
            <div className="w-full my-10 p-4 border border-gray-300 rounded-md flex gap-3 justify-between items-center">
                <input type="text" className="w-full text-[18px] h-[50px] outline-none" placeholder="Search Here" />
                <button className="bg-orange text-white px-4 py-2 rounded-md w-[200px]">Lacak Project</button>
            </div>

            <TrackingTable />
        </Col>
      </Row>


      <Row className="my-20">
        <Col span={24}>
          <SaleBar />
        </Col>
      </Row>

    </>
  );
}

export default page;
