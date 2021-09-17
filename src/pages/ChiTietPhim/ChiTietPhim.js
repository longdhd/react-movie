import React, { useEffect } from "react";
import "./ChiTietPhim.css";
import "../../assets/styles/circle-percentage/circle.css"
import { useSelector, useDispatch } from "react-redux";
import {layThongTinLichChieuPhim} from "../../Redux/action/QuanLyRapAction";

export default function ChiTietPhim(props) {

  const filmDetail = useSelector(state => state.QuanLyRapReducer.filmDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    let {id} = props.match.params;
    dispatch(layThongTinLichChieuPhim(id));
  }, [])

  return (
    <div className="mt-0">
      <div style={{backgroundImage:`url(${filmDetail.hinhAnh})`, width:'100%',height:'700px',backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',filter:'blur(10px)',position:'relative'}}></div>
      <div className="styleBlur"></div>
      <div className="movieDetail text-white font-semibold">
        <div class="row">
          <div class="col-4 moviePoster text-right">
            <a
              href="https://www.youtube.com/watch?v=zAGVQLHvwOY"
              target="_blank"
            >
              <img
                className="w-5/6"
                src={filmDetail.hinhAnh}
                alt="joker-poster"
              ></img>
              <svg
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
              </svg>
            </a>
          </div>
          <div class="col-4 movieInfo text-left py-32">
            <div className="mb-3">
              <span>23.12.2020</span>
            </div>
            <div className="text-3xl mb-3">
              <span className="ageRating">P</span>
              <span className="ml-2">Joker (2019)</span>
            </div>
            <div>122 phút - 8.4 IMDb - 2D/Digital</div>
          </div>
          <div className="col-2 pt-16 ml-32">
            <div className="c100 p64 orange ml-3">
              <span>6.4</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 star"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 star"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 star"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="text-sm">197 người đánh giá</div>
          </div>
        </div>
      </div>
      <div className="darkBackground"></div>
      <div className="content text-white" id="contentNav">
        <ul className="nav nav-pills font-bold text-xl border-b">
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
              <div className="col-6 left">
                <div className="leftInfo pb-10">
                  <p class="contentTitle float-left font-semibold">
                    Ngày công chiếu
                  </p>
                  <p class="contentInfo float-left">23.12.2020</p>
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
              <div className="col-6 right text-left">
                <p className="font-semibold mb-3">Nội dung</p>
                <p className="text-sm">
                  Chàng trai Arthur Fleck với ước mơ trở thành nghệ sĩ hài độc
                  thoại số 1, anh sống cùng với người mẹ già yếu của mình trong
                  một căn chung cư xập xệ và phải kiếm sống qua ngày bằng việc
                  đóng vai các chú hề. Tuy nhiên, anh vốn mắc các chứng bệnh
                  liên quan đến thần kinh, cuộc sống trớ trêu khiến anh gặp toàn
                  những điều xui xẻo và Arthur dần mất đi niềm tin vào mọi người
                  xung quanh. Vì vậy Arthur đã lột xác và trở nên điên loạn, gia
                  nhập vào thế giới tội phạm và trở thành hoàng tử tội phạm của
                  Gotham - Joker.
                </p>
              </div>
            </div>
          </div>
          <div className="tab-pane container fade mt-14" id="showtime">
            <div className="row">
              {/* Nav pills */}
              <ul className="nav nav-pills col-2 border-lightGray pr-0 px-3 flex-column">
                <li className="nav-item border-b">
                  <a
                    className="nav-link bg-transparent active"
                    data-toggle="pill"
                    href="#bhd"
                  >
                    <img
                      className="w-1/2 m-4"
                      src="https://www.bhdstar.vn/wp-content/uploads/2019/06/BHDStar_Logo_Tron.png"
                    ></img>
                  </a>
                </li>
                <li className="nav-item border-b pb-3">
                  <a
                    className="nav-link bg-transparent"
                    data-toggle="pill"
                    href="#cgv"
                  >
                    <img
                      className="w-1/2 m-4"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CGV_logo.svg/1280px-CGV_logo.svg.png"
                    ></img>
                  </a>
                </li>
                <li className="nav-item border-b pb-3">
                  <a
                    className="nav-link bg-transparent"
                    data-toggle="pill"
                    href="#galaxy"
                  >
                    <img
                      className="w-1/2 m-4"
                      src="https://www.galaxycine.vn/website/images/galaxy-logo-mobile.png"
                    ></img>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link bg-transparent"
                    data-toggle="pill"
                    href="#lotte"
                  >
                    <img
                      className="w-1/2 m-4"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/2048px-Lotte_%22Value_Line%22_logo.svg.png"
                    ></img>
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content col-10 border-lightGray border-l-0">
                <div className="tab-pane container active" id="bhd">
                  <div>
                    {/* Nav pills */}
                    <ul className="nav nav-pills px-5 py-1 border-b">
                      <li className="nav-item ml-2">
                        <a
                          className="nav-link bg-transparent showtmeNavLink active"
                          data-toggle="pill"
                          href="#sun"
                        >
                          05.09 <br></br> SUN
                        </a>
                      </li>
                      <li className="nav-item ml-2">
                        <a
                          className="nav-link showtmeNavLink bg-transparent"
                          data-toggle="pill"
                          href="#mon"
                        >
                          06.09 <br></br> MON
                        </a>
                      </li>
                      <li className="nav-item ml-2">
                        <a
                          className="nav-link showtmeNavLink bg-transparent"
                          data-toggle="pill"
                          href="#tue"
                        >
                          07.09 <br></br> TUE
                        </a>
                      </li>
                      <li className="nav-item ml-2">
                        <a
                          className="nav-link showtmeNavLink bg-transparent"
                          data-toggle="pill"
                          href="#wed"
                        >
                          08.09 <br></br> WED
                        </a>
                      </li>
                      <li className="nav-item ml-2">
                        <a
                          className="nav-link showtmeNavLink bg-transparent"
                          data-toggle="pill"
                          href="#thu"
                        >
                          08.09 <br></br> THU
                        </a>
                      </li>
                      <li className="nav-item ml-2">
                        <a
                          className="nav-link showtmeNavLink bg-transparent"
                          data-toggle="pill"
                          href="#fri"
                        >
                          09.09 <br></br> FRI
                        </a>
                      </li>
                      <li className="nav-item  ml-2">
                        <a
                          className="nav-link showtmeNavLink bg-transparent"
                          data-toggle="pill"
                          href="#sat"
                        >
                          10.09 <br></br> SAT
                        </a>
                      </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div className="tab-pane container active" id="sun">
                        <div className="venue py-3 row">
                          <div className="venueImg col-2">
                            <img
                              src="https://rapchieuphim.com/photos/3/rap-bhd-star-3-2.jpg"
                              style={{ height: "75px" }}
                            ></img>
                          </div>
                          <div className="venueInfo col-6 text-left">
                            <p
                              className="text-lg font-semibold"
                              style={{ color: "#FFB319" }}
                            >
                              BHD Star Cineplex 3/2
                            </p>
                            <p className="text-sm mt-2">
                              Tầng 5, Vincom Plaza, 3C Đường 3 Tháng 2, P.11,
                              Quận 10, TPHCM.
                            </p>
                          </div>
                        </div>
                        <div className="row h-32 px-0 border-b">
                          <div className="col-4 text-left flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 inline-block mr-2"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="inline-block">VIEWING TIME</span>
                          </div>
                          <div className="col-8 flex items-center">
                            <button className="btn-viewingTime">10:00</button>
                            <button className="btn-viewingTime">15:30</button>
                            <button className="btn-viewingTime">22:00</button>
                            <button className="btn-viewingTime">22:30</button>
                            <button className="btn-viewingTime">23:05</button>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane container fade" id="mon">
                        ...
                      </div>
                      <div className="tab-pane container fade" id="tue">
                        ...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane container fade" id="cgv">
                  ...
                </div>
                <div className="tab-pane container fade" id="galaxy">
                  ...
                </div>
                <div className="tab-pane container fade" id="lotte">
                  ...
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane container px-52 fade" id="review">
            <div className="row ">
              <div className="col-12 mt-14 flex flex-row rounded-md reviewInput">
                <img
                  className="mt-2"
                  style={{ height: "30px" }}
                  src="data:image/png;base64,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"
                ></img>
                <div
                  className="form-group mt-1 ml-2"
                  style={{ width: "300px" }}
                >
                  <input
                    className="form-control border-0"
                    type="text"
                    placeholder="Bạn nghĩ gì về phim này?"
                  ></input>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mt-2.5 ml-3 opacity-50 star"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mt-2.5 opacity-50 star"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mt-2.5 opacity-50 star"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mt-2.5 opacity-50 star"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mt-2.5 opacity-50 star"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
