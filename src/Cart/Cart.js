
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Nav from "../navigation/Nav";
import CartItem from "./CartItems";
import data from "../db/data";
import { ShopContext } from "../context/ShopContext";
import { AiOutlineShoppingCart} from 'react-icons/ai';


const Cart = () => {
  const { cartItems, totalCartAmount, addToCart } = useContext(ShopContext);
  const totalAmount = totalCartAmount();
  const navigate = useNavigate();

  return (
    <div>
      <Nav  />
      <div>
      </div>
      <div className="">

      <h1>Your Cart Items</h1>
        {cartItems && 
        
          Object.keys(cartItems).map((itemId) => {
            const quantity = cartItems[itemId];
            if (quantity > 0) {
              return (
                
                <CartItem
                  key={itemId}
                  data={data.find((product) => product.id === parseInt(itemId))}
                  quantity={quantity}
                  addToCart={addToCart}
                />
              );
            }
            return null;
          })}
      </div>

      {totalAmount > 0 ? (
        <div>
          <p className="sub">Subtotal   <span> GH&#8373;</span> {totalAmount}</p>
          <button className="btn btn-outline-succes" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
          <Link  to="/Checkout" className=" btn btn-primary">Check Out</Link>
        </div>
      ) : (
        <div className="text-center">
          <AiOutlineShoppingCart className="cart-icon" />

          <h3> Add Items to your cart</h3>

          <button className="btn btn-outline-succes" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
