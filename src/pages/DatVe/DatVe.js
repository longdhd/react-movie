import React, { Fragment, useEffect } from "react";
import style from "./DatVe.module.css";
import "./DatVe.css";
import { useSelector, useDispatch } from "react-redux";
import {
  datVeAction,
  layDanhSachPhongVeAction,
} from "../../Redux/action/QuanLyDatVeAction";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import { CHUYEN_TAB, DAT_VE } from "../../Redux/types/QuanLyDatVeType";
import { DanhSachVe } from "../../_core/models/DanhSachVe";
import _ from "lodash";
import { Tabs } from "antd";
import { layThongTinTaiKhoanAction } from "../../Redux/action/QuanLyNguoiDungAction";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { connection } from "../..";

function ChonGhe(props) {
  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachPhongVeAction(props.match.params.id);
    dispatch(action);
    
    //Load danh sách ghế người khác đang đặt từ server
    connection.on("loadDanhSachGheDaDat",(dsGheKhachDat)=> {
      console.log('danhSachGheKhachDat',dsGheKhachDat);
    })
  }, []);

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  
  const renderGhe = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";
      let indexGheDangDat = danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === ghe.maGhe
      );
      let classGheDatThanhCong = "";
      //Kiểm tra ghế người khác đăng đặt
      let classGheKhachDangDat = '';
      let indexGheKhachDangDat = danhSachGheKhachDangDat.findIndex(gheKhach => gheKhach.maGhe === ghe.maGhe);
      if(indexGheKhachDangDat!=-1){
        classGheKhachDangDat = 'gheKhachDangDat';
      }
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDatThanhCong = "gheDatThanhCong";
      }
      if (indexGheDangDat != -1) {
        classGheDangDat = "gheDangDat";
      }
      return (
        <Fragment key={index}>
          <button
            disabled={ghe.daDat || classGheKhachDangDat!=''}
            onClick={() => {
              dispatch({
                type: DAT_VE,
                gheDuocChon: ghe,
              });
            }}
            className={`ghe ${classGheKhachDangDat} ${classGheDatThanhCong} ${classGheDangDat} ${classGheVip} ${classGheDaDat}`}
          >
            {ghe.daDat ? (
              classGheDatThanhCong != "" ? (
                <UserOutlined style={{ color: "white", fontSize: "1.2rem" }} />
              ) : (
                <CloseOutlined style={{ color: "white", fontSize: "1.2rem" }} />
              )
            ) : (
              ghe.tenGhe
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center">
            <div className="text-black-800 font-bold mb-1 uppercase">
              Màn hình
            </div>
            <div
              className="bg-black"
              style={{ width: "80%", height: "12px" }}
            ></div>
            <div className={`${style["trapezoid"]}`}></div>
          </div>
          <div className="pl-32 py-5">{renderGhe()}</div>
          <div className="mt-5 flex justify-center">
            <table className="table w-2/3">
              <thead>
                <tr>
                  <th>Ghế trống</th>
                  <th>Ghế đã đặt</th>
                  <th>Ghế VIP</th>
                  <th>Ghế đang chọn</th>
                  <th>Ghế đặt thành công</th>
                  <th>Ghế người khác đang chọn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button className="ghe ml-2"></button>
                  </td>
                  <td>
                    <button className="gheDaDat ml-3">
                      <CloseOutlined
                        style={{ color: "white", fontSize: "1.2rem" }}
                      />
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheVip"></button>
                  </td>
                  <td>
                    <button className="gheDangDat ml-4"></button>
                  </td>
                  <td>
                    <button className="ghe gheDatThanhCong ml-5">
                      <UserOutlined
                        style={{ color: "white", fontSize: "1.2rem" }}
                      />
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheKhachDangDat ml-5">
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-3 border-l-2 pl-3">
          <h3 className="text-center text-green-400 text-2xl my-3">
            {danhSachGheDangDat
              .reduce((tongTien, ghe, index) => {
                return (tongTien += ghe.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            VND
          </h3>
          <hr></hr>
          <h3 className="text-xl font-semibold my-3">{thongTinPhim.tenPhim}</h3>
          <p className="text-left">Địa điểm: {thongTinPhim.diaChi}</p>
          <p className="text-left my-3">
            Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
          </p>
          <hr></hr>
          <div className="grid grid-cols-2 my-3">
            <div className="text-red-400 text-xl">
              <span className="text-left">Ghế đang chọn: </span>
              {_.sortBy(danhSachGheDangDat, ["stt"]).map(
                (gheDangDat, index) => {
                  return (
                    <Fragment key={index}>
                      <span style={{ color: "#20f5ba" }} key={index}>
                        {" "}
                        {gheDangDat.stt}
                      </span>
                    </Fragment>
                  );
                }
              )}
            </div>
            <div className="col-span-1 text-right pr-5 text-xl">
              <span className="text-green-400 ">
                {danhSachGheDangDat
                  .reduce((tongTien, ghe, index) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}
              </span>
            </div>
          </div>
          <hr></hr>
          <div className="my-3">
            <span>Email:</span>
            <br />
            <i>{userLogin.email}</i>
          </div>
          <div className="my-3">
            <span>Số điện thoại:</span>
            <br />
            <i>{userLogin.soDT}</i>
          </div>
          <div className="mb-0 h-1/2 flex flex-col justify-end">
            <div
              onClick={() => {
                const danhSachVe = new DanhSachVe();
                danhSachVe.maLichChieu = props.match.params.id;
                danhSachVe.danhSachVe = danhSachGheDangDat;
                dispatch(datVeAction(danhSachVe));
              }}
              className="bg-green-500 text-white w-full text-lg text-center py-2 font-bold cursor-pointer"
            >
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KetQua(props) {
const {userInfo} = useSelector(state => state.QuanLyNguoiDungReducer);

const dispatch = useDispatch();
useEffect(() => {
    dispatch(layThongTinTaiKhoanAction());
}, [])
console.log(userInfo);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-end" style={{fontSize:'1rem'}}>
          <NavLink onClick={()=> {
              dispatch({type:CHUYEN_TAB});
          }} className="border-2 p-2 text-indigo-700 border-indigo-500 rounded" to="/">Trở về trang chủ</NavLink>
        </div>
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-green-400 tracking-widest">
            LỊCH SỬ ĐẶT VÉ
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Cám ơn Quý khách đã tin tưởng CINEMA. Vui lòng kiểm tra thông tin vé
            đã đặt bên dưới.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {userInfo.thongTinDatVe?.map((ve,index) => {
              const ghe = _.head(ve.danhSachGhe);
              return <div className="p-4 lg:w-1/2" key={index}>
              <div className="h-full flex sm:flex-row flex-col items-start sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={ve.hinhAnh}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg font-bold text-blue-500">
                    {ve.tenPhim}
                  </h2>
                  <h3 className="font-semibold mb-3">Giờ chiếu: {moment(ve.ngayDat).format('hh:mm A')} - Ngày chiếu: {moment(ve.ngayDat).format('DD-MM-YYYY')}</h3>
                  <p className="mb-4">
                    Địa điểm: {ghe.tenHeThongRap} - {ghe.tenRap}
                  </p>
                  <p className="mb-4">
                    Ghế: {_.sortBy(ve.danhSachGhe,['tenGhe']).map((ghe,index) =>{
                        return <span key={index}> {ghe.tenGhe}</span>
                    })}
                  </p>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  );
}

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function DatVe(props) {
  const {activeTab} = useSelector(state => state.QuanLyDatVeReducer);
  console.log('activeTab',activeTab);
  return (
    <div className="pl-5">
      <Tabs defaultActiveKey="1" 
      // activeKey={activeTab} 
      onChange={callback}>
        <TabPane tab="01 - CHỌN GHẾ & THANH TOÁN" key="1">
          <ChonGhe {...props} />
        </TabPane>
        <TabPane tab="02 - KẾT QUẢ ĐẶT VÉ" key="2">
          <KetQua {...props} />
        </TabPane>
      </Tabs>
    </div>
  );
}
