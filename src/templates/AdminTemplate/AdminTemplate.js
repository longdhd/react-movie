import React, { Fragment, useEffect } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import {
  CalendarOutlined,
  PlusOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./AdminTemplate.css";
import { Redirect, Route } from "react-router";
import _ from "lodash";
import { useSelector } from "react-redux";
import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { history } from "./../../App";
import { NavLink } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";

function AdminTemplate(props) {

  const { Header, Content, Footer, Sider } = Layout;

  const {Component,...restProps} = props;

  const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  if(!localStorage.getItem(USER_LOGIN)){
      alert('Bạn không có quyền admin để truy cập vào trang này!')
      return <Redirect to="/" />
  }

//   if(userLogin.maLoaiNguoiDung !== 'QuanTri'){
//     alert('Bạn không có quyền admin để truy cập vào trang này!')
//     return <Redirect to="/" />
//   }

  const operations = <Fragment>
      {!_.isEmpty(userLogin) ? <div className="text-white"> <button onClick={() => {
          history.push('/profile')
      }}><div style={{width: 50, height: 50, display: 'flex',justifyContent:'center',alignItems:'center',marginRight:80}}>{userLogin.taiKhoan}<UserOutlined style={{marginLeft:7}} /></div></button><button>Đăng xuất</button></div> : ''}
  </Fragment>

  return <Route {...restProps} render={(propsRoute) => {
        return (
          <Fragment>
            <Layout>
              <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                  console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                  console.log(collapsed, type);
                }}
              >
                <div className="logo pl-4 py-3" >
                  <NavLink to="/">
                    <img src="https://seeklogo.com/images/C/cinema-logo-53411DFFE5-seeklogo.com.png" style={{height:50,width:50}} alt="logo"></img>
                  </NavLink>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["sub1"]}>
                  <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/admin/user">Users List</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<PlusOutlined />}>
                  <NavLink to="/admin/user/addnew">Add New User</NavLink>
                  </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" icon={<VideoCameraOutlined />} title="Films">
                  <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                  <NavLink to="/admin/films">Films List</NavLink>
                  </Menu.Item>
                  <Menu.Item key="4" icon={<PlusOutlined />}>
                  <NavLink to="/admin/films/addnew">Add New Film</NavLink>
                  </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout>
                <Header
                  className="site-layout-sub-header-background"
                  style={{ padding: 0 }}
                >
                    <div className="text-right pr-10 pt-1 text-white">{operations}</div>
                </Header>
                <Content style={{ margin: "24px 16px 0" }}>
                  <Breadcrumb style={{margin:'0 16px'}}></Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: '85vh' }}
                  >
                    <Component {...propsRoute}/>
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                  Cybersoft ©2021 Created by Dang Hoang Duy Long
                </Footer>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
}

export default AdminTemplate