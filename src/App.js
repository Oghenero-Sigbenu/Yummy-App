import './App.scss';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Reset from "./pages/auth/resetPassword";
import Forgot from "./pages/auth/forgotPass";
import Create from "./pages/createRecipe";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/reset" component={Reset}/>
        <Route path="/create" component={Create}/>
        <Route path="/forgot" component={Forgot}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
