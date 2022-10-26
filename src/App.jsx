import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.scss';

const FETCH_URL = `https://api.coinpaprika.com/v1/coins`;

const App = () => {
  const [coins, setCoins] = useState([]);

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
          <Card key={coin.id} {...coin} />
        ))}
      </ul>
    </div>
  );
};

export default App;
