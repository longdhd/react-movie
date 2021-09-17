import { GET_LICH_CHIEU } from "../types/QuanLyRapType";

const stateDefault = {
    heThongRapChieu: []
}

export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch(action.type){
        case GET_LICH_CHIEU:{
            state.heThongRapChieu = action.heThongRapChieu;
        }
        default: return {...state};
    }
}