import React from 'react';
import {useFormik} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { dangNhapAction } from '../../Redux/action/QuanLyNguoiDungAction';
import * as Yup from 'yup';

export default function LogIn() {

    const dispatch = useDispatch();

    const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer);

    const formik = useFormik({

        initialValues: {
   
          taiKhoan: '',
   
          matKhau: ''
        },
   
        onSubmit: values => {
          const action = dangNhapAction(values);
          dispatch(action);
        },
   
      });

    return <form onSubmit={formik.handleSubmit} className="lg:w-1/2 xl:max-w-screen-sm">
    <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
      <div className="cursor-pointer flex items-center">
        <div className="ml-12">
            <img src="https://seeklogo.com/images/C/cinema-logo-53411DFFE5-seeklogo.com.png" className="h-12" alt="logo"></img>
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
        Sign in
      </h2>
      <div className="mt-12">
        <div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Tài khoản
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              name = "taiKhoan"
              onChange = {formik.handleChange}
              placeholder="mike@gmail.com"
            />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Mật khẩu
              </div>
              <div>
                <a
                  className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                      cursor-pointer"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              name = "matKhau"
              onChange={formik.handleChange}
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-10">
            <button
              className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
              font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
              shadow-lg"
            >
              Log In
            </button>
          </div>
        </div>
        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
          Chưa có tài khoản ?{" "}
          <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">
            Đăng ký
          </a>
        </div>
      </div>
    </div>
  </form>
}
