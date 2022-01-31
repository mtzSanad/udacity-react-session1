import React, { useState } from "react";
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

  //Crating itemStock as component state using useState hook
  //useState parameter is used only once for initialization if the state is initialized it will not re-initialize again.
  //I will be using diffrent variables to handle itemStock that will act as component state
  //Make sure you are using const here, so you don't accedintly update the variable direct without the setter
  const [stock, setStock] = useState(itemStock);

  //Function that is responsible of buying items, which will decrease the stockItem count till zero.
  const buyItem = (event) => {
    if (stock > 0) {
      console.log(`Stock before is ${stock}`);
      //I am relying on stock state not itemStock
      //IMPORTANT - This will not work because still react dosn't know you have changed the state
      //So you must use the setter and not directly change the state
      //stock = stock - 1;

      //This should work properly but this is not the best practice
      //React batch the updates and dosen't excute state update immediatly, it first check the priority and can later do the update
      //setStock(stock - 1);

      //Use this way always it will make sure you have the correct previous state
      setStock((prevStock) => prevStock - 1);

      //This will not be affected even if we have decreased stock by 1, WHY?
      //As we mentioned above react batch these update and do it later, you properly will not notice this in most cases
      console.log(`Stock after is ${stock}`);
    }
  };

  /**   HOW-YOU-SHOULD-NOT update updatable component parts! use component state.
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
   */

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
            <div className="stock">Stock : {stock}</div>
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
