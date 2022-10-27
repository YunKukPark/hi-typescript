import React from 'react';
import { CoinType } from '../App';
import './Card.scss';

const Card = (props: Pick<CoinType, 'name' | 'rank' | 'symbol'>) => {
  const { name, rank, symbol } = props;
  return (
    <li className="card">
      <span>{rank}</span>
      <strong>{name}</strong>
      <img
        className="coin-image"
        src={`https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`}
        alt={symbol}
      />
    </li>
  );
};

export default Card;
