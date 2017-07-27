import React, { Component } from 'react';
import './App.css';
import Home from './ui/pages/Home/Home.js'
import Signup from './ui/pages/Signup/Signup.js'
import Sidebar from './ui/shared/Sidebar/Sidebar.js'
import Login from './ui/pages/Login/Login.js'
import Dashboard from './ui/pages/Dashboard/Dashboard.js'
import AlertBox from './ui/shared/AlertBox/AlertBox.js'
import {Provider} from 'react-redux'
import store from './redux/store.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <AlertBox />
        <Router>
          <div>
              <Route render={({location})=>{return location.pathname !=='/'?(<Sidebar />):null}} />
            <Sidebar />
              <switch>
                <Route exact path='/' component={Home} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
              </switch>
          </div>
        </Router>
      </div>
      </Provider>
    );
  }
}

export default App;
