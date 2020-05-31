import React from "react";
import { Col, Row } from "react-bootstrap";
import './Profile.css';
import ProfileCard from "./Card/ProfileCard";
const Profile = () => (
   <>
      <Row>
         <Col lg={12}>
            <span className="profile-alignment">
               <img src="https://storage.googleapis.com/hackaton_bmg/maria.png" />
            </span>
            <span className="profile-alignment name">
               <p>Olá, Maria</p>
            </span>
            <span className="profile-alignment title">
               <p>Aprendiz de poupador</p>
            </span>
            <span className="profile-alignment historico">
               <p>Histórico</p>
            </span>
         </Col>
      </Row>
      <Row className="profile-historic">
         <Col md={3}>
            <ProfileCard
               type="poupar"
               date="31/05/2020"
               text="Parabéns, você poupou R$ 10,00
               e foi recompensado com R$ 1,00"
            />
         </Col>
         <Col md={3}>
            <ProfileCard
               type="investir"
               date="30/05/2020"
               text="Parabéns, você investiu R$ 10,00
               e foi recompensado com R$ 1,00"
            />
         </Col>
         <Col md={3}>
            <ProfileCard
               type="licao"
               date="26/05/2020"
               text="Parabéns, você completou a lição:
               O que é poupar dinheiro"
            />
         </Col>
         <Col md={3}>
            <ProfileCard
               type="licao"
               date="25/05/2020"
               text="Parabéns, você completou a lição:
               Reserva de emergência"
            />
         </Col>
      </Row>
   </>

);

export default Profile;