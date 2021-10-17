import React, { Fragment } from 'react'
import { Table } from 'antd';
import { Input, Button, Space } from 'antd';
import { AudioOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { history } from './../../../App';
import { layDanhSachNguoiDungAction, xoaNguoiDungAction } from '../../../Redux/action/QuanLyNguoiDungAction';
import Loading from '../../../components/Loading/Loading';

export default function User() {

    const dispatch = useDispatch();
    const {danhSachNguoiDung} = useSelector(state => state.QuanLyNguoiDungReducer)

    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction());
    }, [])

    const columns = [
        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            sorter: (a, b) => {
                let userA = a.taiKhoan.toLowerCase().trim();
                let userB = b.taiKhoan.toLowerCase().trim();
                if (userA > userB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend'],
            width: 250
        },
        {
            title: 'Mật khẩu',
            dataIndex: 'matKhau',
            sorter: (a, b) => {
                let userA = a;
                let userB = b;
                if (userA > userB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend'],
            width: 250
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            sorter: (a, b) => {
                let tenPhimA = a.hoTen.toLowerCase().trim();
                let tenPhimB = b.hoTen.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend'],
            width: 250
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => {
                let tenPhimA = a.email.toLowerCase().trim();
                let tenPhimB = b.email.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend'],
            width: 250
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'soDt',
            sorter: (a, b) => a.soDt - b.soDt,
            sortDirections: ['descend'],
            width: 250
        },
        {
            title: 'Tác vụ',
            dataIndex: 'hanhDong',
            render: (text, user) => {
                return <Fragment>
                    <div className="flex" >
                        <NavLink key={1} className="mr-3 text-xl" to={`/admin/user/edit/${user.taiKhoan}`}><EditOutlined /></NavLink>
                        <span onClick={()=>{
                            if(window.confirm('Bạn có chắc xóa tài khoản '+user.taiKhoan+ ' không?')){
                                dispatch(xoaNguoiDungAction(user.taiKhoan))
                            }
                        }} key={2} className="text-xl mr-3 cursor-pointer text-red-600" ><DeleteOutlined /></span>
                    </div>
                </Fragment>
            },
            sortDirections: ['descend'],
        },
    ];

    const data = danhSachNguoiDung;
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }


    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const onSearch =(value)=>{
        dispatch(layDanhSachNguoiDungAction(value));
    };


    const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer)
    const {isLoading} = useSelector(state => state.LoadingReducer)
    return (

        <Fragment>
            {!isLoading ? <div className="container">
                <h3 className="text-2xl text-center font-semibold mb-5" >Quản Lý Người Dùng</h3>
                <Button onClick={()=>{
                    history.push('/admin/users/adduser');
                }} className="mb-3">Thêm người dùng</Button> <br />
                <Space direction="vertical">
                    <Search
                        className="mb-5"
                        placeholder="Nhập tài khoản cần tìm"
                        size="large"
                        suffix={suffix}
                        onSearch={onSearch}
                    />
                </Space>
                <Table columns={columns} dataSource={data} rowKey={"maPhim"} onChange={onChange} />
            </div> : <div className="mt-52"><Loading /></div> }

        </Fragment>


    )
}
