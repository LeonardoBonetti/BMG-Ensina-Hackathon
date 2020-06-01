
import React from 'react';
import './LearnCard.css';
import { Card, Button } from 'react-bootstrap';
import CardImg from './card.png';
import { Link } from 'react-router-dom';

const LearnCard = (props: { title: string, url: string, enabled: boolean }) => (
    <Link to="/Content" onClick={(e) => {
        if (!props.enabled) {
            e.preventDefault()
        }
    }} >
        <Card className={`learn-card ${props.enabled == true ? 'card-enabled' : 'card-disabled'}`}>
            <Card.Img variant="top" src={props.url} />
            <Card.Body>
                <Button className="learn-card-button" as={Link} to="/Content" variant="primary" onClick={(e:any) => {
                    if (!props.enabled) {
                        e.preventDefault()
                    }
                }}>{props.title}</Button>
            </Card.Body>
        </Card>
    </Link>

)
export default LearnCard;