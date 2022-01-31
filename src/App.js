import './App.css';
import ShoppingItem from './component/ShoppingItem';


const App = () => {
  const tshirtImage = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";
  const jacketImage = "https://media.istockphoto.com/photos/young-handsome-guy-in-a-warm-knitted-clothes-against-a-background-of-picture-id1300962106?k=20&m=1300962106&s=612x612&w=0&h=TkNDPpgEDHYG6xXG-f6x7Gg7dF9EMKQTFpSkbOpIniM=";
  return (
    <div className='container'>
      {/*Now we are passing params to our dumy component*/}
      <ShoppingItem headerName="T-Shirt2" imgSrc={tshirtImage}/>

      {/*We can create more component*/}
      <ShoppingItem headerName="Jacket" imgSrc={jacketImage}/>
    </div>
  );
}

export default App;
