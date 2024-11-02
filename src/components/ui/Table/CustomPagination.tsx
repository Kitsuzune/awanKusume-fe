import { Col, Pagination, Select, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { ArrowDownOutlined } from '@ant-design/icons';

type Props = {
  data: any[];
  pagination: {
    page: number;
    perPage: number;
    totalData: number;
  };
  changeLimit: (limit: number) => void;
  changePage: (page: number, pageSize: number) => void;
};
export function CustomPagination(props: Props) {
  return (
    <Col span={24} className="flex items-center justify-between mt-3">
      <div style={{ gap: 8, alignItems: 'center' }} className='hidden md:flex'>
        <Typography.Text className="text-3 text-gray">
          Showing{' '}
          {props.pagination.page === 1
            ? 1
            : (props.pagination.page - 1) * props.pagination.perPage}{' '}
          to {props.pagination.perPage * props.pagination.page} from{' '}
          {props.pagination.totalData} results
        </Typography.Text>
      </div>
      <CPagination
        current={props.pagination.page}
        pageSize={props.pagination.perPage}
        onChange={props.changePage}
        total={props.pagination.totalData}
      />
    </Col>
  );
}

const CPagination = styled(Pagination)`
  .ant-pagination-options {
    display: none;
  }
`;