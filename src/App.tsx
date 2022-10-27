import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.scss';

const FETCH_URL = `https://api.coinpaprika.com/v1/coins`;

export interface CoinType {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const App = () => {
  const [coins, setCoins] = useState<CoinType[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(FETCH_URL);
      const data = await res.json();
      setCoins(data.splice(0, 100));
    })();
  }, []);

  console.log(coins);

  return (
    <div className="App">
      <ul>
        {coins.map(coin => (
          <Card
            key={coin.id}
            name={coin.name}
            rank={coin.rank}
            symbol={coin.symbol}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
