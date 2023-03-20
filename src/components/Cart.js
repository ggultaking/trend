import React from "react";
import "../styles.css";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { deleteAllAction,hideDeleteAllButtonAction } from "../redux/basket/action";
import { useSelector } from "react-redux";

function Cart() {
  const cartGoods = useSelector((store) => store.basketReducer.cartGoods);
  const showDeleteAllButton = useSelector((store) => store.basketReducer.showDeleteAllButton);
  const hideDeleteAllButton=useSelector((store)=>store.basketReducer.hideDeleteAllButton)
  const getTotal = () => {
    return cartGoods.reduce((acc, item) => acc + item.price * item.amount, 0);
  };
  const dispatch=useDispatch();
  const deleteAll=()=>{
    dispatch(deleteAllAction()),
   dispatch(hideDeleteAllButtonAction())
  }

  return (
    <div className="cart">
      <h2 className="cart__title">Shopping Cart</h2>
      {cartGoods.length ? (
        <ul className="cart__list">
          {cartGoods.map((item, index) => (
            <li className="cart__list-item" key={index}>
              <CartItem {...item} index={index} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="cart__note">Nothing in the cart now</p>
      )}
      <div className="cart__bottom">
        <p className="cart__total">Total: {getTotal()}.00$</p>
        {showDeleteAllButton && !hideDeleteAllButton ? (
          <button className="cart__delete-all" onClick={deleteAll}>Delete All</button>
        ) : null}
      </div>
    </div>
  );
}

export default Cart;
