import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggle = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
