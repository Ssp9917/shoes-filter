import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Product from './components/Product';
import data from './components/data';

function App() {
  const [product,setProduct] = useState([])
  const [category,setCategory] = useState('All')
  const [color,setColor] = useState('All')
  const [search,setSearch] = useState('')



  useEffect(
    ()=>{
      setProduct(data)
    },[]
  )
  // console.log(product)
  // console.log(category)


  return (
    <div className="container">
      <div className='row d-flex'>
      <Filter product={product} categoryHandler={setCategory} category={category} colorHandler={setColor}/>
      <Product product={product} category={category} color={color} search={search} setSearch={setSearch}/>
      </div>

    </div>
  );
}

export default App;
