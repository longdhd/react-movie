import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Tabs, Button, Checkbox } from "antd";
import { useFormik } from "formik";
import { capNhatThongTinNguoiDungAction, layThongTinTaiKhoanAction } from "../../../Redux/action/QuanLyNguoiDungAction";
import './ThongTinCaNhan.css';
import { BarcodeOutlined, IdcardOutlined, MailOutlined, PhoneOutlined, UserOutlined, UserSwitchOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

export default function ThongTinCaNhan() {
  const { userInfo } = useSelector(state => state.QuanLyNguoiDungReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layThongTinTaiKhoanAction());
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: userInfo?.taiKhoan,
      matKhau: userInfo.matKhau,
      email: userInfo.email,
      soDt: userInfo.soDT,
      maNhom: "GP05",
      hoTen: userInfo?.hoTen,
      maLoaiNguoiDung: userInfo.loaiNguoiDung,
    },
    onSubmit: (values) => {
      dispatch(capNhatThongTinNguoiDungAction(values));
    },
  });

  const onFinish = (values) => {
    // console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  return (
    <div className="profile">
      <div className="firt-section mt-24 container ">
        <div
          className="z-0 bg-banner-12 items-end rounded-md bg-cover"
          style={{ height: "200px", width: "90%", margin: "0 auto" }}
        ></div>
        <div className="text-center flex  justify-center">
          <img
            className="rounded-full bg-gray-400 text-center  z-10"
            style={{
              border: "4px solid white",
              marginTop: "-185px",
              width: "15%",
            }}
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
        </div>
        <div
          style={{
            borderBottom: "2px solid gray",
            width: "70%",
            margin: "0 auto",
          }}
        >
          <h1 className="text-2xl font-semibold text-center">
            {userInfo?.hoTen}{" "}
          </h1>
        </div>
      </div>

      <div
        className="pt-20 mt-10"
        style={{ height: "700px", backgroundColor: "#e4e6eb" }}
      >
        <div
          className="bg-white mt-10"
          style={{
            boxShadow: "10px 10px 5px -6px rgba(196,187,187,0.75)",
            borderRadius: "10px",
            height: "500px",
            width: "80%",
            margin: "0 auto",
          }}
        >
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Thông tin người dùng" key="1">
              <div
                className="grid grid-cols-2 pt-10"
                style={{ width: "70%", margin: "0 auto" }}
              >
                <div>
                  <h1 className="relative">
                    <UserOutlined className='icon'/>Tài Khoản:{" "}
                    <span>{userInfo.taiKhoan}</span>{" "}
                  </h1>
                  <h1 className="relative">
                    <MailOutlined className='icon'/>Email:{" "}
                    <span>{userInfo.email}</span>{" "}
                  </h1>
                  <h1 className="relative">
                    <PhoneOutlined className='icon'/>Số điện thoại:{" "}
                    <span>{userInfo.soDT}</span>{" "}
                  </h1>
                </div>
                <div>
                  <h1 className="relative">
                  <BarcodeOutlined className='icon'/>Mã nhóm:{" "}
                    <span>{userInfo.maNhom}</span>{" "}
                  </h1>
                  <h1 className="relative">
                  <IdcardOutlined className='icon'/>Họ tên:{" "}
                    <span>{userInfo.hoTen}</span>{" "}
                  </h1>
                  <h1 className="relative">
                  <UserSwitchOutlined className='icon'/>Loại người dùng:{" "}
                    <span>{userInfo.maLoaiNguoiDung}</span>{" "}
                  </h1>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Cập nhật tài khoản" key="2">
              <Form
                onSubmitCapture={formik.handleSubmit}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="mt-4 ml-5"
              >
                <div className="grid gap-5 grid-cols-2">
                  <Form.Item
                    className="w-75"
                    label="Tài khoản"
                    rules={[
                      { required: true, message: "Please input your account!" },
                    ]}
                  >
                    <Input
                      disabled={true}
                      value={formik.values.taiKhoan}
                      name="taiKhoan"
                      onChange={formik.handleChange}
                    />
                  </Form.Item>

                  <Form.Item
                    className="w-75"
                    label="Mật khẩu"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      value={formik.values.matKhau}
                      name="matKhau"
                      onChange={formik.handleChange}
                    />
                  </Form.Item>

                  <Form.Item
                    className="w-75"
                    label="Email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                  >
                    <Input
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </Form.Item>
                  <Form.Item
                    className="w-75"
                    label="Số điện thoại"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input
                      value={formik.values.soDt}
                      onChange={formik.handleChange}
                      name="soDt"
                    />
                  </Form.Item>

                  <Form.Item
                    className="w-75"
                    label="Loại người dùng"
                    rules={[
                      {
                        required: true,
                        message: "Please input your type of user!",
                      },
                    ]}
                  >
                    <Input
                      value={formik.values.maLoaiNguoiDung}
                      name="maLoaiNguoiDung"
                      onChange={formik.handleChange}
                    />
                  </Form.Item>

                  <Form.Item
                    className="w-75"
                    label="Họ vè tên"
                    rules={[
                      {
                        required: true,
                        message: "Please input your full name!",
                      },
                    ]}
                  >
                    <Input
                      value={formik.values.hoTen}
                      name="hoTen"
                      onChange={formik.handleChange}
                    />
                  </Form.Item>
                </div>

                <div className="flex justify-center mr-5">
                  <button className="btn btn-success border-0 font-semibold text-white" style={{background:'linear-gradient(135deg,rgba(0,255,170,1.0) 0%,rgba(0,187,255,1.0) 53%,rgba(69,121,245,1.0) 100%)'}} type="submit">
                    Cập Nhật
                  </button>
                </div>
              </Form>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
