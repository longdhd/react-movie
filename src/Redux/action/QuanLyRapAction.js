import { qLRapService } from "../../services/QuanLyRapService";
import { GET_LICH_CHIEU } from "../types/QuanLyRapType";

export const layLichChieuAction = async (dispatch) => {
        try{
            const result = await qLRapService.layLichChieu();
            if(result.status === 200 ){
                dispatch({
                    type:GET_LICH_CHIEU,
                    heThongRapChieu:result.data.content
                })
            }
        }catch(error){
            console.log('error',error.response.data);
        }
}