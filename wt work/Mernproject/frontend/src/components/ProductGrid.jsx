import React, { useEffect, useState } from 'react'
// import "./ProductGrid.css"
const ProductGrid = () => {
    const [data, setData] = useState([])
    const [added, setAdded] = useState({})
    useEffect(()=>{
        fetch("http://localhost:8000/products")
        .then((res)=>res.json())
        .then((data)=>{
            setData(data.data)
            console.log(data.data)
        })
        .catch((err)=>console.log(err))
    },[])

  const handleClick = (product) =>{
    let prevProducts = JSON.parse( sessionStorage.getItem("productsData")) || []
    prevProducts.push(product)
   
    setAdded((prev)=>({
    ...prev,
    [product._id] : true
   }))

    sessionStorage.setItem("productsData",  JSON.stringify(prevProducts) )
  }
  return (
    <div className='product-grid $blue-600 ' >
        {
            data?.map((product)=>(
                <div key={product._id} className='product-card text-white bg-dark ' > 
                      <div className="col ">
                        <div clasName ="card h-100">
                            <img src={product.imageUrl} className="card-img-top" alt={product.name}/> 
                        <div className="card-body">
                             <h3 className='card-title' >{product.name}</h3>
                        <button  
                    style={{cursor: added[product._id] ? "not-allowed" : "pointer"}} 
                    disabled={added[product._id]} 
                    onClick={()=>handleClick(product)} 
                    className="btn btn-primary">
                        {added[product._id] ? "Added" : "Add to cart"}
                        </button>
       
       
      </div>
    </div>
  </div>
                </div>
            ))
        }

    </div>
  )
}

export default ProductGrid