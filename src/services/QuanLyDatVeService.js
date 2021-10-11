import { DanhSachVe } from "../_core/models/DanhSachVe";
import { baseService } from "./baseService";

//Sử dụng nghiệp vụ liên quan tới API
export class QuanLyDatVeSerVice extends baseService{
    constructor(){
        super();
    }

    layDanhSachPhongVe = (maLichChieu) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }

    datVe = (danhsachVe = new DanhSachVe()) => {
        return this.post(`/api/QuanLyDatVe/DatVe`,danhsachVe);
    }

    taoLichChieu = (thongTinLichChieu) => {
        return this.post(`/api/QuanLyDatVe/TaoLichChieu`,thongTinLichChieu);
    }
}

export const qLDatVeService = new QuanLyDatVeSerVice();