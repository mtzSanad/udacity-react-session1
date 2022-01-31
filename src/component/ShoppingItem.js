import React from 'react';
import  './ShoppingItem.css'

const ShoppingItem = (props) => {
  //Destructuring props object
  const {headerName, imgSrc} = props;

  const colorArray =['green','red','yellow']

  return <div className='card'>
      <header className="card-header">
        {headerName}
      </header>
      <section className="card-body">
        <div className="box-container">
          <img className="img" src={imgSrc} alt={headerName} />
          <div className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores et labore numquam modi nemo saepe explicabo maiores exercitationem eveniet?</div>
        </div>
        <div className="box-container">
            {colorArray.map( element => (<div className={`small-box ${element}`}></div>) )}
        </div>
      </section>
      <button className='full-button'>Buy</button>
  </div>;
}

export default ShoppingItem;
