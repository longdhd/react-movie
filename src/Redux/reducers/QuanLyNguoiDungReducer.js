import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP, LAY_THONG_TIN_TAI_KHOAN } from "../types/QuanLyNguoiDungType";

let user = {};

if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: user,
    userInfo:{}
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP:{
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN,thongTinDangNhap.accessToken);
            return {...state,userLogin:thongTinDangNhap}
        }
        case LAY_THONG_TIN_TAI_KHOAN:{
            state.userInfo = action.userInfo;
            return {...state}
        }
    
        default:
            return {...state};
    }
}