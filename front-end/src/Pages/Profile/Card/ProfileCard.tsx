
import React from 'react';
import './ProfileCard.css';
import { ReactComponent as PigIcon } from '../../../Layout/icons/pig.svg';
import { ReactComponent as GrapIcon } from '../../../Layout/icons/grap.svg';

const ProfileCard = (props: {title: string}) => (
   <div className="historic-card">
        <span className='historic-title'>Parabéns</span>
        <PigIcon className='historic-icon' />
        <p className='historic-date'>04/05/2020</p>
        <p className='historic-text'>De uma poupada extra com o valor de R$ 10,00 no poupa pra mim</p>
   </div>
)
export default ProfileCard;