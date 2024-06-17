import React from "react";
import "./Cart.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Cart() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="Cart">
      <div className="Cart_left">
        <img
          className="Cart_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="Cart_title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="Cart_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;