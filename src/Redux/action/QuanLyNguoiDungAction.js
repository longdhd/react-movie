import { qLNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
  DANG_NHAP,
  LAY_THONG_TIN_TAI_KHOAN,
} from "../types/QuanLyNguoiDungType";
import { history } from "../../App";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await qLNguoiDungService.dangNhap(thongTinDangNhap);
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP,
          thongTinDangNhap: result.data.content,
        });
        history.goBack();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const layThongTinTaiKhoanAction = () => {
  return async (dispatch) => {
    try {
      const result = await qLNguoiDungService.layThongTinTaiKhoan();
      dispatch(displayLoadingAction);
      await dispatch({
        type: LAY_THONG_TIN_TAI_KHOAN,
        userInfo: result.data.content,
      });
      dispatch(hideLoadingAction);
    } catch (error) {
      console.log("error", error);
    }
  };
};
