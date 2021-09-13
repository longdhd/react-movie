import React from "react";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import HomeMenu from "./HomeMenu/HomeMenu";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { QuanLyPhimReducer } from "../../Redux/reducers/QuanLyPhimReducer";
import _ from 'lodash';

const { Meta } = Card;

export default function Home() {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);

  const renderFilm = () => {
    return arrFilm.map((item, index) => {
      var moTa = _.replace(_.replace(item.moTa,"<p>",""),"</p>","");
      return (
        <Card
          className="col-span-1"
          hoverable
          style={{ width: 215 }}
          key={index}
          cover={
            <img
              alt={item.biDanh}
              src={item.hinhAnh}
            />
          }
        >
          <Meta title={item.tenPhim} description={moTa} className="text-center"/>
        </Card>
      );
    });
  };

  return (
    <div>
      <HomeCarousel />
      <div className="container my-10">
        <div className="grid grid-cols-4">
          {renderFilm()}
        </div>
      </div>
      <div style={{ backgroundColor: "#1E2129" }}>
        <div className="container mx-36 py-10">
          <HomeMenu />
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://akthemes.com/video/images/slider/banner-3.png)",
          height: "400px",
          backgroundPosition: "50% -500%",
        }}
        className="bg-cover bg-fixed"
      ></div>
    </div>
  );
}
