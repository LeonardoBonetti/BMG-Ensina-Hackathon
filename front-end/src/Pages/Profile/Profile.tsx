import React from "react";
import { Col, Row } from "react-bootstrap";
import './Profile.css';
import ProfileCard from "./Card/ProfileCard";
const Profile = () => (
   <>
      <Row>
         <Col lg={12}>
            <span className="profile-alignment">
               <img src="https://storage.googleapis.com/shawee-production.appspot.com/shawee/profilepictures/ba61d739-88d3-4d7d-9fcb-654b19eac913.jpg" />
            </span>
            <span className="profile-alignment name">
               <p>Olá, Leo</p>
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
            <ProfileCard title="" />
         </Col>
         <Col md={3}>
            <ProfileCard title="" />
         </Col>
         <Col md={3}>
            <ProfileCard title="" />
         </Col>
         <Col md={3}>
            <ProfileCard title="" />
         </Col>
         <Col md={3}>
            <ProfileCard title="" />
         </Col>
         <Col md={3}>
            <ProfileCard title="" />
         </Col>
      </Row>
   </>

);

export default Profile;