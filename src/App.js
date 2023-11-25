/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import React from 'react';
import './App.css';
import Card from './components/Card';
import sedans from "../src/images/icon-sedans.svg";
import suvs from "../src/images/icon-suvs.svg";
import luxury from "../src/images/icon-luxury.svg";


function App() {
  
const CardData =  [
  {
  cardlogo: <img src={sedans} alt='sedans'/>,
  cardtitle: <h1>SEDANS</h1>,
  cardinfo: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip'
}, 
{
  cardlogo: <img src={suvs} alt='suvs'/>,
  cardtitle: <h1>SUVS</h1>,
  cardinfo: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures'
}, {
  cardlogo: <img src={luxury} alt='luxury'/>,
  cardtitle: <h1>LUXURY</h1>,
  cardinfo: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style'
}];
 
  return (
    <div className="App brand-card">
      {CardData.map((brand, index) => (
        <Card
        key={index}
        cardlogo={brand.cardlogo}
        cardtitle={brand.cardtitle}
        cardinfo={brand.cardinfo}
        />

    ))}
    </div>
  );
}

export default App;