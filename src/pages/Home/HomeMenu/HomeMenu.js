import React, { Fragment } from "react";
import { Tabs } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import styleMenu from "./HomeMenu.module.css";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

export default function HomeMenu(props) {
  const [state, setState] = useState({
    tabPosition: "left",
  });

  const { tabPosition } = state;

  const renderLichChieu = () => {
    return props.heThongRapChieu.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <img
              className="rounded"
              style={{ height: "50px" }}
              src={heThongRap.logo}
              id={heThongRap.maHeThongRap}
            ></img>
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {/* Render cụm rạp */}
            {heThongRap.lstCumRap.splice(0, 5).map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="text-left border-b-2 border-gray-200 border-opacity-50 pb-3">
                      <p style={{ color: "#00baff" }} className="font-semibold">
                        {cumRap.tenCumRap}
                      </p>
                      <p
                        className="truncate text-white"
                        style={{ width: "250px" }}
                      >
                        {cumRap.diaChi}
                      </p>
                      <p style={{ color: "#20f5ba" }} className="font-semibold">
                        [chi tiết]
                      </p>
                    </div>
                  }
                  key={index}
                >
                  <Tabs tabPosition={tabPosition}>
                    {/* Render rạp */}
                    {cumRap.danhSachPhim.splice(0, 4).map((phim, index) => {
                      return (
                        <TabPane
                          tab={
                            <div
                              className={`container border-b-2 border-gray-200 border-opacity-50 pb-3 ${styleMenu["showtimeTab"]}`}
                            >
                              <div className="row">
                                <div className="col-lg-3 sm:hidden lg:block pb-3">
                                  <img
                                    src={phim.hinhAnh}
                                    style={{ color: "#fff", width: 100 }}
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = `https://picsum.photos/100/150?random=${phim.maPhim}`;
                                    }}
                                    alt={phim.tenPhim}
                                  ></img>
                                </div>
                                <div className="col-lg-9 col-md-12 text-left">
                                  <div className="flex justify-center">
                                    <h3
                                      className="font-bold uppercase"
                                      style={{ color: "#1fd1e4" }}
                                    >
                                      {phim.tenPhim}
                                    </h3>
                                    <span
                                      className={`text-white px-2 ml-3 font-bold ${
                                        phim.hot ? "opacity-0" : "opacity-100"
                                      }`}
                                      style={{
                                        background:
                                          "linear-gradient(314deg, #ef5734 0%, #ffcc2f 74%)",
                                      }}
                                    >
                                      HOT
                                    </span>
                                  </div>
                                  <div className="grid lg:grid-cols-4 grid-cols-2 text-left">
                                    {phim.lstLichChieuTheoPhim
                                      ?.splice(0, 8)
                                      .map((lichChieu, index) => {
                                        return (
                                          <NavLink
                                            to={`/checkout/${lichChieu.maLichChieu}`}
                                            // style={{ background: "#26c6da"}}
                                            className={`lg:mr-5 lg:mt-4 md:mx-auto mx-auto md:mt-3 mt-3 lg:pr-4 lg:pl-2 px-2 text-lg text-white fond-bold rounded ${styleMenu['hover-button']}`}
                                            key={index}
                                          >
                                            {moment(
                                              lichChieu.ngayChieuGioChieu
                                            ).format("hh:mm")}
                                          </NavLink>
                                        );
                                      })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          }
                          key={index}
                        ></TabPane>
                      );
                    })}
                  </Tabs>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  let ipad = window.matchMedia("(max-width: 760px)");
  let laptop = window.matchMedia("(max-width: 1280px)");
  if (ipad.matches && laptop.matches) {
    return (
      <Fragment>
        <div className="text-white text-3xl text-center px-5 mb-2">
          <AndroidOutlined /> <AppleOutlined />
        </div>
        <p className="text-white text-lg text-center px-5 mb-5">
          Vui lòng tải cinemaApp <a style={{color:'rgba(224,224,255,0.6)'}} href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197">tại đây</a> hoặc truy cập bằng laptop/iPad để đạt trải nghiệm
          tốt nhất
        </p>
      </Fragment>
    );
  } else {
    return (
      <>
        <Tabs tabPosition={tabPosition}>
          {renderLichChieu()}
        </Tabs>
      </>
    );
  }
}
