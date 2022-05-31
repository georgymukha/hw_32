import React from 'react';

import './Store.css';

function Store(props) {
  return (
    <div className='item'>
        <img src={} alt="" className="item__img" />
        <h2 className="item__name">{props.name}</h2>
        <p className="item__desc">{props.desc}</p>
        <h3 className="item__price">{props.price}</h3>

    </div>
  )
}

export default Store