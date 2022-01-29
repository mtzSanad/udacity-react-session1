import React from 'react';
import  './ShoppingItem.css'

const ShoppingItem = () => {
  const headerName = "T-shirt1";  
  const imgSrc = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

  const colorArray =['green','red','yellow']

  return <div className='card'>
      <header className="card-header">
        {headerName}
      </header>
      <section className="card-body">
        <img className="img" src={imgSrc} alt={headerName} />
        <div className="box-container">
            {colorArray.map( element => (<div className={`small-box ${element}`}></div>) )}
        </div>
      </section>
      <button className='full-button'>Buy</button>
  </div>;
}

export default ShoppingItem;
