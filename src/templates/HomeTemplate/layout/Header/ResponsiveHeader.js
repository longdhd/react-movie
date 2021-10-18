import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { history } from "./../../../../App";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from "../../../../util/settings/config";

export default function ResponsiveHeader(props) {
  const [scroll, setScroll] = useState(false);
  const { Option } = Select;
  const { t, i18n } = useTranslation();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  //componentDidMount: Header thay đổi khi scroll
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 200)
      );
    }
  }, []);

  //Chuyển dổi ngôn ngữ
  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };

  //Tùy chỉnh header nếu client đã đăng nhập
  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            onClick={() => {
              history.push("/register");
            }}
            className={`self-center px-4 py-3 rounded ${
              scroll ? "text-black" : "lg:text-white"
            }`}
          >
            <span>{t("Sign up")}</span>
          </button>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className={`self-center px-4 py-3 font-semibold rounded bg-violet-600 text-coolGray-50 ${
              scroll ? "text-black" : "lg:text-white"
            }`}
          >
            {t("Sign in")}
          </button>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <button
          onClick={() => {
            history.push("/profile");
          }}
          className={`self-center px-8 py-3 rounded ${
            scroll ? "text-black" : "lg:text-white"
          }`}
        >
          {t("Hi")}, {userLogin.hoTen}
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push("/");
            window.location.reload();
          }}
          className={`self-center py-3 p-8 font-semibold rounded bg-violet-600 text-coolGray-50 ${
            scroll ? "text-black" : "lg:text-white"
          }`}
        >
          <span>{t("Sign out")}</span>
        </button>
      </Fragment>
    );
  };
  return (
    <nav
      className={`flex items-center justify-between flex-wrap bg-gray-100 lg:p-4 md:px-4 md:py-3 fixed w-full z-10 top-0 ${
        scroll ? "lg:bg-opacity-95 shadow-md" : "lg:bg-opacity-0"
      }`}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://seeklogo.com/images/C/cinema-logo-53411DFFE5-seeklogo.com.png"
            className="h-12"
            alt="logo"
          ></img>
        </NavLink>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => {
            document.getElementById("nav-content").classList.toggle("hidden");
          }}
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
        id="nav-content"
      >
        <ul
          className={`list-reset lg:flex justify-center flex-1 py-2 items-center ${
            scroll ? "text-lg" : "text-xl"
          }`}
        >
          <li className="mr-3 lg:mt-0 md:mt-3 mt-2">
            <NavLink
              to="/"
              className={`flex items-center px-4 -mb-1 border-b-2 border-transparent transition-all ${
                scroll ? "text-black" : "lg:text-white text-black"
              }`}
            >
              {t("Homepage")}
            </NavLink>
          </li>
          <li className="mr-3 lg:mt-0 md:mt-3 mt-2">
            <a
              href="#homeMenu"
              className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${
                scroll ? "text-black" : "lg:text-white text-black"
              }`}
            >
              {t("Showtimes")}
            </a>
          </li>
          <li className="mr-3 lg:mt-0 md:mt-3 mt-2">
            <a
              href="#homeMenu"
              className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${
                scroll ? "text-black" : "lg:text-white text-black"
              }`}
            >
              {t("Cinemas")}
            </a>
          </li>
          <li className="mr-3 lg:mt-0 md:mt-3 mt-2">
            <a
              href="https://vnexpress.net/giai-tri/phim"
              target = "_blank"
              className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${
                scroll ? "text-black" : "lg:text-white text-black"
              }`}
            >
              {t("News")}
            </a>
          </li>
          <li className="mr-3 lg:mt-0 md:mt-3 mt-2">
            <a
              href="#homeFooter"
              className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${
                scroll ? "text-black" : "lg:text-white text-black"
              }`}
            >
              {t("Contact")}
            </a>
          </li>
        </ul>
        <div className="items-center lg:flex">
            {renderLogin()}
            <>
              <Select
                defaultValue="vie"
                style={{ width: 150, fontSize: "1rem", marginLeft: 20 }}
                bordered={false}
                className={`${scroll ? "text-black" : "text-white"}`}
                onChange={handleChange}
              >
                <Option value="chn">🇨🇳 中文</Option>
                <Option value="eng">🇬🇧 English</Option>
                <Option value="vie">🇻🇳 Tiếng Việt</Option>
              </Select>
            </>
          </div>
      </div>
    </nav>
  );
}
