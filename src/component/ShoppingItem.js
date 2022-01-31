import React from "react";
import "./ShoppingItem.css";

const ShoppingItem = (props) => {
  //Destructuring props object
  const { headerName, imgSrc } = props;
  //In case of itemStock was not sent, it will set a default of 5 pcs, we used let as we will change it later
  let { itemStock = 5 } = props;
  //Fixed color array
  const colorArray = ["green", "red", "yellow"];
  //Enhancing component code readability
  const colorComponent = colorArray.map((element, key) => (
    <div key={key} className={`small-box ${element}`}></div>
  ));

  //Function that is responsible of buying items, which will decrease the stockItem count till zero.
  //This function will not work correctly, because we are not using the state
  //Clicking this function will log and modify the itemStock but UI will not be affected! Why?
  //Because React dosn't know that we have changed the variable and we didn't told react to re-render!
  //Solution - we must rely on component states where react can listen to changes and update UI accordinally
  //Check session-1-5- branch
  const buyItem = (event) => {
    if (itemStock > 0) {
      itemStock = itemStock - 1;
      console.log(itemStock);
    }
  };

  return (
    <div className="card">
      <header className="card-header">{headerName}</header>
      <section className="card-body">
        <div className="box-container">
          <img className="img" src={imgSrc} alt={headerName} />
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            asperiores et labore numquam modi nemo saepe explicabo maiores
            exercitationem eveniet?
            <div className="stock">Stock : {itemStock}</div>
          </div>
        </div>
        <div className="box-container">{colorComponent}</div>
      </section>
      {/** Each react component has normal html event listeners as onListenerName*/}
      {/** Important Note we don't excute the function here we just set a refrence to it, the actual call will happen on click*/}
      <button onClick={buyItem} className="full-button">
        Buy
      </button>
      {/** We can re-write button component as following*/}
      {/** Again we are not excuting the function, we are creating anonymous function that takes the event and pass it to function when called*/}
      {/**<button onClick={(e)=>{buyItem(e)}} className="full-button">Buy</button>*/}
    </div>
  );
};

export default ShoppingItem;
