import React from 'react'
import './Coin.css' 

function Coins({name, logo, price, symbol}) {
  return (
    <div className='coin'>
        <h1>Name: {name}</h1>
        <img src={logo} alt="icon"/>
        <h3>Price: {price}</h3>
        <h3>Symbol: {symbol}</h3>
    </div>
  )
}

export default Coins