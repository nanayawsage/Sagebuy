import { useContext } from "react";
import { ShopContext } from "../../src/context/ShopContext";
import { useNavigate } from "react-router-dom";

const CartItem = (props) => {
  const { id, img, title, newPrice } = props.data;
  const {
    cartItems,
    addToCart,
    removeFromCart,
    totalCartAmount,
    updateCartItem,
  } = useContext(ShopContext);
  const totalAmount = totalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="py-4">
      <div className="container">
        <div className="row">
          <img className="card-img col-md-6" src={img} alt={title} />
          <h3>{title}</h3>
        </div>
        <div className="row">
          <div className="">
            <span> GH&#8373;</span> {newPrice}
            <button className="" onClick={() => removeFromCart(id)}>
          
              -
            </button>
            <input
              className="input"
              onChange={(e) => updateCartItem(Number(e.target.value), id)}
              value={cartItems[id]}
            />
            <button className="" onClick={() => addToCart(id)}>
              +
            </button>
          </div>

          {totalAmount > 0 ? (
            <div>
              <p className="sub">
                Subtotal <span> GH&#8373;</span> {totalAmount}
              </p>
            </div>
          ) : (
            <div className="">
              <h1>Your Cart is empty</h1>
              <button
                className="btn btn-outline-success"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
