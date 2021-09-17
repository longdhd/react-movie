import { GET_LICH_CHIEU, GET_THONG_TIN_LICH_CHIEU_PHIM } from "../types/QuanLyRapType";

const stateDefault = {
    heThongRapChieu: [],
    filmDetail:[]
}

export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch(action.type){
        case GET_LICH_CHIEU:{
            state.heThongRapChieu = action.heThongRapChieu;
        }
        case GET_THONG_TIN_LICH_CHIEU_PHIM:{
            state.filmDetail = action.filmDetail;
        }
        default: return {...state};
    }
}