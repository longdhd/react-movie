import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

//Sử dụng nghiệp vụ liên quan tới API
export class QuanLyPhimService extends baseService{
    constructor(){
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    }

    layDanhSachPhim = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
    }

    themPhimUploadHinh = (formData) => {
        return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`,formData);
    }

    layThongTinPhim = (maPhim) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }

    capNhatPhimUpload = (formData) => {
        return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`,formData);
    }
}

export const qLPhimService = new QuanLyPhimService();