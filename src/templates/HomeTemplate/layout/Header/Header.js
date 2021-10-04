import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { history } from "./../../../../App";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from "../../../../util/settings/config";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
export default function Header(props) {
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
              scroll ? "text-black" : "text-white"
            }`}
          >
          <span>{t("Sign up")}</span>
          </button>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className={`self-center px-4 py-3 font-semibold rounded bg-violet-600 text-coolGray-50 ${
              scroll ? "text-black" : "text-white"
            }`}
          >
            {t("Sign in")}
            <span><LoginOutlined style ={{position:'absolute',bottom:30, marginLeft:5, fontSize:16}} /></span>
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
            scroll ? "text-black" : "text-white"
          }`}
        >
          {t("Hi")}, {userLogin.hoTen}
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push('/');
            window.location.reload();
          }}
          className={`self-center py-3 p-8 font-semibold rounded bg-violet-600 text-coolGray-50 ${
            scroll ? "text-black" : "text-white"
          }`}
        >
          <span>{t("Sign out")}</span>
          <span><LogoutOutlined style ={{position:'absolute',bottom:30, marginLeft:5, fontSize:16}} /></span>
        </button>
      </Fragment>
    );
  };
  return (
    <div>
      <header
        className={`px-4 py-2 text-white fixed w-full bg-gray-100 border-b z-10 ${
          scroll ? "bg-opacity-95 shadow-md" : "bg-opacity-0"
        }`}
      >
        <div className="container flex justify-around h-16 mx-auto">
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
          <ul
            className={`items-stretch hidden pt-3 space-x-3 ml-5 no-underline font-semibold lg:flex ${
              scroll ? "text-md" : "text-lg"
            }`}
          >
            <li className="flex">
              <NavLink
                to="/"
                className={`flex items-center px-4 -mb-1 border-b-2 border-transparent transition-all ${
                  scroll ? "text-black" : "text-white"
                }`}
              >
                {t("Homepage")}
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/"
                className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${
                  scroll ? "text-black" : "text-white"
                }`}
              >
                {t("Showtimes")}
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/"
                className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${
                  scroll ? "text-black" : "text-white"
                }`}
              >
                {t("Cinemas")}
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/news"
                className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${
                  scroll ? "text-black" : "text-white"
                }`}
              >
                {t("News")}
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/contact"
                className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${
                  scroll ? "text-black" : "text-white"
                }`}
              >
                {t("Contact")}
              </NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            {renderLogin()}
            <>
              <Select
                defaultValue="vie"
                style={{ width: 150, fontSize: "1rem", marginLeft:20}}
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
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-coolGray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
