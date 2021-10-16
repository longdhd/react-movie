import { baseService } from "./baseService";

//Sử dụng nghiệp vụ liên quan tới API
export class QuanLyNguoiDungSerVice extends baseService{
    constructor(){
        super();
    }

    dangNhap = (thongTinDangNhap) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }

    dangKy = (thongTinDangKy) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`,thongTinDangKy);
    }

    layThongTinTaiKhoan = () => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
    }
    
}

export const qLNguoiDungService = new QuanLyNguoiDungSerVice();