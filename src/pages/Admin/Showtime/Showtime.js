import React, { useEffect, useState } from "react";
import { Form, Button, Select, InputNumber, DatePicker } from "antd";
import { qLRapService } from "../../../services/QuanLyRapService";
import { useFormik } from "formik";
import { ConsoleSqlOutlined } from "@ant-design/icons";
import moment from "moment";
import { qLDatVeService } from "../../../services/QuanLyDatVeService";

export default function Showtime(props) {
  const [state, setState] = useState({
    heThongRap: [],
    cumRap: [],
  });

  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: async (values) => {
        console.log('values',values);
        try {
            const result = qLDatVeService.taoLichChieu(values);
            alert('Thêm lịch chiếu thành công!')
        } catch (error) {
            console.log("error", error.response?.data);
        }
    },
  });

  useEffect(async () => {
    try {
      let result = await qLRapService.layThongTinHeThongRap();
      setState({
        ...state,
        heThongRap: result.data.content,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  }, []);

  const handleChangeHeThongRap = async (values) => {
    //Từ hệ thống rạp call API lấy thông tin rạp
    try {
      let result = await qLRapService.layThongTinCumRap(values);
      //Gán giá trị cụm rạp vào state
      setState({
        ...state,
        cumRap: result.data.content,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };

  const handleChangeCumRap = (values) => {
    formik.setFieldValue("maRap", values);
  };

  const onOK = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };

  const onChangeDate = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };

  const handleChangeInputNumber = (values) => {
    formik.setFieldValue("giaVe", values);
  };

  const convertSelectHTR = () => {
    return state.heThongRap?.map((htr, index) => {
      return { label: htr.tenHeThongRap, value: htr.maHeThongRap };
    });
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onSubmitCapture={formik.handleSubmit}
    >
      <h1 className="text-2xl font-semibold text-center mb-5">
        Thêm Lịch Chiếu - {props.match.params.tenphim}
      </h1>
      <Form.Item label="Hệ thống rạp">
        <Select
          options={convertSelectHTR()}
          onChange={handleChangeHeThongRap}
          placeholder="Chọn hệ thống rạp"
        />
      </Form.Item>
      <Form.Item label="Cụm rạp">
        <Select
          options={state.cumRap?.map((cR, index) => ({
            label: cR.tenCumRap,
            value: cR.maCumRap,
          }))}
          onChange={handleChangeCumRap}
          placeholder="Chọn cụm rạp"
        />
      </Form.Item>
      <Form.Item label="Ngày chiếu giờ chiếu">
        <DatePicker
          format="DD/MM/YYYY hh:mm:ss"
          showTime
          onChange={onChangeDate}
          onOK={onOK}
          placeholder="Chọn ngày chiếu giờ chiếu"
        />
      </Form.Item>
      <Form.Item label="Giá vé">
        <InputNumber
          min={75000}
          max={150000}
          onChange={handleChangeInputNumber}
          placeholder="Nhập giá vé"
        />
      </Form.Item>
      <div className="text-center pt-3">
        <button type="submit" className="rounded px-3 py-2" style={{background:'#1890ff',color:'#fff',fontSize:'0.95rem'}}>Tạo mới</button>
      </div>
    </Form>
  );
}
