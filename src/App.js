import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import MainApp from './Components/MainApp';
import { connect } from 'react-redux';


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
          {
            localStorage.getItem("token") ? (<MainApp />) : (<Redirect to="/login" />)
          }

        </Route>

        </Switch>
        

        
      </Router>


    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);
