import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// for dropdown 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Service from "./Service.jsx";
import Navbar from "./Navbar.jsx";
import { Switch,Route,Redirect} from 'react-router-dom'


export default function App() {
  return (
    <>
    <Navbar/>
    <switch>
      <Route exact path='/' component = {Home}/>
      <Route exact path='/about' component = {About}/>
      <Route exact path='/service' component = {Service}/>
      <Route exact path='/contact' component = {Contact}/>
      
      <Redirect to ="/" />
    </switch>
    </>
  )
}
