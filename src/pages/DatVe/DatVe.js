import { Fragment, useEffect } from "react";
import style from "./DatVe.module.css";
import "./DatVe.css";
import { useSelector, useDispatch } from "react-redux";
import {
  datGheAction,
  datVeAction,
  layDanhSachPhongVeAction,
} from "../../Redux/action/QuanLyDatVeAction";
import { CloseOutlined, RollbackOutlined, UserOutlined } from "@ant-design/icons";
import { CHUYEN_TAB, DAT_GHE, DAT_VE } from "../../Redux/types/QuanLyDatVeType";
import { DanhSachVe } from "../../_core/models/DanhSachVe";
import _ from "lodash";
import { Tabs } from "antd";
import { layThongTinTaiKhoanAction } from "../../Redux/action/QuanLyNguoiDungAction";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { connection } from "../..";

function ChonGhe(props) {
  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDangDat } =
    useSelector((state) => state.QuanLyDatVeReducer);

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachPhongVeAction(props.match.params.id);
    dispatch(action);

    //Load lại phòng vé nếu có 1 client đặt vé thành công
    connection.on("datVeThanhCong", () => {
      dispatch(action);
    });

    //Cái đặt mặc định load ds ghế tất cả client khi vừa vào trang
    connection.invoke("loadDanhSachGhe", props.match.params.id);

    //Load danh sách ghế người khác đang đặt từ server
    connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
      console.log("danhSachGheKhachDangDat", dsGheKhachDat);
      //Bước 1: Loại mình ra khỏi danh sách
      dsGheKhachDat = dsGheKhachDat.filter(
        (item) => item.taiKhoan !== userLogin.taiKhoan
      );

      //Bước 2: Gộp tất cả ds ghê đặt ở tất cả client thành 1 mảng chung

      let arrGheKhachDat = dsGheKhachDat.reduce((result, item, index) => {
        let arrGhe = JSON.parse(item.danhSachGhe);
        return [...result, ...arrGhe];
      }, []);

      //Đưa dữ liệu khách đặt cập nhật redux
      arrGheKhachDat = _.uniqBy(arrGheKhachDat, "maGhe");

      dispatch({
        type: DAT_GHE,
        arrGheKhachDat,
      });
    });

    //Cài đặt sự kiện khi reload trang
    window.addEventListener("beforeunload", clearGhe);

    return () => {
      clearGhe();
      window.removeEventListener("beforeunload", clearGhe);
    };
  }, []);

  const clearGhe = function (event) {
    connection.invoke("huyDat", userLogin.taiKhoan, props.match.params.id);
  };

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
      let classGheKhachDangDat = "";
      let indexGheKhachDangDat = danhSachGheKhachDangDat.findIndex(
        (gheKhach) => gheKhach.maGhe === ghe.maGhe
      );
      if (indexGheKhachDangDat != -1) {
        classGheKhachDangDat = "gheKhachDangDat";
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
            disabled={ghe.daDat || classGheKhachDangDat != ""}
            onClick={() => {
              dispatch(datGheAction(ghe, props.match.params.id));
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
  
  <div className="min-h-screen" style={{color:'#fff'}}>
      <div className="grid grid-cols-12">
        <div className="lg:col-span-9 md:col-span-12">
          <div className="flex flex-col items-center">
            <div className="text-black-800 font-bold text-2xl mb-1 uppercase">
              Màn hình
            </div>
            <div
              className="bg-black"
              style={{ width: "80%", height: "12px" }}
            ></div>
            <div className={`${style["trapezoid"]}`}></div>
          </div>
          <div className="py-5">{renderGhe()}</div>
          <div className="mt-5 flex justify-center">
            <table className="table w-2/3 lg:text-sm text-xs text-center">
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
                    <button className="ghe"></button>
                  </td>
                  <td>
                    <button className="gheDaDat">
                      <CloseOutlined
                        style={{ color: "white", fontSize: "1.2rem" }}
                      />
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheVip"></button>
                  </td>
                  <td>
                    <button className="gheDangDat ml-1"></button>
                  </td>
                  <td>
                    <button className="ghe gheDatThanhCong ml-1">
                      <UserOutlined
                        style={{ color: "white", fontSize: "1.2rem" }}
                      />
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheKhachDangDat ml-2"></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-12 lg:border-l-2 md:border-t-2 border-opacity-25 pl-3">
          <h3 className="text-center text-2xl lg:block md:hidden my-3" style={{color:'rgb(32, 245, 186)'}}>
            {danhSachGheDangDat
              .reduce((tongTien, ghe, index) => {
                return (tongTien += ghe.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            VND
          </h3>
          <hr></hr>
          <h3 className="text-xl font-semibold capitalize text-white my-3">{thongTinPhim.tenPhim}</h3>
          <p className="text-left"><span className="font-semibold text-white">Địa điểm:</span> {thongTinPhim.diaChi}</p>
          <p className="text-left my-3 border-b-2 border-opacity-25 pb-3">
          <span className="font-semibold text-white">Suất chiếu: </span> {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
          </p>
          <hr></hr>
          <div className="border-b-2 border-opacity-25 pb-3">
            <div className="text-xl">
              <span className="text-left font-semibold" style={{color:'rgb(0, 186, 255)'}}>Ghế đang chọn: </span>
              {_.sortBy(danhSachGheDangDat, ["stt"]).map(
                (gheDangDat, index) => {
                  if(index === danhSachGheDangDat.length-1){
                    return (
                      <Fragment key={index}>
                      <span style={{ color: "rgb(31, 209, 228)" }} key={index}>
                        {" "}
                        {gheDangDat.stt}
                      </span>
                    </Fragment>
                    )
                  }
                  return (
                    <Fragment key={index}>
                      <span style={{ color: "rgb(31, 209, 228)" }} key={index}>
                        {" "}
                        {gheDangDat.stt},
                      </span>
                    </Fragment>
                  );
                }
              )}
            </div>
            <div className="text-left pr-5 mt-3 text-xl">
              <span className="text-green-400 font-semibold">Thành tiền:</span>
              <span className="text-green-400 ml-2">
              {danhSachGheDangDat
                  .reduce((tongTien, ghe, index) => {
                    return  (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}
              </span>
            </div>
          </div>
          <hr></hr>
          <div className="my-3 lg:block md:hidden">
            <span>Email:</span>
            <br />
            <i>{userLogin.email}</i>
          </div>
          <div className="my-3 lg:block md:hidden">
            <span>Số điện thoại:</span>
            <br />
            <i>{userLogin.soDT}</i>
          </div>
          <div className="mb-0 lg:h-1/3 md:h-1/4 flex flex-col justify-end">
            <div
              onClick={() => {
                const danhSachVe = new DanhSachVe();
                danhSachVe.maLichChieu = props.match.params.id;
                danhSachVe.danhSachVe = danhSachGheDangDat;
                dispatch(datVeAction(danhSachVe));
              }}
              className="text-white w-11/12 text-lg text-center py-2 font-bold cursor-pointer"
              style={{background:'linear-gradient(135deg,rgba(0,255,170,1.0) 0%,rgba(0,187,255,1.0) 53%,rgba(69,121,245,1.0) 100%)'}}
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
  const { userInfo } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layThongTinTaiKhoanAction());
  }, []);
  console.log(userInfo);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-green-400 tracking-widest">
            LỊCH SỬ ĐẶT VÉ
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            Cám ơn Quý khách đã tin tưởng CINEMA. Vui lòng kiểm tra thông tin vé
            đã đặt bên dưới.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {userInfo.thongTinDatVe?.map((ve, index) => {
            const ghe = _.head(ve.danhSachGhe);
            return (
              <div className="p-4 lg:w-1/2" key={index}>
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
                    <h3 className="font-semibold mb-3 text-white">
                      Giờ chiếu: {moment(ve.ngayDat).format("hh:mm A")} - Ngày
                      chiếu: {moment(ve.ngayDat).format("DD-MM-YYYY")}
                    </h3>
                    <p className="mb-4 text-white">
                      Địa điểm: {ghe.tenHeThongRap} - {ghe.tenRap}
                    </p>
                    <p className="mb-4 text-white">
                      Ghế:{" "}
                      {_.sortBy(ve.danhSachGhe, ["tenGhe"]).map(
                        (ghe, index) => {
                          return <span key={index}> {ghe.tenGhe}</span>;
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
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
  const { activeTab, chiTietPhongVe } = useSelector((state) => state.QuanLyDatVeReducer);
  const { thongTinPhim } = chiTietPhongVe;
  const operations = <NavLink
  className="p-2 text-white pr-5 text-lg relative"
  to="/"
>
  Trang chủ <RollbackOutlined style={{fontSize:'1.2rem',position:'absolute',bottom:9}}/>
</NavLink>;
  console.log("activeTab", activeTab);
  return (
    <div className="pl-">
      <div className="checkoutBackground" style={{backgroundImage:`url(${thongTinPhim.hinhAnh})`,backgroundSize:'cover',backgroundPosition:'center'}}></div>
      <div className="checkoutTab relative">
      <Tabs
        tabBarExtraContent={operations}
        defaultActiveKey="1"
        // activeKey={activeTab}
        onChange={callback}
        className="text-white font-semibold"
      >
        <TabPane tab="01 - CHỌN GHẾ & THANH TOÁN" key="1">
          <ChonGhe {...props} />
        </TabPane>
        <TabPane tab="02 - KẾT QUẢ ĐẶT VÉ" key="2">
          <KetQua {...props} />
        </TabPane>
      </Tabs>
      </div>
      <div className="checkoutBlur"></div>
    </div>
  );
}
