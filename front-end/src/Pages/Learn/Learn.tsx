import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import LearnCard from "./Card/LearnCard";
import MissionCard from "../Missions/Card/MissionCard";

const Learn = () => (
   <Row>
         <Col lg={9}>
            <Row>
               <Col><h1 className="title">Aprenda</h1></Col>
            </Row>
            <Row>
               <Col md={4}>
                  <LearnCard title={"O que é poupar dinheiro? "} url={"https://storage.googleapis.com/hackaton_bmg/card_front_1.png"}/>
               </Col>
               <Col md={4}>
                  <LearnCard title={"Reserva de emergência"} url={"https://storage.googleapis.com/hackaton_bmg/card_front_2.jpg"}/>
               </Col>
               <Col md={4}>
                  <LearnCard title={"Taxas ao poupar"} url={"https://storage.googleapis.com/hackaton_bmg/card_front_3.jpg"}/>
               </Col>
               <Col md={4}>
                  <LearnCard title={"O que é investir?"} url={"https://storage.googleapis.com/hackaton_bmg/card_front_4.png"}/>
               </Col>
               <Col md={4}>
                  <LearnCard title={"Tesouro Direto"} url={"https://storage.googleapis.com/hackaton_bmg/card_front_5.png"}/>
               </Col>
               <Col md={4}>
                  <LearnCard title={"Fundos imobiliários"} url={"https://storage.googleapis.com/hackaton_bmg/card_front_6.png"}/>
               </Col>
            </Row>
         </Col>
         <Col className="hide-mobile" lg={3}>
            <Row>
               <Col><h1 className="subtitle">Missões</h1></Col>
            </Row>
            <Row>
               <Col>
                  <MissionCard type={'poupar'} reward={'1,00'} objective={'10,00'} current={'0,00'} message={'De uma poupada extra com o valor de R$ 10,00 no poupa pra mim'}/>
               </Col>
            </Row>
         </Col>
   </Row>
);

export default Learn;