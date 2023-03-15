import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoodAction } from "../redux/basket/action";
import "../styles.css";


function CartItem ({id,title,price}) {
const dispatch=useDispatch();
 const deleteFromBasket=()=>{
  dispatch(deleteGoodAction(id))
  console.log(id)
 };
 console.log(id)
    return (
      <div className="cart-item">        
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <button className="cart-item__button" onClick={deleteFromBasket}> X </button>
      </div>
    );
  }


export default CartItem;
