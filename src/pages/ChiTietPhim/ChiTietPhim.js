import React, { useEffect, useState } from "react";
import "./ChiTietPhim.css";
import "../../assets/styles/circle-percentage/circle.css";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinLichChieuPhim } from "../../Redux/action/QuanLyRapAction";
import moment from "moment";
import _ from "lodash";
import { Rate, Tabs } from "antd";
import { NavLink, useParams } from "react-router-dom";

const { TabPane } = Tabs;

export default function ChiTietPhim(props) {
  const filmDetail = useSelector((state) => state.QuanLyRapReducer.filmDetail);

  const moTa = _.replace(_.replace(filmDetail.moTa, "<p>", ""), "</p>", "");

  const dispatch = useDispatch();

  const [state, setState] = useState({
    tabPosition: "left",
  });

  const { tabPosition } = state;

  const laySoNgauNhien = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  const { id } = useParams();

  useEffect(() => {
    // let { id } = props.match.params;
    dispatch(layThongTinLichChieuPhim(id));
  }, []);

  return (
    <div className="mt-0 detailPage" style={{color:'rgb(32, 32, 54)'}}>
      <div
        style={{
          backgroundImage: `url(${filmDetail.hinhAnh})`,
          width: "100%",
          height: "700px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(10px)",
          position: "relative",
        }}
      ></div>
      <div className="styleBlur"></div>
      <div className="movieDetail container text-white font-semibold">
        <div className="row">
          <div className="col-lg-4 col-md-5 moviePoster text-right">
            <a href={filmDetail.trailer} target="_blank" rel="noreferrer">
              <img
                className="w-5/6"
                src={filmDetail.hinhAnh} onError={(e)=>{e.target.onerror = null; e.target.src=`https://picsum.photos/200/300?random=${filmDetail.maPhim}`}}
                alt={filmDetail.tenPhim}
              ></img>
              <svgs
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 playIcon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svgs>
            </a>
          </div>
          <div className="col-lg-4 col-md-5 movieInfo text-left py-32">
            <div className="mb-3">
              <span>
                {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
              </span>
            </div>
            <div className="lg:text-3xl md:text-xl mb-3">
              <span className="ageRating">P</span>
              <span className="capitalize ml-2">{filmDetail.tenPhim}</span>
            </div>
            <div>122 phút - 8.4 IMDb - 2D/Digital</div>
          </div>
          <div className="movieRating col-lg-2 pt-16 ml-32 flex flex-column items-center">
            <div className={`c100 orange ml-2 p${filmDetail.danhGia * 10}`}>
              <span>{filmDetail.danhGia * 10}</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
            <div>
              <Rate disabled defaultValue={5} />
            </div>
            <div className="text-sm">
              {laySoNgauNhien(100, 1000)} người đánh giá
            </div>
          </div>
        </div>
      </div>
      <div className="darkBackground"></div>
      <div className="content text-white mt-36" id="contentNav">
        <ul className="nav navFilmDetail nav-pills font-bold text-xl">
          <li className="nav-item">
            <a
              className="nav-link contentNavLink active"
              data-toggle="pill"
              href="#info"
            >
              Thông Tin
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link contentNavLink"
              data-toggle="pill"
              href="#showtime"
            >
              Lịch Chiếu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link contentNavLink"
              data-toggle="pill"
              href="#review"
            >
              Đánh Giá
            </a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div className="tab-pane container active" id="info">
            <div className="row justify-content-around mt-14">
              <div className="col-lg-6 left">
                <div className="leftInfo pb-10">
                  <p class="contentTitle float-left font-semibold">
                    Ngày công chiếu
                  </p>
                  <p class="contentInfo float-left">
                    {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                  </p>
                </div>
                <div className="leftInfo pb-10">
                  <p class="contentTitle float-left font-semibold">Đạo diễn</p>
                  <p class="contentInfo float-left">Todd Phillips</p>
                </div>
                <div className="leftInfo pb-10">
                  <p class="contentTitle float-left font-semibold">Diễn viên</p>
                  <p class="contentInfo float-left">Joaquin Phoenix</p>
                </div>
                <div className="leftInfo pb-10">
                  <p class="contentTitle float-left font-semibold">Thể loại</p>
                  <p class="contentInfo float-left">Tâm Lý</p>
                </div>
                <div className="leftInfo pb-10">
                  <p class="contentTitle float-left font-semibold">Định dạng</p>
                  <p class="contentInfo float-left">2D/Digital</p>
                </div>
                <div className="leftInfo pb-10">
                  <p class="contentTitle float-left font-semibold">
                    Quốc gia SX
                  </p>
                  <p class="contentInfo float-left">Mỹ</p>
                </div>
              </div>
              <div className="col-lg-6 right text-left">
                <p className="font-semibold mb-3">Nội dung</p>
                <p className="text-sm lg:w-full md:w-1/2">{moTa}</p>
              </div>
            </div>
          </div>
          <div className="tab-pane fade mt-14" id="showtime">
            <Tabs tabPosition={tabPosition}>
              {filmDetail.heThongRapChieu?.map((heThongRap, index) => {
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
                      {heThongRap.cumRapChieu?.map((cumRap, index) => {
                        return (
                          <TabPane
                            tab={
                              <div className="border-b-2 border-opacity-50 pb-4">
                                <div className="text-left flex flex-row">
                                  <div>
                                    <img
                                      src={cumRap.hinhAnh}
                                      style={{ height: "50px" }}
                                    ></img>
                                  </div>
                                  <div className="ml-3">
                                    <p
                                      style={{ color: "rgb(38, 198, 218)" }}
                                      className="font-semibold"
                                    >
                                      {cumRap.tenCumRap}
                                    </p>
                                    <p
                                      className="truncate text-white"
                                      style={{ width: "250px" }}
                                    >
                                      {cumRap.diaChi}
                                    </p>
                                  </div>
                                </div>
                                <div className="grid lg:grid-cols-5 md:grid-cols-2">
                                  {cumRap.lichChieuPhim
                                    .splice(0, 10)
                                    .map((lichChieu, index) => {
                                      return (
                                        <NavLink
                                          style={{
                                            background:
                                              "rgb(38, 198, 218)",
                                          }}
                                          className="mr-5 mt-5 md:px-auto md:mx-auto px-2 text-lg text-white fond-bold rounded"
                                          to={`/checkout/${lichChieu.maLichChieu}`}
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
          </div>
          <div className="tab-pane container lg:px-0 fade" id="review">
            <div className="row ">
              <div className="col-lg-12 col-md-8 mt-14 flex flex-row rounded-md reviewTab">
                <img
                  className="mt-2"
                  style={{ height: "30px" }}
                  src="data:image/png;base64,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"
                ></img>
                <div
                  className="form-group mt-1 mx-3 reviewInput"
                >
                  <input
                    className="form-control border-0"
                    type="text"
                    placeholder="Bạn nghĩ gì về phim này?"
                  ></input>
                </div>
                <div className="pt-1">
                  <Rate allowHalf allowClear defaultValue={5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
