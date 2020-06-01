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
            <MissionCard type={'investir'} reward={'R$ 25,37'} objective={'150,00'} current={'50,00'} message={'Faça um investimentos de R$ 150,00 em renda fixa.'} />

            </Col>
            <Col md={4}>
               <MissionCard type={'investir'} reward={'R$ 13,69'} objective={'100,00'} current={'80,00'} message={'Faça um investimentos de R$ 100,00 em renda fixa.'} />
            </Col>
            <Col md={4}>
            <MissionCard type={'poupar'} reward={'R$ 5,48'} objective={'25,00'} current={'24,00'} message={'De uma poupada extra com o valor de R$ 25,00 no poupa pra mim'} />

            </Col>
         </Row>
      </Col>

      <Col lg={12}>
         <Row>
            <Col><h1 className="title green">Missões Completas</h1></Col>
         </Row>
         <Row>
            <Col md={4}>
               <MissionCard type={'poupar'} reward={'Ganhe Plano Flex 1 mês'} objective={'25,00'} current={'50,00'} message={'De uma poupada extra com o valor de R$ 50,00 no poupa pra mim'} />
            </Col>
            <Col md={4}>
               <MissionCard type={'poupar'} reward={'Ganhe Plano Flex 3 meses'} objective={'100,00'} current={'5,00'} message={'De uma poupada extra com o valor de R$ 5,00 no poupa pra mim'} />
            </Col>
            <Col md={4}>
               <MissionCard type={'poupar'} reward={'Ganhe Plano Top 5 meses'} objective={'100,00'} current={'20,00'} message={'De uma poupada extra com o valor de R$ 20,00 no poupa pra mim'} />
            </Col>
         </Row>
      </Col>
   </Row>
);

export default Missions;