import React from "react";
import "../styles.css";

import CartItem from './CartItem';

import { useSelector } from "react-redux";

function Cart () {

 const cartGoods=useSelector((store)=>store.basketReducer.cartGoods)
  const getTotal=() =>{
    
    return cartGoods.reduce((acc, item) => acc + item.price, 0);
  }

    return (
      <div className="cart">
        <h2 className="cart__title" >Shopping Cart</h2>
        { cartGoods.length ?
          <ul className="cart__list">
            {cartGoods.map((item) => (
              <li className="cart__list-item" key={item.id}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>
        :
          <p className="cart__note">Nothing in the cart now</p>
        }

        <p className="cart__total">Total: {getTotal()}.00$</p>
      </div>
    );
  }


export default Cart;
