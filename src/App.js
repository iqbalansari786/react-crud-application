
import './App.css';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import AboutUs from './component/pages/AboutUs';
import ContactUs from './component/pages/ContactUs';
import Pagenotfound from './component/pages/Pagenotfound';
import Adduser from './component/user/Adduser';
import Edituser from './component/user/Edituser';
import View from './component/user/View';



function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/addUser" component={Adduser} />
          <Route exact path="/editUser/:id" component={Edituser} />
          <Route exact path="/viewUser/:id" component={View} />

          <Route component={Pagenotfound} />

        </Switch>


      </Router>


    </>

  );
}

export default App;
