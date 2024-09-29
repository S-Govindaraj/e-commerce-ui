import "./product.css";
function Product() {
    return (
      <>
      <h3>Cart Products</h3>
      <div className="container">
        <div className="cart-product">
          <div className="img">
            <img
              src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="dummy"
            />
        </div>
          <div className="cart-product-details">
          <h5>Product Name</h5>
          <p>price Rs:45</p>
        </div>
      </div>
        <div className="cart-product">
          <div className="img">
            <img
              src="https://images.pexels.com/photos/518530/pexels-photo-518530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="dummy"
            />
        </div>
          <div className="cart-product-details">
          <h5>Product Name</h5>
          <p>price Rs:45</p>
        </div>
      </div>
        <div className="cart-product">
          <div className="img">
            <img
              src="https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="dummy"
            />
        </div>
          <div className="cart-product-details">
          <h5>Product Name</h5>
          <p>price Rs:45</p>
        </div>
      </div>
      </div>
      <h3>Total Rs: 135</h3>
      </>
    );
  }
  
  export default Product;
  