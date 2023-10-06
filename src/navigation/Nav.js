import React, { useContext, useState } from 'react';
// import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart} from 'react-icons/ai';
// import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';



const Nav = ({ handleChange }) => {
  const { cartItems } = useContext(ShopContext);

  // State to track the count of items in the cart
  const [cartItemCount, setCartItemCount] = useState(0);

  // Function to update the count of items in the cart
  const updateCartItemCount = () => {
    const itemCount = Object.values(cartItems).reduce(
      (total, count) => total + count,
      0
    );
    setCartItemCount(itemCount);
  };

  // Update the count when the component mounts
  React.useEffect(() => {
    updateCartItemCount();
  }, );
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow sticky-top ">
    <div className="container-fluid">
      <Link className="navbar-brand nav-links links" to="/">SageBuy</Link>
      <form className="d-flex">
          <input className="search me-2" type="search" placeholder="Search Products " aria-label="Search"   
          onChange={handleChange}
          />
 
        </form>
        <Link className=" nav-links links" aria-current="page" to="/Cart">
            
            <AiOutlineShoppingCart className=" nav-links " />
            {cartItemCount > 0 && (
              <span className="nav-count">{cartItemCount}</span>
            )} Cart
            </Link>
     
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
 

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active " aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
      
          </li>
          <li className="nav-item">
            <Link className="nav-link active " aria-current="page" to="/Login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Register">Register</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle active" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="#">Blue</Link></li>
              <li><Link className="dropdown-item" to="#">Red</Link></li>
              <li><Link className="dropdown-item" to="#">Apple</Link></li>
            </ul>
          
          </li>
       
        </ul>
  

     
      </div>
    </div>
  </nav>
  );
};

export default Nav;
