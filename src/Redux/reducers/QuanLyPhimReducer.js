import { SET_DANH_SACH_PHIM } from "../types/QuanLyPhimType";

const stateDefault = {
    arrFilm : [
        {
            "maPhim": 1333,
            "tenPhim": "Trainwreckk",
            "biDanh": "trainwreckk",
            "trailer": "https://www.youtube.com/embed/2MxnhBPoIx4",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/trainwreckk_gp05.jpg",
            "moTa": "<p>Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.</p>",
            "maNhom": "GP05",
            "ngayKhoiChieu": "2021-09-07T01:00:36.253",
            "danhGia": 10,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          }
    ]
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch(action.type){
        case SET_DANH_SACH_PHIM:{
            state.arrFilm = action.arrFilm;
            return {...state};
        }

        default:
            return {...state};
    }
}