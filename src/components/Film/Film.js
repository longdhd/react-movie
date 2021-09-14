import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;


export default function Film(props) {
    const {moTa, phim} = props;
    return (
            <Card
              className="col-span-1"
              hoverable
              style={{ width: 215 }}
              cover={
                <img
                  alt={phim.biDanh}
                  src={phim.hinhAnh}
                />
              }
            >
              <Meta title={phim.tenPhim} description={moTa} className="text-center"/>
            </Card>
    )
}
