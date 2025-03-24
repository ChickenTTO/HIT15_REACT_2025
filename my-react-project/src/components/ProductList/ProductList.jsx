import { useState } from "react";
function ProductList(props) {
  const products = props.items;
  return (
    <div className="products-container">
      <h1>🛒 Giỏ hàng({props.productCount} sản phẩm)</h1>
      <div className="products">
        <h2>📦 Danh sách sản phẩm</h2>
        {products.map((product, index) => (
          <div className="product" key={index}>
            {product.name} - {product.price}
            <button className="add-btn" onClick={() => props.handleAddProduct(index)}>
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;