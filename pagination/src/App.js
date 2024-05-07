import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100")
    const data = await res.json();
    if (data && data.products) {
      setProducts(data?.products)
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])


  console.log(products)





  return (
    <div className="">
      {
        products.length>0 && <div className='products'>
          {
            products.map((product)=>{
              return <span className='products__single' key={product.key}>
                <img src={product.thumbnail} alt={product.title}/>
                <p>
                  {product.title}
                </p>
              </span>
            })
          }
        </div>
      }
    </div>
  );
}

export default App;
