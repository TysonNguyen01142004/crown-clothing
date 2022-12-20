import React from "react";
import "./checkout.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckOutItem from "../../checkout-item/CheckOutItem";

function CheckOut() {
  const { cartItems, total } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: {total}</span>
    </div>
  );
}

export default CheckOut;
