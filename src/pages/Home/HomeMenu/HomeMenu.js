import React from "react";
import { Tabs } from "antd";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import moment from "moment";

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
                      <p style={{color:'#20f5ba'}} className="font-semibold">[chi tiết]</p>
                    </div>
                  }
                  key={index}
                >
                  <Tabs tabPosition={tabPosition}>
                    {/* Render rạp */}
                    {cumRap.danhSachPhim.splice(0, 4).map((phim,index) => {
                      return(
                        <TabPane tab={
                          <div className="container border-b-2 border-gray-200 border-opacity-50 pb-3" >
                            <div className="row">
                              <div className="col-3">
                                <img src={phim.hinhAnh} style={{color:'#fff',width: 100}} onError={(e)=>{e.target.onerror = null; e.target.src=`https://picsum.photos/100/150?random=${phim.maPhim}`}} alt={phim.tenPhim}></img>
                              </div>
                              <div className="col-9 text-left">
                                <div className="flex">
                                  <h3 className="font-bold uppercase" style={{color:'#1fd1e4'}}>{phim.tenPhim}</h3>
                                  <span className={`text-white px-2 ml-3 font-bold ${phim.hot ? "opacity-0" : "opacity-100"}`}
                                  style={{background:'linear-gradient(314deg, #ef5734 0%, #ffcc2f 74%)'}}>HOT</span>
                                </div>
                                <div className="grid grid-cols-5">
                                  {phim.lstLichChieuTheoPhim?.splice(0,10).map((lichChieu,index) => {
                                    return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} style={{background:'#26c6da'}} className="mr-5 mt-4 pr-4 pl-2 text-lg text-white fond-bold rounded" key={index}>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm')}</NavLink>
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        } key={index}></TabPane>
                      )
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

  return(
    <>
      <Tabs tabPosition={tabPosition}>
        {/* <TabPane tab={<img className="rounded" style={{height:'50px'}} src="https://tenpack.com.vn/wp-content/uploads/2016/02/BHD-cineplex-logo.png"></img>} key="1">
            <Tabs tabPosition={tabPosition} className="text-white">
                <TabPane tab={<p>BHD Star - Bitexco</p>} key="4"></TabPane>
                <TabPane tab={<p>BHD Star - Vincom Thảo Điền</p>} key="5"></TabPane>
                <TabPane tab={<p>BHD Star - Vincom 3/2</p>} key="6"></TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab={<img className="rounded" style={{height:'50px'}} src="https://cinestar.com.vn/pictures/400x400.png"></img>} key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab={<img className="rounded" style={{height:'50px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/2048px-Lotte_%22Value_Line%22_logo.svg.png"></img>} key="3">
            Content of Tab 3
          </TabPane> */}
        {renderLichChieu()}
      </Tabs>
    </>
  );
}
