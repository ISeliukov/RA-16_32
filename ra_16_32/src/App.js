'use strict';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Listing } from './engine/Common.js';

import jsonData from './engine/etsy.json';
import logo from './logo.svg';
import './App.css';
	
function App() {

  const items = jsonData.map((item) =>
    item.title && item.price ? (
      <Listing
        key={item.listing_id}
        listing_id={item.listing_id}
        url={item.url}
        MainImage={item.MainImage}
        title={item.title}
        currency_code={item.currency_code}
        price={item.price}
        quantity={item.quantity}
      />
    ) : null
  );

  return <div className="item-list">{items}</div>;
}

export { App }
