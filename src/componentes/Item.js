import React from 'react';
import '../css/Item.css';
import { Link } from 'react-router-dom';


function Item( {producto} ) {
  return (
    <div className='itemContainer'>
      <h4>Item</h4>
      <h3 className='itemTitulo'>{producto.titulo}</h3>
      <div className='itemImgContainer'>
        <img className='itemImg' src={producto.img} type='image/jpeg' alt={producto.titulo} />
      </div>
      <p className='itemPrecio'>Precio: ${producto.precio}</p>
      <h4 className='itemStock'>Stock: {producto.stock}</h4>
      <Link to={`/producto/${producto.id}`}>
        <button>ver mas...</button>
      </Link>
    </div>
  )
}

export default Item;