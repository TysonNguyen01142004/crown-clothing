import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggle = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
