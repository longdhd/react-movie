import React, { useState } from "react";
import {
  Form,
  Input,
  DatePicker,
  InputNumber,
  Switch,
} from "antd";
import { useFormik } from "formik";
import {useDispatch} from 'react-redux';
import moment from "moment";
import { themPhimUploadHinhAction } from "../../../../Redux/action/QuanLyPhimAction";
import { GROUPID } from "../../../../util/settings/config";

const AddNew = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [ImgSrc, setImgSrc] = useState("");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: "",
      hinhAnh: {},
    },
    onSubmit: (values) => {
      values.maNhom = GROUPID;
      //Tạo đối tượng formData, truyền giá trị values từ formik vào FormData
      let formData = new FormData();
      for (let key in values) {
        if (key  !=='hinhAnh'){
          formData.append(key,values[key]);
        }else{
          formData.append('File',values.hinhAnh,values.hinhAnh.name);
        }
      }

      //Gọi API về backend xử lý FormData
      dispatch(themPhimUploadHinhAction(formData));
    },
  });

  const handleChangeDate = (value) => {
    formik.setFieldValue("ngayKhoiChieu", moment(value).format("DD/MM/YYYY"));
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (e) => {
    //Lấy file từ e
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      //Tạo một object để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    }

    //Đưa dữ liệu file lưu vào formik
    formik.setFieldValue('hinhAnh',file);
  };

  return (
    <>
      <h1 className="text-center font-semibold text-2xl mb-5">Thêm Phim Mới</h1>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: "default",
        }}
        onValuesChange={onFormLayoutChange}
        size="default"
      >
        <Form.Item label="Tên phim">
          <Input name="tenPhim" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            format={"DD/MM/YYYY"}
            onChange={handleChangeDate}
          />
        </Form.Item>
        <Form.Item label="Đang chiếu">
          <Switch name="dangChieu" onChange={handleChangeSwitch("dangChieu")} />
        </Form.Item>
        <Form.Item label="Sắp chiếu">
          <Switch name="sapChieu" onChange={handleChangeSwitch("sapChieu")} />
        </Form.Item>
        <Form.Item label="Hot">
          <Switch name="hot" onChange={handleChangeSwitch("hot")} />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={10}
          />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input
            type="file"
            name="hinhAnh"
            accept=".png, .jpg, .jpeg"
            onChange={handleChangeFile}
          />
          <img
            width={150}
            height={150}
            src={ImgSrc}
            alt="failed to display"
          ></img>
        </Form.Item>
        <Form.Item label="Tác vụ">
          <button
            className="bg-blue-500 font-semibold text-white rounded px-3 py-2"
            type="submit"
          >
            Thêm phim
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddNew;
