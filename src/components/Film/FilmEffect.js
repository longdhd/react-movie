import React from "react";
import "./FilmEffect.css";

export default function FilmEffect(props) {
  const { moTa, phim } = props;
  return (
    <div className="p-4">
      <div className="h-full bg-transparent rounded-lg overflow-hidden text-center relative">
        <div
          style={{
            background: `url(${phim.hinhAnh}), url(https://picsum.photos/420/200?random=${phim.maPhim})`,
            backgroundPosition: "center",
            backgroundSize: "100%",
            height: "360px",
            position: "relative",
            backgroundRepeat: "none"
          }} className="rounded"
        >
          <img className="opacity-0" src={phim.hinhAnh} alt={phim.biDanh}></img>
        </div>
        <div className="flip-card text-left w-full">
          <div className="flip-card-inner">
            <div className="flip-card-front pt-2">
              <a>
                <p className="capitalize truncate font-bold text-lg">
                  {phim.tenPhim}
                </p>
              </a>
            </div>
            <div className="flip-card-back pt-1 items-center">
              <a>
                <p className="pt-2 font-semibold text-lg rounded-md" style={{height:'40px'}}>ĐẶT VÉ</p>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 px-2 rounded absolute flex top-10 left-2/3 bg-opacity-75">
          <span className="text-white font-semibold text-lg">
            {phim.danhGia}/10
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-1 ml-1"
            style={{ color: "#FB923C" }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
