import './App.css';
import Home from "./Screens/Home/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Peliculas from './Screens/Peliculas/Peliculas';
import Series from './Screens/Series/Series';
import Favoritos from './Screens/Favoritos/Favoritos';
import LogIn from './Screens/LogIn/LogIn';
import SignUp from './Screens/SignUp/SignUp';
import SearchResults from './Screens/SearchResults/SearchResults';
import Detalle from './Screens/Detalle/Detalle';
import NotFound from "./Screens/NotFound/NotFound";
import MiPerfil from "./Screens/MiPerfil/MiPerfil"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Peliculas" exact={true} component={Peliculas} />
          <Route path="/Series" exact={true} component={Series} />
          <Route path="/Favoritos" exact={true} component={Favoritos} />
          <Route path="/LogIn" exact={true} component={LogIn} />
          <Route path="/SignUp" exact={true} component={SignUp} />
          <Route path="/MiPerfil" exact={true} component={MiPerfil} />
          <Route path="/SearchResults/:tipo/:busqueda" component={SearchResults} />
          <Route path="/Detalle/:tipo/:id" component={Detalle} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
