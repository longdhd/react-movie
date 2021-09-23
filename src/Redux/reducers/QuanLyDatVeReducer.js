import { ChiTietPhongVe } from "../../_core/models/ChiTietPhongVe";
import { CHUYEN_TAB, DAT_VE, DAT_VE_THANH_CONG, GET_DANH_SACH_PHONG_VE } from "../types/QuanLyDatVeType";

const stateDefault = {
    chiTietPhongVe: new ChiTietPhongVe(),
    danhSachGheDangDat: [],
    activeTab: "1"
}

export const QuanLyDatVeReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case GET_DANH_SACH_PHONG_VE:{
            state.chiTietPhongVe = action.chiTietPhongVe
            return {...state};
        }
        case DAT_VE: {
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];
            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe);
            if(index!=-1){
                danhSachGheCapNhat.splice(index,1);
            }else{
                danhSachGheCapNhat.push(action.gheDuocChon);
            }
            return {...state,danhSachGheDangDat:danhSachGheCapNhat}
        }
        case DAT_VE_THANH_CONG:{
            state.danhSachGheDangDat = [];
            return {...state};
        }
        case CHUYEN_TAB:{
            state.activeTab = "2";
            return {...state};
        }
        default:
            return {...state};
    }
}