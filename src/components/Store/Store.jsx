import React from 'react';

import './Store.css';

function Store(props) {

    const background = `background-image: url({props.img});`;

  return (
    <div className='item'>
        <div style={{backgroundImage: `url(${props.img})`}} className="item__img" />
        {/* <img src={props.img} alt="" className="item__img" /> */}
        <h3 className="item__title">{props.title}</h3>
        <h2 className="item__name">{props.name}</h2>
        <p className="item__desc">{props.desc}</p>
        {/* Нашёл в интернете интересную встроенную библиотеку для работы с цифрами */}
        <h3 className="item__price">{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(props.price)}</h3>

    </div>
  )
}

export default Store