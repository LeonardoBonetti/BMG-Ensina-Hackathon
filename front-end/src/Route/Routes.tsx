import {  Route, Switch  } from "react-router-dom";
import React from "react";
import { routesConfig } from "./routesConfig";
import RoutesEnum from "./RoutesEnum";
import Learn from "../Pages/Learn/Learn";
import { Container } from "react-bootstrap";
import '../Layout/Layout.css';


const Routes = () => (
  <Container className="page-container">
    <Switch>
      <Route exact path={routesConfig[RoutesEnum.PROFILE].url}>
        <h1>{routesConfig[RoutesEnum.PROFILE].name}</h1>
      </Route>
      <Route exact path={routesConfig[RoutesEnum.MISSIONS].url}>
        <h1>{routesConfig[RoutesEnum.MISSIONS].name}</h1>
      </Route>
      <Route exact path={routesConfig[RoutesEnum.LEARN].url}>
        <Learn/>
      </Route>
    </Switch>
</Container>

   
);

export default Routes;