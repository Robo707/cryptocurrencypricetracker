import React, {useState, useEffect} from "react"
import './App.css'
import axios from "axios"

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false


const App = () => {

  const[coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
      `
    ).then(res => {
      setCoins(res.data);
      console.log(res.data)
    })
    .catch(error => console.log(error));
  }, []);
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a Cryptocurrency</h1>
        <input type="text" placeholder="Search" className="coin-input" />
      </div>
    </div>
  )
}

export default App;
