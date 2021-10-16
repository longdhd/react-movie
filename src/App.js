import "./App.css";
import { createBrowserHistory } from "history";
import {Route, Router, Switch} from 'react-router';
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import News from './pages/News/News';
import Contact from "./pages/Contact/Contact";
import ChiTietPhim from "./pages/ChiTietPhim/ChiTietPhim";
import DatVe from './pages/DatVe/DatVe';
import LogIn from "./pages/LogIn/LogIn";
import {Suspense, lazy} from 'react';
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Loading from "./components/Loading/Loading";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Films from "./pages/Admin/Films/Films";
import AddNew from "./pages/Admin/Films/AddNew/AddNew";
import Showtime from "./pages/Admin/Showtime/Showtime";
import Edit from "./pages/Admin/Films/Edit/Edit";
import RegisterFormik from "./pages/Register/RegisterFormik";

const DatVeTemplateLazy = lazy(()=> import("./templates/DatVeTemplate/DatVeTemplate"));

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading/>
      <Switch>
        <HomeTemplate path="/" exact Component={Home}/>
        <HomeTemplate path="/news" exact Component={News}/>
        <HomeTemplate path="/contact" exact Component={Contact}/>
        <HomeTemplate path="/detail/:id" exact Component={ChiTietPhim}/>
        <UserTemplate path="/login" exact Component={LogIn}/>
        <UserTemplate path="/register" exact Component={RegisterFormik}/>
        <HomeTemplate path="/profile" exact Component={Profile}/>
        <AdminTemplate path="/admin" exact Component={Dashboard}/>
        <AdminTemplate path="/admin/films" exact Component={Films}/>
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew}/>
        <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit}/>
        <AdminTemplate path="/admin/films/showtime/:id/:tenphim" exact Component={Showtime}/>
        <Suspense fallback={<h1>Loading...</h1>}>
          <DatVeTemplateLazy path="/checkout/:id" exact Component={DatVe}/>
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
