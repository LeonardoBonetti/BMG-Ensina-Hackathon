import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import './Content.css';
import {ContentData} from './ContentData';
import { IContent } from "./IContent";

function Content(props: {id: string}) {
      console.log(ContentData);
      return (
            <Row>
                  <Col md={4}>
                        <h1 className="title">O que é poupar?</h1>
                  </Col>
            </Row>
      );
} 

export default Content;