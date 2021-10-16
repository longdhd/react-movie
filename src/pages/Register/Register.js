import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { dangKyAction } from "../../Redux/action/QuanLyNguoiDungAction";
import { GROUPID } from "../../util/settings/config";

export default function Register() {
  const dispatch = useDispatch();

  //   const validation = Yup.object({
  //     taiKhoan: Yup.string()
  //     .max(12, 'Tài khoản không quá 12 ký tự!')
  //     .required('Tài khoản không được bỏ trống!'),
  //     matKhau: Yup.string()
  //     .min(6,'Mật khẩu ít nhất 6 ký tự!')
  //     .required('Mật khẩu không được bỏ trống!'),
  //     email: Yup.string()
  //     .email('Email không hợp lệ')
  //     .required('Email không được bỏ trống!'),
  //     soDt: Yup.string()
  //     .max(12,'Số điện thoại không quá 12 ký tự!')
  //     .required('Số điện thoại không được bỏ trống!'),
  //     hoTen: Yup.string()
  //     .max(30,'Họ tên không quá 30 ký tự')
  //     .required('Họ tên không được bỏ trống!')
  //   })

//   const [state, setState] = useState({
//     values: {
//       taiKhoan: "",

//       matKhau: "",

//       email: "",

//       soDt: "",

//       hoTen: "",
//     },
//     errors: {
//       taiKhoan: "",

//       matKhau: "",

//       email: "",

//       soDt: "",

//       hoTen: "",
//     },
//   });

//   const handleChange = (event) => {
//     let { name, value } = event.target;
//     console.log({ name, value });
//     let newValue = { ...state.values, [name]: value };
//     let newError = { ...state.errors };
//     if (value.trim() === "") {
//       newError[name] = name + " không được bỏ trống";
//     } else {
//       newError[name] = "";
//     }
//     setState({
//       values: newValue,
//       errors: newError,
//     });
//   };

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",

      matKhau: "",

      email: "",

      soDt: "",

      maNhom: GROUPID,

      hoTen: "",
    },

    onSubmit: (values) => {
      console.log(values);
      const action = dangKyAction(values);
      dispatch(action);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:w-1/2 xl:max-w-screen-sm"
    >
      <div className="py-10 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div className="ml-12">
            <img
              src="https://seeklogo.com/images/C/cinema-logo-53411DFFE5-seeklogo.com.png"
              className="h-12"
              alt="logo"
            ></img>
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
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                name="taiKhoan"
                onChange={formik.handleChange}
                placeholder="anguyen789"
              />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mật khẩu
                </div>
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Họ tên:
                </div>
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                name="hoTen"
                onChange={formik.handleChange}
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </div>
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="email"
                name="email"
                onChange={formik.handleChange}
                placeholder="nguyenvana@gmail.com"
              />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Số điện thoại
                </div>
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                name="soDt"
                onChange={formik.handleChange}
                placeholder="0123 79 89 789"
              />
            </div>
            <div className="mt-10">
              <div>
                <input type="checkbox" id="agree" />
                <label
                  for="agree"
                  className="ml-2 font-bold text-gray-700 tracking-wide"
                >
                  Đồng ý điều khoản sử dụng
                </label>
                <br />
              </div>
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
              font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
              shadow-lg"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
