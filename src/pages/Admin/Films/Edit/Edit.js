import { useEffect, useState } from "react";
import { Form, Input, DatePicker, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  capNhatPhimUploadAction,
  layThongTinPhimAction,
  themPhimUploadHinhAction,
} from "../../../../Redux/action/QuanLyPhimAction";
import { GROUPID } from "../../../../util/settings/config";

const Edit = (props) => {
  const [componentSize, setComponentSize] = useState("default");
  const [ImgSrc, setImgSrc] = useState("");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const dispatch = useDispatch();
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinPhimAction(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: filmDetail?.maPhim,
      tenPhim: filmDetail?.tenPhim,
      trailer: filmDetail?.trailer,
      moTa: filmDetail?.moTa,
      ngayKhoiChieu: filmDetail?.ngayKhoiChieu,
      dangChieu: filmDetail?.dangChieu,
      sapChieu: filmDetail?.sapChieu,
      hot: filmDetail?.hot,
      danhGia: filmDetail?.danhGia,
      hinhAnh: null,
    },
    onSubmit: (values) => {
      values.maNhom = GROUPID;
      //Tạo đối tượng formData, truyền giá trị values từ formik vào FormData
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }

      //Gọi API về backend xử lý FormData
      dispatch(capNhatPhimUploadAction(formData));
    },
  });

  const handleChangeDate = (value) => {
    let ngayKhoiChieu = moment(value);
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
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

  const handleChangeFile = async (e) => {
    //Lấy file từ e
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      //Đưa dữ liệu file lưu vào formik
      await formik.setFieldValue("hinhAnh", file);
      //Tạo một object để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    }
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
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
          />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            value={formik.values.trailer}
          />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input
            name="moTa"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            onChange={handleChangeDate}
            format="DD/MM/YYYY"
            value={moment(formik.values.ngayKhoiChieu)}
          />
        </Form.Item>
        <Form.Item label="Đang chiếu">
          <Switch
            name="dangChieu"
            onChange={handleChangeSwitch("dangChieu")}
            checked={formik.values.dangChieu}
          />
        </Form.Item>
        <Form.Item label="Sắp chiếu">
          <Switch
            name="sapChieu"
            onChange={handleChangeSwitch("sapChieu")}
            checked={formik.values.sapChieu}
          />
        </Form.Item>
        <Form.Item label="Hot">
          <Switch
            name="hot"
            onChange={handleChangeSwitch("hot")}
            checked={formik.values.hot}
          />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={10}
            value={formik.values.danhGia}
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
            src={ImgSrc === "" ? filmDetail.hinhAnh : ImgSrc}
            alt="failed to display"
          ></img>
        </Form.Item>
        <Form.Item label="Tác vụ">
          <button
            className="bg-blue-500 font-semibold text-white rounded px-3 py-2"
            type="submit"
          >
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Edit;
