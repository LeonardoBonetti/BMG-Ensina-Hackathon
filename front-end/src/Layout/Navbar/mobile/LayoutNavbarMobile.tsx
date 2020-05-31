
import React from 'react';
import { Link, useLocation as routerLocation } from 'react-router-dom';
import './LayoutNavbarMobile.css';
import NavbarButton from './NavbarButton/NavbarButton';
import RoutesEnum from '../../../Route/RoutesEnum';
import { routesConfig } from '../../../Route/routesConfig';

export default function LayoutNavbarMobile() { 

function isEnabled(pathName: string): boolean{
  let location = routerLocation();
  var isEnabled = pathName ===location.pathname;
  return isEnabled;
}

  return (
    <>
        <div id="nav-m">
          <Link to={routesConfig[RoutesEnum.LEARN].url}> <NavbarButton type={'grade'} enabled={isEnabled(routesConfig[RoutesEnum.LEARN].url)}/> </Link>
          <Link to={routesConfig[RoutesEnum.MISSIONS].url}> <NavbarButton type={'award'} enabled={isEnabled(routesConfig[RoutesEnum.MISSIONS].url)}/></Link>
          <Link to={routesConfig[RoutesEnum.PROFILE].url}> <NavbarButton type={'user'} enabled={isEnabled(routesConfig[RoutesEnum.PROFILE].url)}/></Link>
            <span className="stretch"></span>
        </div>
      </>
   ) 
}
