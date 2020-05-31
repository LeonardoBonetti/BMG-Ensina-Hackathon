
import React from 'react';
import './ProfileCard.css';
import { ReactComponent as PigIcon } from '../../../Layout/icons/pig.svg';
import { ReactComponent as GraphIcon } from '../../../Layout/icons/grap.svg';
import { ReactComponent as SchoolIcon } from '../../../Layout/icons/chapeu.svg';

const ProfileCard = (props: {type: 'poupar'|'investir'|'licao', date: string, text: string}) => (
   <div className="historic-card">
        <span className='historic-title'>Parabéns</span>
        {props.type === 'poupar' && <PigIcon className='historic-icon' />}
        {props.type === 'investir' && <GraphIcon className='historic-icon' />}
        {props.type === 'licao' && <SchoolIcon className='historic-icon' />}
        <p className='historic-date'>{props.date}</p>
        <p className='historic-text'>{props.text}</p>
   </div>
)
export default ProfileCard;