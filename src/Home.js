import React, { useState } from "react";
import Nav from "./navigation/Nav";
import Products from "./products/Products";
import Recomended from "./Recomended/Recomended";
import PRODUCTS from "./db/data";
import Scrollable from "./components/Scrollable";
import { Link } from "react-router-dom";
import Hero from "./components/Hero";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleClick = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  // Filter products based on the search query and selected category
  const filteredProducts = PRODUCTS.filter((product) => {
    const titleMatch = product.title.toLowerCase().includes(query);

    if (selectedCategory === "" || selectedCategory === "all products") {
      return titleMatch;
    }

    // Customize this part based on your filter criteria
    return (
      (titleMatch && product.category.toLowerCase() === selectedCategory) ||
      (!titleMatch && product.category.toLowerCase() === selectedCategory)
    );
  });

  return (
    <>
      <Nav query={query} handleChange={handleInputChange} />
      <Recomended handleClick={handleClick} />

      <div className=" container-fluid flex-adverts">
        <img
          className="container-fluid py-3 advert"
          src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-112191-iphone15pro-ghp-DER-48431de3-69b8-4401-ab24-459581dc99e7.jpg;maxHeight=1456;maxWidth=1456"
          alt="add"
        />
        <div className="">
        <img
          className=" py-3 container-fluid advert1"
          src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4901/4901809_sd.jpg;maxHeight=640;maxWidth=550"
          alt="add"
        />
          <Link to="" className='title  my-3'> Apple-iPad (9th Generation) 64GB... </Link>
        </div>

        <div className="">
        <img
          className=" py-3 container-fluid  advert1"
          src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525423_sd.jpg;maxHeight=640;maxWidth=550"
          alt="add"
        />
             <Link to="" className='title  my-3'>Apple - iPhone 15 Pro Max 256GB...</Link>
        </div>
    
    
           

     
      </div>
      <Scrollable />

      <Hero />
      <div className="card-container">
        {filteredProducts.map((product) => (
          <Products key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default Home;