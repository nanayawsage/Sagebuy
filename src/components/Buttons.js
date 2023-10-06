import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({onClickHandler, value, title}) => {
  return (
    <Link onClick = {onClickHandler} value={value} className= "links my-2 me-2" >
     {title} 
    </Link>
  )
}

export default Links;
