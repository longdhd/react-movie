import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService"

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

    
}

export const qLPhimService = new QuanLyPhimService();