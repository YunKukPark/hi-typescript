import React from 'react';
import './Card.scss';

const Card = props => {
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
