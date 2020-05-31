
import React from 'react';
import './MissionCard.css';
import { ReactComponent as PigIcon } from '../../../Layout/icons/pig.svg';
import { ReactComponent as GrapIcon } from '../../../Layout/icons/grap.svg';

const MissionCard = (props: {type: 'poupar'|'investir', reward: string, objective: string, current: string, message: string}) => (
   <div className="mission-card">
        {props.type == 'poupar' ? (<PigIcon className='mission-icon' />) :(<GrapIcon className='mission-icon' />)} 
        <span className='mission-title'>{props.type}</span>
        <p className='mission-reward'>Recompensa R$ {props.reward}</p>
        <p className='mission-text'>{props.message}</p>
   <p className='mission-progress'>{props.type == 'investir'? 'Investir em Renda Fixa':'Poupa pra mim'}</p>
        <p className='mission-progress'>R$ {props.current}/{props.objective}</p>

   </div>
)
export default MissionCard;