import axios from "axios";
import { baseService } from "./baseService";

export class QuanLyDatVeService extends baseService { 

    constructor(){
        super();
    }
    LayChiTietPhongVe = (maLichChieu)=>{ 
        return this.get(`http://movieapi.cyberlearn.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
}


export const quanLyDatVeService = new QuanLyDatVeService();