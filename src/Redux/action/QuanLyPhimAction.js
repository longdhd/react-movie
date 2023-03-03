import { useNavigate } from "react-router-dom";
import { history } from "../../App";
import { qLPhimService } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "../types/QuanLyPhimType";

export const layDanhSachPhimAction = (tenPhim='') => {
  return async (dispatch) => {
    try {
      const result = await qLPhimService.layDanhSachPhim(tenPhim);
  
      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrFilm: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  } 
};
export const themPhimUploadHinhAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await qLPhimService.themPhimUploadHinh(formData);
      alert('Thêm phim thành công!');
      console.log('result',result.data.content);
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await qLPhimService.layThongTinPhim(maPhim);
      dispatch({
        type:SET_THONG_TIN_PHIM,
        filmDetail: result.data.content
      })
    } catch (error) {
      console.log('error',error);
    }
  }
}

export const capNhatPhimUploadAction = (formData) => {
  return async (dispatch) => {
    try {
      const navigate = useNavigate();
      const result = await qLPhimService.capNhatPhimUpload(formData);
      alert('Cập nhật phim thành công!');
      dispatch(layDanhSachPhimAction());
      // history.push('/admin/films');
      navigate('/admin/films');  
    } catch (error) {
      console.log('error',error.response?.data);
    }
  }
}

export const xoaPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await qLPhimService.xoaPhim(maPhim);
      alert('Xoá phim thành công!');
      dispatch(layDanhSachPhimAction());
    } catch (error) {
      console.log('error',error.response?.data);
    }
  }
}
