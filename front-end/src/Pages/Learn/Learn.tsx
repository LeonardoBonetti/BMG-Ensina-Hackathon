import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import LearnCard from "./Card/LearnCard";

const Learn = () => (
   <Row>
         <Col lg={9}>
            <Row>
               <Col><h1>Aprenda</h1></Col>
            </Row>
            <Row>
               <Col md={4}>
                  <LearnCard title={"Quais os beneficios de poupar"}/>
               </Col>
               <Col md={4}>
                  <LearnCard title={"Quais os beneficios de poupar"}/>
               </Col>
               <Col md={4}>
                  <LearnCard title={"Quais os beneficios de poupar"}/>
               </Col>
               <Col md={4}>
                  <LearnCard title={"Quais os beneficios de poupar"}/>
               </Col>
               <Col md={4}>
                  <LearnCard title={"Quais os beneficios de poupar"}/>
               </Col>
               <Col md={4}>
                  <LearnCard title={"Quais os beneficios de poupar"}/>
               </Col>
            </Row>
         </Col>
         <Col lg={3}>
            <Row>
               <Col><h1>Missões</h1></Col>
            </Row>
         </Col>
   </Row>
);

export default Learn;