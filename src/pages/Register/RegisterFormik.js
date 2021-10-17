import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { dangKyAction } from "../../Redux/action/QuanLyNguoiDungAction";
import { GROUPID } from "../../util/settings/config";
import * as Yup from "yup";

export default function RegisterFormik() {
  const dispatch = useDispatch();

  const validation = Yup.object({
    taiKhoan: Yup.string()
      .max(12, "Tài khoản không quá 12 ký tự!")
      .required("Tài khoản không được bỏ trống!"),
    matKhau: Yup.string()
      .min(6, "Mật khẩu ít nhất 6 ký tự!")
      .required("Mật khẩu không được bỏ trống!"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email không được bỏ trống!"),
    soDt: Yup.string()
      .max(12, "Số điện thoại không quá 12 ký tự!")
      .required("Số điện thoại không được bỏ trống!"),
    hoTen: Yup.string()
      .max(30, "Họ tên không quá 30 ký tự")
      .required("Họ tên không được bỏ trống!"),
  });

  return (
    <Formik
      initialValues={{
        taiKhoan: "",

        matKhau: "",

        email: "",

        soDt: "",

        maNhom: GROUPID,

        hoTen: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        let agreeCheckbox = document.querySelector('#agree');
        if(agreeCheckbox.checked){
            const action = dangKyAction(values);
            dispatch(action);
        }else{
            alert('Vui lòng đọc điều khoản và tick đồng ý!');
        }
      }}
      validationSchema={validation}
    >
      {(propsFormik) => (
        <form
          onSubmit={propsFormik.handleSubmit}
          className="lg:w-1/2 xl:max-w-screen-sm"
        >
          <div className="py-8 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
            <div className="cursor-pointer flex items-center">
              <div className="ml-12">
                <a href="/">
                <img
                  src="https://seeklogo.com/images/C/cinema-logo-53411DFFE5-seeklogo.com.png"
                  className="h-12"
                  alt="logo"
                ></img>
                </a>
              </div>
              <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
                react project
              </div>
            </div>
          </div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2
              className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
        xl:text-bold"
            >
              Sign up
            </h2>
            <div className="mt-12">
              <div>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Tài khoản
                  </div>
                  <Field
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    name="taiKhoan"
                    onChange={propsFormik.handleChange}
                    placeholder="anguyen789"
                  />
                  <ErrorMessage name = "taiKhoan" render={msg => <div className="text-red-400">{msg}</div>}/>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Mật khẩu
                    </div>
                  </div>
                  <Field
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="password"
                    name="matKhau"
                    onChange={propsFormik.handleChange}
                    placeholder="Nhập mật khẩu"
                  />
                  <ErrorMessage name = "matKhau" render={msg => <div className="text-red-400">{msg}</div>}/>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Họ tên:
                    </div>
                  </div>
                  <Field
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    name="hoTen"
                    onChange={propsFormik.handleChange}
                    placeholder="Nguyễn Văn A"
                  />
                  <ErrorMessage name = "hoTen" render={msg => <div className="text-red-400">{msg}</div>}/>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Email
                    </div>
                  </div>
                  <Field
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="email"
                    name="email"
                    onChange={propsFormik.handleChange}
                    placeholder="nguyenvana@gmail.com"
                  />
                  <ErrorMessage name = "email" render={msg => <div className="text-red-400">{msg}</div>}/>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Số điện thoại
                    </div>
                  </div>
                  <Field
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    name="soDt"
                    onChange={propsFormik.handleChange}
                    placeholder="0123 79 89 789"
                  />
                  <ErrorMessage name = "soDt" render={msg => <div className="text-red-400">{msg}</div>}/>
                </div>
                <div className="mt-12">
                  <div>
                    <input type="checkbox" name='agree' id="agree"/>
                    <label
                      for="agree"
                      className="ml-2 font-bold text-gray-700 tracking-wide"
                    >
                      Đồng ý điều khoản sử dụng <a target="_blank" style={{textDecoration:'underline',fontSize:'0.75rem'}} href="https://tix.vn/thoa-thuan-su-dung">Tìm hiểu thêm</a>
                    </label>
                    <br />
                  </div>
                  <button
                    className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                    shadow-lg"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}
