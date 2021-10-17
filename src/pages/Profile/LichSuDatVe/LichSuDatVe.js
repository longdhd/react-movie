import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash'
import moment from 'moment';
import { LoadingReducer } from './../../../Redux/reducers/LoadingReducer';
import { Fragment } from 'react';
import { layThongTinTaiKhoanAction } from '../../../Redux/action/QuanLyNguoiDungAction';
import Loading from '../../../components/Loading/Loading';

export default function LichSu(props) {
    const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer)
    const {isLoading} = useSelector(state => state.LoadingReducer)
    const {userInfo} = useSelector(state => state.QuanLyNguoiDungReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(layThongTinTaiKhoanAction());
    }, [])

    const renderTicketItem = () => {
        return userInfo.thongTinDatVe?.map((ticket, index) => {

            const seats = _.first(ticket.danhSachGhe)

            return <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img onError={(e) => {
                        e.target.onError = null; e.target.src = "http://movieapi.cyberlearn.vn/hinhanh/raya-and-the-last-dragon_gp03.png"
                    }} alt="team" className="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
                    <div className="flex-grow">
                        <h1 className="text-black font-semibold text-base  title-font font-medium">{ticket.tenPhim}</h1>
                        <p className="text-gray-500 m-0">Thời gian : {moment(ticket.ngayDat).format('hh:mm A')}</p>
                        <p className="text-gray-500 m-0">Ngày chiếu : {moment(ticket.ngayDat).format('DD-MM-YYYY')}</p>
                        <p className="text-gray-500 m-0">Địa điểm : {seats.tenHeThongRap} </p>
                        <div className="text-gray-500 m-0">
                            Tên rạp : {seats.tenCumRap}
                        </div>
                        <div className="grid-cols-6 grid" >
                            Ghế :
                            {ticket.danhSachGhe.map((ghe, index) => {
                                return <span style={{ color: 'green' }} key={index} > {ghe.tenGhe}</span>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div style={{width:'90%',margin:'0 auto'}}>
            <section className="text-gray-600 body-font">
                <div className=" px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-400">LỊCH SỬ ĐẶT VÉ</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Cám ơn Quý khách đã tin tưởng CINEMA. Vui lòng kiểm tra thông tin vé
            đã đặt bên dưới. Chúc bạn có những trải nhiệm vui vẻ nhất !</p>
                    </div>

                    <Fragment>
                        {!isLoading ? <div className="flex lich-su flex-wrap -m-2">
                            {renderTicketItem()}
                        </div> : <Loading/>}

                    </Fragment>

                </div>
            </section>

        </div>
    )
}
