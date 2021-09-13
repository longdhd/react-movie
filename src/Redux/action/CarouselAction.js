import axios from "axios";
import { DOMAIN } from "../../util/settings/config";
import { GET_CAROUSEL } from "../types/CarouselType";
import { qLPhimService } from "../../services/QuanLyPhimService";

//Sử dụng quản lý state
export const getCarouselAction = async (dispatch) => {
    try{
      const result = await qLPhimService.layDanhSachBanner();

      dispatch({
        type:GET_CAROUSEL,
        arrImg : result.data.content
      })
    } catch (error) {
      console.log('error',error);
    }
}