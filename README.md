# Udacity React Nano-degree Session 1

## Introduction

This repository is aimed to walk you through creating a basic component and update some of its parts. You can follow the step by step approach by checking branches that shows how we start with basic component and going through the problem that forces us to finally use the useState hook.

If you have no time I have included the final snap shot of code with comments that telling you what you should do and what you should not do.

Always rememeber coding is fun so have fun 😃

## What is component in React?

- React is JS library that makes building complex interactive ui easy!
- React uses declaritive way over traditional imparitive way. You define the desiered state and react update the DOM for you.
- Check out react [website](https://reactjs.org/)
- Exercise try to figure out components in [Amazon](https://www.amazon.eg/)
- Reusability is good DRY.
- Component is combination of html,css and JS.

## Creating react application

- Simple way is to use 
```
    npx create-react-app application-name
```
- Then you can start your project using 
```
    npm start
```
- If you are importing project you will need to install the dependency using 
```
    npm install
```

## Let's explore the created project structure!

## What is JSX

JSX is sytax sugar to help us write a simpler code that will be transformed to JS.

## The old way of handling DOM without react

Check out [wc3School](https://www.w3schools.com/jsref/met_node_appendchild.asp) 

## Building first component

1. Design wireframe.
2. Create component folder.
3. Categorize your components under component folder and create subfolders if required.
4. Note that attribute names like className insted of class because it is reserved by js syntax.
5. We can run **JS expressions** inside {}.
6. Use state hook for component updatable parts.

## Code snippets

App.js

```js
import "./App.css";
import ShoppingItem from "./component/ShoppingItem";

const App = () => {
  const tshirtImage =
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";
  const jacketImage =
    "https://media.istockphoto.com/photos/young-handsome-guy-in-a-warm-knitted-clothes-against-a-background-of-picture-id1300962106?k=20&m=1300962106&s=612x612&w=0&h=TkNDPpgEDHYG6xXG-f6x7Gg7dF9EMKQTFpSkbOpIniM=";
  return (
    <div className="container">
      {/*Now we are passing params to our dumy component*/}
      <ShoppingItem headerName="T-Shirt2" imgSrc={tshirtImage} />

      {/*We can create more component*/}
      {/*We have to wrap numbers between {}*/}
      <ShoppingItem headerName="Jacket" imgSrc={jacketImage} itemStock={10} />
    </div>
  );
};

export default App;
```

ShoppingItem.js

```js
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
```


