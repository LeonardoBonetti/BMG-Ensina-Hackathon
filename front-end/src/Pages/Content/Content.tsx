import React from "react";
import {  Col, Row, Image, Button } from "react-bootstrap";
import './Content.css';
import { Link } from "react-router-dom";
import { routesConfig } from "../../Route/routesConfig";
import RoutesEnum from "../../Route/RoutesEnum";
import ButtonComponent from "../../common/Button/ButtonComponent";

function Content() {
      return (
            <Row className="content">
                  <Col md={12}>
                        <h1 className="title">O que é poupar?</h1>
                        <p>
                              Poupar é acumular dinheiro que sobrou durante o mês, após você pagar todas as suas contas. Atualmente no Brasil 67% da população ou seja, 140 milhões de Brasileiros não conseguem guardar dinheiro.
                        </p>
                        <Image className="content-image" src="https://storage.googleapis.com/hackaton_bmg/poupanca_porquinho.jpg" rounded fluid />
                        <p>
                              Poupar é muito importante para o seu futuro e principalmente para momentos de crise no qual muitas pessoas perdem seus empregos ou tem seus salários reduzidos.
                        </p>
                        <p>
                              Além de adquirir tranquilidade em momentos de estresse você terá a oportunidade de negociar na compra de produtos ou bens de forma que você pague a vista e receba um desconto por isso!
                        </p>
                        <iframe className="content-video" width="560" height="315" src="https://www.youtube.com/embed/buIawTRkZHM?controls=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        <p>
                              Entendeu a importância de poupar? O BMG ajuda você a poupar através do Poupa pra mim nosso sistema que vai te ajudar a poupar cada vez mais !
                        </p>
                        <ButtonComponent _to={routesConfig[RoutesEnum.QUIZ].url} style="white" text="Continuar"/>
                  </Col>
            </Row>
      );
} 

export default Content;