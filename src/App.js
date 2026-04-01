import './App.css';
import Home from "./Screens/Home/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Peliculas from './Screens/Peliculas/Peliculas';
import Series from './Screens/Series/Series';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact = {true} component={Home}/>
          <Route path="/Peliculas" exact = {true} component={Peliculas}/>
          <Route path="/Series" exact = {true} component={Series}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
