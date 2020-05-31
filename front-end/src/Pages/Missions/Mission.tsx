import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import MissionCard from "./Card/MissionCard";

const Missions = () => (
   <Row>
      <Col lg={12}>
         <Row>
            <Col><h1 className="title">Missões</h1></Col>
         </Row>
         <Row>
            <Col md={4}>
               <MissionCard type={'poupar'} reward={'1,00'} objective={'10,00'} current={'0,00'} message={'De uma poupada extra com o valor de R$ 10,00 no poupa pra mim'} />
            </Col>
            <Col md={4}>
               <MissionCard type={'investir'} reward={'1,00'} objective={'100,00'} current={'10,00'} message={'Faça um investimentos de R$ 100,00 em renda fixa.'} />
            </Col>
            <Col md={4}>
               <MissionCard type={'investir'} reward={'1,01'} objective={'110,00'} current={'0,00'} message={'Faça um investimentos de R$ 100,00 em renda fixa.'} />
            </Col>
         </Row>
      </Col>

      <Col lg={12}>
         <Row>
            <Col><h1 className="title green">Missões Completas</h1></Col>
         </Row>
         <Row>
            <Col md={4}>
               <MissionCard type={'poupar'} reward={'0,50'} objective={'50,00'} current={'50,00'} message={'De uma poupada extra com o valor de R$ 50,00 no poupa pra mim'} />
            </Col>
            <Col md={4}>
               <MissionCard type={'poupar'} reward={'0,50'} objective={'5,00'} current={'5,00'} message={'De uma poupada extra com o valor de R$ 5,00 no poupa pra mim'} />
            </Col>
            <Col md={4}>
               <MissionCard type={'poupar'} reward={'0,20'} objective={'20,00'} current={'20,00'} message={'De uma poupada extra com o valor de R$ 20,00 no poupa pra mim'} />
            </Col>
         </Row>
      </Col>
   </Row>
);

export default Missions;