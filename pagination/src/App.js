import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const [total, setTotal] = useState(0);


  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${ ( page*10 ) - 10}`)
    const data = await res.json();
    if (data && data.products) {
      setProducts(data?.products)
    }
    setTotal(data.total)
  }

  useEffect(() => {
    fetchProducts();
  }, [page])


  console.log(products)


  const selectPageHandler =(selectedPage)=>{
    if(
      selectedPage >=1 &&
      selectedPage <= total &&
      selectedPage !== page
    )
    setPage(selectedPage)
  }





  return (
    <div className="">
      {
        products.length > 0 && <div className='products'>
          {
            products.map((product) => {
              return <span className='products__single' key={product.key}>
                <img src={product.thumbnail} alt={product.title} />
                <p>
                  {product.title}
                </p>
              </span>
            })
          }
        </div>
      }

      {
        products.length > 0 && <div className='pagination'>
          <span 
          className={page > 1 ?"" :"pagination__disable"}
          onClick={()=>selectPageHandler(page-1)}>
            Left
          </span>
            {
              [...Array(total/10)].map((_,i)=>{
                 return <span
                 className={page===i+1?"pagination__selected":""}
                 onClick={()=>selectPageHandler(i+1)} key={i} >{i+1}</span>
              })
            }
          <span 
          className={page < total / 10 ?"" :"pagination__disable"}
          onClick={()=>selectPageHandler(page+1)}>
            Right
          </span>
        </div>
      }
    </div>
  );
}

export default App;
