import {  Route, Switch  } from "react-router-dom";
import React from "react";
import { routesConfig } from "./routesConfig";
import RoutesEnum from "./RoutesEnum";
import Learn from "../Pages/Learn/Learn";
import { Container } from "react-bootstrap";
import '../Layout/Layout.css';
import Missions from "../Pages/Missions/Mission";
import Profile from "../Pages/Profile/Profile";


const Routes = () => (
  <Container className="page-container">
    <Switch>
      <Route exact path={routesConfig[RoutesEnum.PROFILE].url}>
       <Profile/>
      </Route>
      <Route exact path={routesConfig[RoutesEnum.MISSIONS].url}>
        <Missions/>
      </Route>
      <Route exact path={routesConfig[RoutesEnum.LEARN].url}>
        <Learn/>
      </Route>
    </Switch>
</Container>

   
);

export default Routes;