import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-600 font-nunitosans font-semibold position-relative" id="homeFooter">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src="https://seeklogo.com/images/C/cinema-logo-53411DFFE5-seeklogo.com.png" className="h-12" alt="logo" />
            <span className="ml-3 text-xl">react project</span>
          </a>
          <p className="mt-3 text-sm text-gray-500">
            Dự án ReactJS mô phỏng website đặt vé xem phim thực hiện bởi học viên Đặng Hoàng Duy Long - FrontEnd 66 - Cybersoft.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              HỆ THỐNG RẠP
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#homeMenu" className="text-gray-600 hover:text-gray-800">BHD</a>
              </li>
              <li>
                <a href="#homeMenu" className="text-gray-600 hover:text-gray-800">CGV</a>
              </li>
              <li>
                <a href="#homeMenu" className="text-gray-600 hover:text-gray-800">CINESTAR</a>
              </li>
              <li>
                <a href="#homeMenu" className="text-gray-600 hover:text-gray-800">GALAXY</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CINEMA
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="https://tix.vn/chinh-sach-bao-mat" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-800">Chính Sách Bảo Mật</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Tuyển Dụng</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Hợp Tác</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              HỖ TRỢ
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="https://tix.vn/faq" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-800">FAQ</a>
              </li>
              <li>
                <a href="mailto: support@tix.vn" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-800">24/7 Support</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:'rgba(32,32,54,1.0)'}}>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">
            © {new Date().getFullYear()} CINEMA react project —
            <a
              href="https://www.facebook.com/itsme.saigonese/"
              rel="noopener noreferrer"
              className="text-white ml-1"
              target="_blank" rel="noreferrer"
            >
              @Long Dang
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
