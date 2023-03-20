import React from "react";
import { useDispatch } from "react-redux";
import { addGoodAction,showDeleteAllButtonAction  } from "../redux/basket/action";
import "../styles.css";


function GoodsItem ({title,description,price,id}){
const dispatch=useDispatch();
const addToBasket=()=>{
dispatch(addGoodAction({title,price,id}))
dispatch(showDeleteAllButtonAction());

}
    return ( 
      <div className="goods-item" key={id}>
        <h3 className="goods-item__title">{title}</h3>
        <p className="goods-item__price">
          <span className="goods-item__price-value goods-item__price-value_old">{price*1.2}.00$ </span>
          <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
        </p>
        <p className="goods-item__description">{description}</p>
        <button onClick={addToBasket} className="goods-item__add-to-card">Add to cart</button>
      </div>
    );
  }


export default GoodsItem;
