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

    capNhatThongTinNguoiDung =(data)=>{
        return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,data)
    }

    layDanhSachNguoiDung =(tuKhoa) =>{
        if(tuKhoa !== ''){
            return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05&tuKhoa=${tuKhoa}`)
        }
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05`)
    }

    xoaNguoiDung =(taiKhoan)=>{
        this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }

    themNguoiDung = (thongTinNguoiDung) =>{
        this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,thongTinNguoiDung)
    }
}

export const qLNguoiDungService = new QuanLyNguoiDungSerVice();