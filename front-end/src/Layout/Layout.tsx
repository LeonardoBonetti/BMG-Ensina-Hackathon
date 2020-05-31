import React from "react";
import LayoutNavbar from "./Navbar/desktop/LayoutNavbar";
import './Layout.css';
import { Router } from "react-router-dom";
import customHistory from "../history";
import LayoutNavbarMobile from "./Navbar/mobile/LayoutNavbarMobile";
import Routes from "../Route/Routes";

const Layout = () => (
  <Router history={customHistory}>
      <div className="content-wrapper">     
        <LayoutNavbar/>  
        <LayoutNavbarMobile/> 
        <Routes/>
        <div className="page-container-fix"></div>
    </div>
  </Router>
  
)
export default Layout;