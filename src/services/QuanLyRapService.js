import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService"

//Sử dụng nghiệp vụ liên quan tới API
export class QuanLyRapService extends baseService{
    constructor(){
        super();
    }

    layLichChieu = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);
    }

    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
    }
}

export const qLRapService = new QuanLyRapService();