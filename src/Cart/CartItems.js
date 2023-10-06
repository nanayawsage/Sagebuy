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
          <div className="col-md-6">
          <img className="card-img card" src={img} alt={title} />
        </div>
        <div className="col-md-6">
        <h5>{title}</h5>
          <div className="me-4">
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
            <div className="container">
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
    </div>
  );
};

export default CartItem;
