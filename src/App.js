import './App.css';
import Home from "./Screens/Home/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact = {true} component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
