import React from "react";
import "./FilmEffect.css";
import {history} from '../../App';
import { CaretRightOutlined, UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function FilmEffect(props) {
  const { phim } = props;
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <div className="h-full filmCard bg-transparent rounded-lg overflow-hidden text-center relative">
        <div
          style={{
            background: `url(${phim.hinhAnh}), url(https://picsum.photos/420/200?random=${phim.maPhim})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "360px",
            width:'100%',
            position: "relative",
            backgroundRepeat: "none",
          }}
          className="rounded"
        >
          <img className="opacity-0" src={phim.hinhAnh} alt={phim.biDanh}></img>
        </div>
        <div className="flip-card w-full">
          <div className="flip-card-inner">
            <div className="flip-card-front pt-4">
              <a>
                <span className="ageRating rounded-md">P</span>
                <p className="capitalize truncate text-left font-bold text-lg" style={{marginLeft:'35px'}}>
                  {phim.tenPhim}
                </p>
              </a>
            </div>
            <div className="flip-card-back pt-3 items-center">
              <div onClick={() => {
                // history.push(`/detail/${phim.maPhim}`)
                navigate(`/detail/${phim.maPhim}`);
              }} className="text-white">
                <p
                  className="pt-2 font-semibold text-lg rounded-md flex justify-center"
                  style={{ height: "40px" }}
                >
                  MUA VÉ <UploadOutlined style={{fontSize:'1.2rem',paddingTop:'4px',marginLeft:'12px'}}/>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 px-2 rounded absolute flex top-10 md:left-2/4 left-2/4 bg-opacity-75">
          <span className="text-white font-semibold md:text-lg">
            {phim.danhGia}/10
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:h-5 md:w-5 h-4 w-4 mt-1 ml-1"
            style={{ color: "#ffc107" }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div className="film__overlay rounded">
          <a href={phim.trailer} target="_blank" rel="noreferrer">
              <CaretRightOutlined style={{color:'#fff',fontSize:'3.2rem'}}/>
          </a>
        </div>
      </div>
    </div>
  );
}
