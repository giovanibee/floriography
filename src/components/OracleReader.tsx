import React, { useEffect, useState } from 'react';
import { OracleCard } from './OracleCard';
import './OracleReader.scss';

import { flowers } from '../lib/flower_list';

export const OracleReader: React.FC = () => {
  const [cardSelected, setCardSelected] = useState<number | null>(null)
  const randomCards = [0, 0, 0].map(() => {
    const keys = Object.keys(flowers);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomFlower = keys[randomIndex];
    return flowers[randomFlower];
  });

  useEffect(() => {
    if (typeof cardSelected !== 'number') return;
    const cards = document.getElementsByClassName('oracle-card-container');
    if (!cards) return
    Array.from(cards).forEach((card) => {
      if (card.id === `card-${cardSelected}`) {
        card.classList.add('oracle-card-container-center');
        return;
      }
      card.classList.add('oracle-card-container-fade-away');
    })
  }, [cardSelected]);

  return (
    <div>
      <h1 className='page-title'>
        Floriography
      </h1>
      <h3>
        Pick a card to get your daily flower reading.
      </h3>
      <div id='card-options'>
        {randomCards.map((card, key) => (
          <OracleCard
            id={`card-${key}`}
            selectCard={() => setCardSelected(key)}
            {...card}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};
