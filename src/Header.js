
import React from "react";
import './Coin.css'

const Header = () => {
    // console.log(name)
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
            <h1>Crypto Name</h1>
            <p className='coin-symbol'>Symbol</p>
        </div>
        <div className='coin-data'>
            <p className='coint-price'>Price</p>
            <p className='coin-volume'>Volume</p>
            <p className='coin-percent'> %</p>
        <p>
            Mkt Cap
        </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
