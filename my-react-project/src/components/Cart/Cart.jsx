function Cart(props) {
    const cartProducts = props.cartProducts;
    return (
      <div className="cart">
        {props.productCount === 0 ? (
          "Giỏ hàng đang trống..."
        ) : (
          <>
            <h2>🛍️ Giỏ hàng của bạn</h2>
            {cartProducts.map((product, index) =>
  
                <div className="cart-item" key={index}>
                  <p>
                    {product.name} - {product.count} sản phẩm
                  </p>
                  <button onClick={() => props.handleProductIcrement(index)}>+</button>
                  <button onClick={() => props.handleProductDecrement(index)}>-</button>
                </div>
            )}
          </>
        )}
      </div>
    );
  }
  
  export default Cart;