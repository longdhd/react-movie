import React from "react";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import HomeMenu from "./HomeMenu/HomeMenu";
import { Card } from "antd";

const { Meta } = Card;

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <div className="container my-10">
        <div className="grid grid-cols-4">
          <Card
            className="col-span-1"
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            className="col-span-1"
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            className="col-span-1"
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            className="col-span-1"
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-36 py-10">
            <HomeMenu />
        </div>
      </div>
      <div style={{backgroundImage:'url(https://akthemes.com/video/images/slider/banner-3.png)',height:'400px',backgroundPosition:'50% -500%'}}
      className="bg-cover bg-fixed">

      </div>
    </div>
  );
}
