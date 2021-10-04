import { CHUYEN_TAB, DAT_VE, DAT_VE_THANH_CONG, GET_DANH_SACH_PHONG_VE } from "../types/QuanLyDatVeType";
import {qLDatVeService} from '../../services/QuanLyDatVeService';
import { DanhSachVe } from "../../_core/models/DanhSachVe";
import {displayLoadingAction,hideLoadingAction} from "../action/LoadingAction"
import { connection } from "../..";

export const layDanhSachPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await qLDatVeService.layDanhSachPhongVe(maLichChieu);
      if (result.status === 200) {
        dispatch({
          type: GET_DANH_SACH_PHONG_VE,
          chiTietPhongVe: result.data.content,
        });

      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.respsone?.data);
    }
  };
};

export const datVeAction = (danhSachVe = new DanhSachVe()) => {
  return async (dispatch,getState) => {
    try {
      dispatch(displayLoadingAction);
      const result = await qLDatVeService.datVe(danhSachVe);
      await dispatch(layDanhSachPhongVeAction(danhSachVe.maLichChieu));
      await dispatch({type:DAT_VE_THANH_CONG});
      await dispatch(hideLoadingAction);

      let userLogin = getState().QuanLyNguoiDungReducer.userLogin;
      connection.invoke('datGheThanhCong',userLogin.taiKhoan,danhSachVe.maLichChieu);
      dispatch({type:CHUYEN_TAB});
    } catch (error) {
      console.log('error',error);
      console.log('error',error.respone?.data);
    }
  }
}

export const datGheAction = (ghe,maLichChieu) => {
  return async (dispatch,getState) => {
    //Đưa thông tin lên reducer
    await dispatch ({
      type: DAT_VE,
      gheDuocChon: ghe
    })

    //Call API về backend
    let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;
    danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
    let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;

    //Call API signalR
    connection.invoke('datGhe',taiKhoan,danhSachGheDangDat,maLichChieu);
  }
}
