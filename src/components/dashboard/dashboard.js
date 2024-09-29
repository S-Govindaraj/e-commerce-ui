import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import getProduct from "../../api/getProduct.service";
import Header from "../header/header";
import Product from "../Product/product";
import './dashboard.css';

function Dashboard() {
  const [products, setProducts] = useState([]);  // state to store products
  const [isLoading, setIsLoading] = useState(false);  // loading state
  const location = useLocation();  // get the current route

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);  // start loading
      try {
        const response = await getProduct.getProductList();
        debugger
        setProducts(response.data.data);  // set fetched products to state
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);  // stop loading
      }
    };

    fetchData();  // fetch products when component mounts
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
         
          <Route path="product" element={<Product />} />
        </Routes>
      </div>
      {location.pathname === '/cart' && (
      <div className="products">
        {isLoading ? (  // show loading text if products are being fetched
          <p>Loading products...</p>
        ) : (
          products.length > 0 ? (  // if products exist, map through them
            <div className="image-grid">
            {products.map((product, index) => (
              <div><div key={index} className="image-item">
                <img className="imageClass" src={product.image} alt={`Product ${index}`} />
              </div>
              <div className='details'>
                  <h6>{product.name}</h6>
                  <div className='amountAndButton'>
                  <h6 className='productName'>{`Rs-${product.amount}`}</h6>
                  <div className='addToCart'><button>Add to Cart</button></div>
                  </div>
                </div></div>
            ))}
          </div>
          
          ) : (
            <p>No products available</p>  // if no products
          )
        )}
      </div>
      )}
    </>
  );
}

export default Dashboard;
