import { Link, NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex relative h-screen w-100 justify-center items-center">
      <div>
        <h1
          style={{
            fontSize: "8rem",
            textAlign: "center",
            background:"linear-gradient(90deg,rgba(0,255,170,1.0) 0%,rgba(0,187,255,1.0) 53%,rgba(69,121,245,1.0) 100%)",
            WebkitTextFillColor:'transparent',
            WebkitBackgroundClip:'text'
          }}
        >
          404
        </h1>
        <h1
          style={{
            fontSize: "2.4rem",
          }}
        >
          Không tìm thấy trang yêu cầu.
        </h1>
        <NavLink to="/">
          <div
            style={{
              fontSize: "1.6rem",
              textAlign: "center",
            }}
          >
            Trở về Trang chủ
          </div>
        </NavLink>
      </div>
    </div>
  );
}
