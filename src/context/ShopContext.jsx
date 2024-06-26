import { createContext, useState } from "react";
import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    const productId = all_product[index].id;
    cart[productId] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {

  const addToCart = (itemId) => {
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  //   const removeFromCart = (itemId) =>{
  //     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  // } THE ORIGINAL
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0 
    for(const item in cartItems)
      if( cartItems[item]>0){
        let itemInfo = all_product.find((product)=> product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item]
      }
      return totalAmount;
  }

const getTotalCartItems = () =>{
  let totalItem = 0;
  for(const item in cartItems){
    if(cartItems[item]>0){
      totalItem += cartItems[item];
    }
  }
  return totalItem;
}
  
  const [cartItems, setCartItems] = useState(getDefaultCart());
  //   
  const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart,removeFromCart};
    return (
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    );
};

export default ShopContextProvider;

