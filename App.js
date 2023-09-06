import React, {useState, useEffect} from 'react'
import  Axios  from 'axios';
import Coins from './Components/Coin';
import './App.css';

function App(){
  const [listOfCoins, setListOfCoins] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (res)=> {
        setListOfCoins(res.data.coins);
    })
  },[]);

  const filteredCoins =  listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchInput.toLowerCase());
  })

  return(
    <div className='app'>
      <div className='crypto-header'>
        <input type='text' placeholder='Enter coin name..' onChange={(e) => {setSearchInput(e.target.value)}}/>
      </div>
      <div className='crypto-display'>
        {filteredCoins.map((coin) => {
          return <Coins name={coin.name} logo={coin.icon} price={coin.price} symbol={coin.symbol}/>
        })}
      </div>
    </div>
  )
}
export default App