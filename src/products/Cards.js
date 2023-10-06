import React, {useContext} from "react";
import { ShopContext } from "../context/ShopContext";

// import data from "../db/data";
import { BsFillBagHeartFill } from "react-icons/bs";



const Cards = ({id, img, title, star, reviews, newPrice, prevPrice}) => {
  
  const {addToCart, cartItems} = useContext (ShopContext)
  const cartItemAmount = cartItems[id];

  return (
    <div>
        <section className="card">
          <img src={img}
          className="card-img"
          alt={title}
          />

          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className="card-reviews">
                {star}  {star}  {star}  {star}
              <span className="total-reviews"> {reviews}</span>
              <section className="card-price">
                <div className="price">
                  <del> <span> GH &#8373;</span> {prevPrice}</del> <span>GH &#8373;</span> {newPrice}
                </div>
               
              </section>
              <div className="bag">
                  <BsFillBagHeartFill className="bag-icon" />
                </div>
            </section>
          </div>
          <button className="btn" onClick={() => addToCart(id) }>
              Add To Cart {cartItemAmount > 0 && <>({cartItemAmount}) </>}
            </button>
          
        </section>
    </div>
  )
}

export default Cards;
