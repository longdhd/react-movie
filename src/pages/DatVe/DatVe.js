import React,{useEffect} from 'react';
import style from './DatVe.module.css';
import {useSelector,useDispatch} from 'react-redux';
import { layChiTietPhongVeAction } from '../../Redux/action/QuanLyDatVeAction';

export default function DatVe(props) {

    const {chiTietPhongVe} = useSelector(state => state.QuanLyDatVeReducer.chiTietPhongVe);

    const dispatch = useDispatch();

    useEffect(() => {
        const action = layChiTietPhongVeAction(props.match.params.id);

        dispatch(action)
    }, [])
    
    return (
        <div className="min-h-screen mt-2">
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                    <div className="flex flex-col items-center mt-5">
                        <div className="text-black-800 font-bold mb-1 uppercase">Màn hình</div>
                        <div className="bg-black" style={{width:'80%',height:'12px'}}></div>
                        <div className={`${style['trapezoid']}`}></div>
                    </div>
                </div>
                <div className="col-span-3">
                    <h3 className="text-center text-green-400 text-2xl my-3">0 VND</h3>
                    <hr></hr>
                    <h3 className="text-xl font-semibold my-3">JOKER (2019)</h3>
                    <p className="text-left">Địa điểm: </p>
                    <p className="text-left my-3">Ngày chiếu: </p>
                    <hr></hr>
                    <div className="grid grid-cols-2 my-3">
                        <div className="text-red-400">
                            <span className="text-left">Ghế</span>
                        </div>
                        <div className="col-span-1">
                            <span className="text-green-400 text-right">0VND</span>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="my-3">
                        <i>Email:</i><br></br>
                    </div>
                    <div className="my-3">
                        <i>Số điện thoại:</i><br></br>
                    </div>
                    <div className="mb-0 h-full flex flex-col justify-end">
                        <div className="bg-green-500 text-white w-full text-lg text-center py-2 font-bold">
                            ĐẶT VÉ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
