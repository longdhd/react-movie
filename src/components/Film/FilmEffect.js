import React from "react";
import "./FilmEffect.css";

export default function FilmEffect(props) {
  const { phim } = props;
  return (
    <div className="p-4">
      <div className="h-full bg-transparent rounded-lg overflow-hidden text-center relative">
        <div
          style={{
            background: `url(${phim.hinhAnh}), url(https://picsum.photos/420/200?random=${phim.maPhim})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "360px",
            position: "relative",
            backgroundRepeat: "none",
          }}
          className="rounded"
        >
          <img className="opacity-0" src={phim.hinhAnh} alt={phim.biDanh}></img>
        </div>
        <div className="flip-card w-full">
          <div className="flip-card-inner">
            <div className="flip-card-front pt-2">
              <a>
                <span className="ageRating rounded-md">P</span>
                <p className="capitalize truncate text-left font-bold text-lg" style={{marginLeft:'35px'}}>
                  {phim.tenPhim}
                </p>
              </a>
            </div>
            <div className="flip-card-back pt-1 items-center">
              <a>
                <p
                  className="pt-2 font-semibold text-lg rounded-md"
                  style={{ height: "40px" }}
                >
                  ĐẶT VÉ
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 px-2 rounded absolute flex top-10 left-2/4 bg-opacity-75">
          <span className="text-white font-semibold text-lg">
            {phim.danhGia}/10
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-1 ml-1"
            style={{ color: "#ffc107" }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div className="film__overlay rounded">
          <a href={phim.trailer} target="_blank">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
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
      </div>
    </div>
  );
}
