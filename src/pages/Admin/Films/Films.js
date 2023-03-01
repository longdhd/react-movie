import { Fragment, useEffect } from "react";
import { Button, Table } from "antd";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhimAction, xoaPhimAction } from "../../../Redux/action/QuanLyPhimAction";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { CalendarOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { history } from "./../../../App";

export default function Films(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);
  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      width: '10%',
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      className: 'text-center',
      defaultSortOrder: "descend",
      render: (text,film) => {
          return <div className="flex items-center"><img style={{marginRight:10}} width={50} height={50} src={film.hinhAnh} onError={(e)=>{e.target.onerror = null; e.target.src=`https://picsum.photos/100/150?random=${film.maPhim}`}} alt={film.tenPhim}></img>{text}</div>
      } ,
      sorter: (a, b) => {
        let tenPhimA = a.toString().toLowerCase().trim();
        let tenPhimB = b.toString().toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width:'20%'
    },
    {
        title: "Mô Tả",
        dataIndex: "moTa",
        className: 'text-left',
        render: (text,film) => {
            return <Fragment>
                {film.moTa.length > 50 ? film.moTa.substring(0,50) + ' ...' : film.moTa}
            </Fragment>
        },
        sorter: (a, b) => {
          let moTaA = a.toString().toLowerCase().trim();
          let moTaB = b.toString().toLowerCase().trim();
          if (moTaA > moTaB) {
            return 1;
          }
          return -1;
        },
        sortDirections: ["descend", "ascend"],
        width: '30%'
    },
    {
      title: "Ngày Khởi Chiếu",
      dataIndex: "ngayKhoiChieu",
      className: 'text-center',
      render: (text, film) => {
        return (
          <Fragment>
            <span>{moment(text).format("DD-MM-YYYY")}</span>
          </Fragment>
        );
      },
      sorter: (a, b) => {
        if (a > b) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width:'20%'
    },
    {
        title: "Xử Lý",
        dataIndex: "maPhim",
        className: 'text-center',
        render: (text, film) => {
            return (
              <Fragment>
                <NavLink key={1} to={`/admin/films/edit/${film.maPhim}`}><EditOutlined style={{fontSize:'1.2rem',marginRight:10}} /></NavLink>
                <span key={2} style={{cursor:'pointer'}} onClick={()=> {
                  if(window.confirm('Bạn có chắc muốn xóa phim '+ film.tenPhim + ' không?')){
                    dispatch(xoaPhimAction(film.maPhim));
                  }
                }}><DeleteOutlined style={{fontSize:'1.2rem',color:'red',marginRight:10}}/></span>
                <NavLink key ={3} to={`/admin/films/showtime/${film.maPhim}/${film.tenPhim}`}><CalendarOutlined style={{fontSize:'1.2rem',color:'green'}}/></NavLink>
              </Fragment>
            );
          },
        width:'20%'
      }
  ];

  const data = arrFilm;

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  const { Search } = Input;
  const onSearch = (value) => {
    dispatch(layDanhSachPhimAction(value));
  }
  return (
    <div className="container">
      <h1 className="text-2xl font-semibold text-center pb-5">Quản Lý Phim</h1>
      <Search
        className="mb-3"
        placeholder="Tìm phim theo tên"
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <div className="flex justify-end mb-3">
        <Button onClick={()=> {
          history.push('/admin/films/addnew')
        }} style={{background:'#1890ff',color:'#fff',fontSize:'0.95rem',display:'flex',alignItems:'center'}}>Thêm phim<PlusOutlined style={{paddingBottom:2}} /></Button>
      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"maPhim"} />
    </div>
  );
}
