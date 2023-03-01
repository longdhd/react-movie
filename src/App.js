import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import ChiTietPhim from "./pages/ChiTietPhim/ChiTietPhim";
import DatVe from "./pages/DatVe/DatVe";
import LogIn from "./pages/LogIn/LogIn";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Loading from "./components/Loading/Loading";
import Profile from "./pages/Profile/Profile";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Films from "./pages/Admin/Films/Films";
import AddNew from "./pages/Admin/Films/AddNew/AddNew";
import Showtime from "./pages/Admin/Showtime/Showtime";
import Edit from "./pages/Admin/Films/Edit/Edit";
import RegisterFormik from "./pages/Register/RegisterFormik";
import User from "./pages/Admin/User/User";
import AddUser from "./pages/Admin/User/addUser/AddUser";
import EditUser from "./pages/Admin/User/editUser/EditUser";
import DatVeTemplate from "./templates/DatVeTemplate/DatVeTemplate";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

export const history = createBrowserHistory();

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" exact element={<HomeTemplate />}>
        <Route index element={<Home />} />
        <Route path="/news" exact element={<News />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/detail/:id" exact element={<ChiTietPhim />} />
      </Route>
    )
  );
  return (
    // <Router history={history}>
    //   <Loading />
    //   <Switch>
    // <HomeTemplate path="/" exact Component={Home} />
    // <HomeTemplate path="/news" exact Component={News} />
    // <HomeTemplate path="/contact" exact Component={Contact} />
    // <HomeTemplate path="/detail/:id" exact Component={ChiTietPhim} />
    // <UserTemplate path="/login" exact Component={LogIn} />
    // <UserTemplate path="/register" exact Component={RegisterFormik} />
    // <Route path="/profile">
    //   <Profile />
    // </Route>
    // <AdminTemplate path="/admin" exact Component={User} />
    // <AdminTemplate path="/admin/user" exact Component={User} />
    // <AdminTemplate path="/admin/user/addnew" exact Component={AddUser} />
    // <AdminTemplate path="/admin/user/edit/:id" exact Component={EditUser} />
    // <AdminTemplate path="/admin/films" exact Component={Films} />
    // <AdminTemplate path="/admin/films/addnew" exact Component={AddNew} />
    // <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
    // <AdminTemplate
    //   path="/admin/films/showtime/:id/:tenphim"
    //   exact
    //   Component={Showtime}
    // />
    // <DatVeTemplate path="/checkout/:id" exact Component={DatVe} />
    //   </Switch>
    // </Router>
    <RouterProvider router={router}>
      <Loading />
    </RouterProvider>
  );
}

export default App;
