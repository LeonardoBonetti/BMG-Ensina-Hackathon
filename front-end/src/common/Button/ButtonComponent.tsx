
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

const ButtonComponent = (props: {style: 'yellow'|'white',_to : string, text: string}) => (
    <Link className="main-button white" to={props._to}>{props.text}</Link>

)

export default ButtonComponent;