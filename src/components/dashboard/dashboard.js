import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import addToCartService from "../../api/addToCart.service"; // Import your Add to Cart service
import getProduct from "../../api/getProduct.service";
import Header from "../header/header";
import Product from "../Product/product";
import './dashboard.css';

function Dashboard() {
  const [products, setProducts] = useState([]);  // state to store products
  const [isLoading, setIsLoading] = useState(false);  // loading state
  const [cartStatus, setCartStatus] = useState({});  // state to track if products are added to cart
  const location = useLocation();  // get the current route
  const navigate = useNavigate();  // navigation hook for redirection

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);  // start loading
      try {
        const response = await getProduct.getProductList();
        setProducts(response.data.data);  // set fetched products to state
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);  // stop loading
      }
    };

    fetchData();  // fetch products when component mounts
  }, []);

  // Function to handle adding product to cart
  const handleAddToCart = async (product) => {
    try {
      debugger  
      const payload = { productid: product._id };
      const response = await addToCartService.addToCart(payload);  // API call to add product to cart
      debugger
      if (response.status === 200) {
        // Update the cart status for the product to mark it as added
        setCartStatus((prevStatus) => ({
          ...prevStatus,
          [product.id]: true
        }));
        alert(`${product.name} added to cart successfully!`);
      } else {
        alert('Failed to add product to cart.');
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert('An error occurred while adding product to cart.');
    }
  };

  // Function to navigate to cart
  const goToCart = () => {
    navigate('/cart/product');  // redirect to the cart page
  };

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
              <div key={index}>
                <div className="image-item">
                  <img className="imageClass" src={product.image} alt={`Product ${index}`} />
                </div>
                <div className='details'>
                  <h6>{product.name}</h6>
                  <div className='amountAndButton'>
                    <h6 className='productName'>{`Rs-${product.amount}`}</h6>
                    <div className='addToCart'>
                      {cartStatus[product.id] ? (
                        <button onClick={goToCart}>Go To Cart</button>  // If added, show 'Go To Cart'
                      ) : (
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>  // Else, show 'Add to Cart'
                      )}
                    </div>
                  </div>
                </div>
              </div>
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
