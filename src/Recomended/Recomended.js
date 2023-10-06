import React from 'react';
import Links from '../components/Buttons';

const Recomended = ({ handleClick }) => {
  return (

       <div className="recomended-container container-fluid">
        <Links onClickHandler={() => handleClick("")} title="All" />
        <Links onClickHandler={() => handleClick("iphones")} title="Iphones" />
        <Links onClickHandler={() => handleClick("macbook")} title="Macbook" />
        <Links onClickHandler={() => handleClick("gaming")} title="Games" />

      </div>

  );
};

export default Recomended;
