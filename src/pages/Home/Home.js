import React, { useEffect } from "react";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useDispatch, useSelector } from "react-redux";
import MultipleRowSlick from "../../components/MultipleRowSlick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../Redux/action/QuanLyPhimAction";
import {layLichChieuAction} from '../../Redux/action/QuanLyRapAction';
import HomePromotion from "./HomePromotion/HomePromotion";



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
      <div style={{ background: "url(https://www.orionprotocol.io/hubfs/Orion_April2020/Images/f-bg.png)",backgroundSize:'cover', height:'980px' }}>
        <HomePromotion />
      </div>
      <MultipleRowSlick arrFilm={arrFilm} />
      <div style={{background:"rgba(32,32,54,1.0)",position:'relative'}}>
        <div style={{background:'url(https://cdn2.hubspot.net/hubfs/6976471/Orion_April2020/Images/features-top.png) no-repeat', backgroundSize:'cover' ,height:'224px',width:'100%',position:'absolute',top:'-22%'}}>
        </div>
      </div>
      <div style={{background:"rgba(32,32,54,1.0)",marginTop:'200px'}}> 
        <div className="container mx-36 py-24">
          <HomeMenu heThongRapChieu={heThongRapChieu} />
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://akthemes.com/video/images/slider/banner-3.png)",
          height: "450px",
          backgroundPosition: "50% -50%",
          backgroundRepeat:'no-repeat'
        }}
        className="bg-cover bg-fixed"
      ></div>
    </div>
  );
}
