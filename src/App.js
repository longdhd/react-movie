import "./App.css";
import { createBrowserHistory } from "history";
import {Router, Switch} from 'react-router';
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import News from './pages/News/News';
import Contact from "./pages/Contact/Contact";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home}/>
        <HomeTemplate path="/news" exact Component={News}/>
        <HomeTemplate path="/contact" exact Component={Contact}/>

      </Switch>
    </Router>
  );
}

export default App;
