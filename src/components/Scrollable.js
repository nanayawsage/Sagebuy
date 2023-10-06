import React from 'react';
import { Link } from 'react-router-dom';

const Scrollable = () => {
  return (
    <div className= "container-fluid my-2">
        <h3 className='my-2'> Top Deals </h3>
        <div className='media-scroller snap-inline container-fluid'>
            <div className='media-element card1-img' >
                <img src='https://m.media-amazon.com/images/I/61M5w4HMIJL._AC_UY218_.jpg' alt='iphone' />
                <Link to="" className="title my-3"> Iphone 12-256GB</Link>
            </div>
            <div className='media-element card1-img '>
                <img src='https://m.media-amazon.com/images/I/61if22pWHbL.__AC_SX300_SY300_QL70_FMwebp_.jpg' alt='iphone' />
                <Link to="" className='title  my-3'> Iphone 12 128GB </Link>
            </div>  
            <div className='media-element card1-img'>
                <img src='https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SX569_.jpg' alt='iphone' />
                <Link to="" className='title my-3'> iPhone 12 Pro Max, 256GB</Link>
            </div>  
            <div className='media-element card1-img '>
                <img src='https://m.media-amazon.com/images/I/81UFHe-hH5L._AC_SX466_.jpg' alt='Macbook' />
                <Link to="" className='title my-3'> Apple 2023 MacBook Air</Link>
            </div>  
         
            <div className='media-element card1-img '>
                <img src='https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_SX425_.jpg' alt='Macbook' />
                <Link to="" className='title my-3'> Apple 2023 MacBook Pro</Link>
            </div>  
            <div className='media-element card1-img '>
                <img src='https://m.media-amazon.com/images/I/51eOztNdCkL._AC_UY218_.jpg' alt='Macbook' />
                <Link to="" className='title my-3'>Sony PlayStation5</Link>
            </div>  
       
            
        </div>



      
    </div>
  )
}

export default Scrollable;
