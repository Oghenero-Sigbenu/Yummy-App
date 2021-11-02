import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
