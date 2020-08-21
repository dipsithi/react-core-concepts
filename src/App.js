import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Jashim', 'Manna', 'Salman', 'Bappy', 'Shuvo']

  const players = ['Neymar', 'Messi', 'Ronaldo', 'Kaka', 'Ronaldinho', 'Roberto']
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'illustrator',price:'$60.99'},
    {name:'PDF reader', price:'$6.99'},
    {name: 'premier El', price: '$249.99'}
  ]

  const productNames = products.map(product => product)
  console.log(productNames)

  const nayokNames = nayoks.map(nayok => nayok)
  console.log(nayokNames)

  const playerNames = players.map(player => player)
  console.log(playerNames)

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          
          {
            products.map(product => <li>{product.name}</li>)
          }

          {
            products.map(product => <Product product = {product}></Product>)
          }

          {
            players.map(player => <li>{player}</li>)
          }
        </ul>

        

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product> */}
        {/* <Persons name ="Munna" job="footbal"></Persons>
        <Persons name ="Masum" job="Dorshok"></Persons> */}
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease =() => setCount(count + 1);
  
  return (
    <div>
      <h1>Count:{count}</h1>
      <button style={{border: '2px solid red', backgroundColor:'yellowgreen', fontWeight:'bold'}} onMouseMove = {handleIncrease}>Increase</button>
      <button style={{border: '2px solid red', backgroundColor:'yellowgreen', fontWeight:'bold'}}onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers]=useState([]);
  useEffect(() =>{
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul style={{textAlign:'left'}}>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid grey',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
    
  }
return (
  <div style={productStyle}>
    <h3>{props.product.name}</h3>
    <h5>{props.product.price}</h5>
    <button>Buy now</button>
  </div>
)
}
function Persons (props){
  return (
    <div style={{border:'2px solid red', width:'400px', margin:'10px'}}>
      <h3>My Name:{props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}
export default App;
