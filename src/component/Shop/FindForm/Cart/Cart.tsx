import React from "react";
import style from "./Cart.module.scss";

const Cart = () => {
    return (
        <div className={style.cart}>
            <a href="#CartPlace">
                <img src="https://img.icons8.com/pastel-glyph/2x/shopping-cart--v2.png"
                     alt="cart"/>
                <span className="cart-number">0</span>
            </a>
        </div>)
};
export default Cart;