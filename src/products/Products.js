import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FiHeart } from 'react-icons/fi';
import { Link } from "react-router-dom";



const Products = (props) => {
  const { id, title, newPrice,  star, prevPrice, img } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (

  <div className="container-fluid card-container card col-sm-4 my-2">
        <div className=" row "  >
          <div className=" image-fluid " >
          <img src={img} alt={title}  className="card-img"/>
          </div>
          <div className="card-body col-sm- col-md-9">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">
              {star} {star} {star} {star}
              <p className="card-text">
                <p className="card-text">
                  <del>
                    {prevPrice}
                  </del>
                  <span> GH&#8373;</span> {newPrice}
              <FiHeart className="mx-3" />

              
                </p>
                <p className="like">
              </p>
              </p>

            
            </p>
       
            <button className="btn btn-primary me-3" onClick={() => addToCart(id)}>
              Add To Cart {cartItemAmount > 0 && <>({cartItemAmount}) </>}
            </button>
            {/* <button className="btn btn-success " onClick={() => removeFromCart(id)}>
           Remove
            </button> */}
      
        </div>
        <Link to="/checkout"></Link>
     
        </div>

    </div>
  );
};

export default Products;
