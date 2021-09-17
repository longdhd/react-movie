import React, { useEffect } from "react";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useDispatch, useSelector } from "react-redux";
import MultipleRowSlick from "../../components/MultipleRowSlick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../Redux/action/QuanLyPhimAction";
import {layLichChieuAction} from '../../Redux/action/QuanLyRapAction';



export default function Home() {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  // const renderFilm = () => {
  //   return arrFilm.map((item, index) => {
  //     var moTa = _.replace(_.replace(item.moTa,"<p>",""),"</p>","");
  //     return <Film key={index} moTa={moTa} phim={item}/>
  //   });
  // };

  useEffect(() => {
    dispatch(layDanhSachPhimAction);
    dispatch(layLichChieuAction);
    // console.log('heThongRapChieu',heThongRapChieu);
  }, [])

  return (
    <div>
      <HomeCarousel />
      <MultipleRowSlick arrFilm={arrFilm} />
      <div style={{ backgroundColor: "#1E2129" }}>
        <div className="container mx-36 py-10">
          <HomeMenu heThongRapChieu={heThongRapChieu} />
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://akthemes.com/video/images/slider/banner-3.png)",
          height: "400px",
          backgroundPosition: "50% -500%",
        }}
        className="bg-cover mt-5 bg-fixed"
      ></div>
    </div>
  );
}
