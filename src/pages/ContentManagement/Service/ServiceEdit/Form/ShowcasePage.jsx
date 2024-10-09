import React from 'react'
import { Row, Col, Form, Input, Switch, Button } from 'antd';

const ShowcasePage = () => {
    return (
        <div className="mt-5 p-10 bg-white border rounded-lg">
            <div className='flex justify-between items-center'>
                <div className='text-[24px] mb-5 text-main inline-block'>Showcase</div>
                <Row>
                    <Col span={24} className='flex justify-end gap-3'>
                        <span className='text-[15px]'>Hide</span>
                        <Switch defaultChecked />
                        <span className='text-[15px]'>Show</span>
                    </Col>
                </Row>
            </div>

            <Row>
                <Col span={24}>
                    <Form.Item
                        name="showcaseTitle"
                        label="Title :"
                    >
                        <Input placeholder="Enter title" />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Form.Item
                        name="showcaseSubTitle"
                        label="Sub Title :"
                    >
                        <Input placeholder="Enter subtitle" />
                    </Form.Item>
                </Col>
            </Row>

            <div className="mt-5 flex justify-end">
                <Button type="default" className="mr-2">Cancel</Button>
                <Button type="primary" className='bg-main'>Save</Button>
            </div>
        </div>
    )
}

export default ShowcasePage