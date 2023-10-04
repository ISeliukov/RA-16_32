import React from 'react';

const titleLength = 50;
const currencies = [
  { txt: 'USD', sign: '$' },
  { txt: 'EUR', sign: '€' },
];

function ItemTitle(str, len) {
  return str
    ? str.length > len
      ? str.slice(0, len) + ' …'
      : str
    : '-- NO TITLE --';
}

function ItemPrice(str, curr, price) {
  let strCurr = curr.find((o) => o.txt === str);
  return strCurr
    ? `${strCurr.sign}${Number(price).toFixed(2)}`
    : `${Number(price).toFixed(2)}` + ' GBP';
}

function ItemLevel(qty) {
  return qty > 20 ? 'high' : qty > 10 ? 'medium' : 'low';
}

interface tmainimage {
      listing_image_id: number,
      hex_code: number,
      red: number,
      green: number,
      blue: number,
      hue: number,
      saturation: number,
      brightness: number,
      is_black_and_white: number,
      creation_tsz: number,
      listing_id: number,
      rank: number,
      url_75x75: string,
      url_170x135: string,
      url_570xN: string,
      url_fullxfull: string,
      full_height: number,
      full_width: number
}
	  
interface tlist {
	key: string,
    listing_id: number,
    url: string,
	MainImage: tmainimage,
    title: string,
    currency_code: number,
    price: number,
    quantity: number
}

function Listing(tprops) {
	
  let props: tlist = tprops;

  const itemTitle = ItemTitle(props.title, titleLength);

  const itemPrice = ItemPrice(props.currency_code, currencies, props.price);

  return (
    <div className="item">
      <div className="item-image">
        <a href={props.url}>
          <img src={props.MainImage && props.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{itemTitle}</p>
        <p className="item-price">{itemPrice}</p>
        <p
          className={`item-quantity level-${
            props.quantity && ItemLevel(props.quantity)
          }`}
        >{`${props.quantity} left`}</p>
      </div>
    </div>
  );
}
// --- --- --- --- --- --- --- --- --- ---

export { Listing }
