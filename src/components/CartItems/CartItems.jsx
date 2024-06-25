import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
import "./CartItems.css";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart } =
    useContext(ShopContext);

  // console.log("PRODUctOS", all_product);
  // console.log("KARTiteMS", cartItems);
  // console.log("REMobe", removeFromCart);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {/* Mapeo de productos */}
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitems-format-main ">
                <img
                  className="carticon-product-icon"
                  src={product.image}
                  alt={product.name}
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[product.id]}
                </button>
                <p>${product.new_price * cartItems[product.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  alt="Remove"
                  onClick={() => removeFromCart(product.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
      </div>
      {/* borrar a posteriori */}
      <button onClick={() => addToCart(all_product[0].id)}>
        Add First Product
      </button>
      <h1>at the end</h1>
    </div>
  );
};

export default CartItems;
