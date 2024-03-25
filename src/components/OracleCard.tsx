import React, { useState } from 'react';
import { CardProps } from 'antd/es/card';
import './OracleCard.scss';

export interface OracleCardProps extends CardProps {
  title: string;
  image: string;
  meaning: string;
  key: number;
  selectCard?: () => void;
}

export const OracleCard: React.FC<OracleCardProps> = ({
  id,
  title,
  meaning,
  image,
  key,
  selectCard,
}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const flipCard = () => {
    if (selectCard) selectCard()
    setIsFlipped(true)
  }
  
  return (
    <div
      className={`oracle-card-container ${isFlipped ? 'oracle-card-container-flipped' : ''}`} id={id}
      key={key}
    >
     {isFlipped && <div className='oracle-card oracle-card-front'>
        <h1>{title}</h1>
        <img
          className='flower-image'
          src={image}
          alt={title}
        />
        <p>{meaning}</p>
      </div>}
      <div className='oracle-card oracle-card-back'  onClick={flipCard} />
    </div>
  )
}
