import './App.css';
import Home from "./Screens/Home/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Peliculas from './Screens/Peliculas/Peliculas';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact = {true} component={Home}/>
          <Route path="/Peliculas" exact = {true} component={Peliculas}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
