import { qLRapService } from "../../services/QuanLyRapService";
import {
  GET_LICH_CHIEU,
  GET_THONG_TIN_LICH_CHIEU_PHIM,
} from "../types/QuanLyRapType";

export const layLichChieuAction = async (dispatch) => {
  try {
    const result = await qLRapService.layLichChieu();
    if (result.data.statusCode === 200) {
      dispatch({
        type: GET_LICH_CHIEU,
        heThongRapChieu: result.data.content,
      });
    }
  } catch (error) {
    console.log("error", error.response.data);
  }
};

export const layThongTinLichChieuPhim = (id) => {
  return async (dispatch) => {
    try {
      const result = await qLRapService.layThongTinLichChieuPhim(id);
      dispatch({
        type: GET_THONG_TIN_LICH_CHIEU_PHIM,
        filmDetail: result.data.content,
      });
    } catch (error) {
      console.log("error", error.respone?.data);
    }
  };
};
