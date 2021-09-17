import "./App.css";
import { createBrowserHistory } from "history";
import {Route, Router, Switch} from 'react-router';
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import News from './pages/News/News';
import Contact from "./pages/Contact/Contact";
import ChiTietPhim from "./pages/ChiTietPhim/ChiTietPhim";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home}/>
        <HomeTemplate path="/news" exact Component={News}/>
        <HomeTemplate path="/contact" exact Component={Contact}/>
        <HomeTemplate path="/detail/:id" exact Component={ChiTietPhim}/>
      </Switch>
    </Router>
  );
}

export default App;
