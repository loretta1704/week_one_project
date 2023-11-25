import React from 'react';
import Button from './Button';



const Card = ({cardinfo,cardtitle,cardlogo}) => {
return (
    <div className='card'>
    <div className='cardlogo'>{cardlogo}</div>
    <h1 className='cardtitle'>{cardtitle}</h1>
    <p className='cardinfo'>{cardinfo}</p>
    <Button name='Learn More'/>
    </div>
);
};

export default Card;