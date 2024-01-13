import { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
const Home = () => {

  const[products,setProducts] = useState([])
  const fetchProducts = async()=>{

    const response = await axios.get("https://65a0f676600f49256fb0978c.mockapi.io/products")
    setProducts(response.data)
  }


useEffect(()=>{
fetchProducts()
},[])
console.log(products)
  return (
    <>
          <div className="landing-page">

    {
      products.map((product)=>{
        return(
          <div key= {product.id}className="card">
      <img src={product.productImage}  alt="Card Image" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.ProductName}</h2>
        <p className="card-text">{product.ProducDescrioption}</p>
        <h2 className='card-material'>{product.productMaterial}</h2>
      </div>
    </div>

        )
      })
    }
    </div>

    </>
  )
}

export default Home