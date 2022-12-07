import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { UserContext } from "../../context/UserContext";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../cart-icon/CartIcon";
import CartDropdown from "../../cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/CartContext";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      {/* All other elements of the page go here */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
