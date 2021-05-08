import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import MainApp from './Components/MainApp';

// import {getToken} from './util/util';


function App() {
  return (

    <div className="App">

      <Router>

        <Switch>
        <Route exact path={"/register"}>
          <Register />
        </Route>

        <Route exact path={"/login"}>
          <Login />
        </Route>

        <Route  path={'/'}>

          
          <MainApp />
        </Route>

        </Switch>
        

        
      </Router>


    </div>
  );
}


export default App;
