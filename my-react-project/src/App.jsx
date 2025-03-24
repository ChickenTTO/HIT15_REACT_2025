import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
function App() {
  let products = [
    { name: "iPhone 15", price: "25,000,000 VND" },
    { name: "MacBook Air M2", price: "32,000,000 VND" },
    { name: "iPad Pro", price: "28,000,000 VND" },
  ];
  const [productCount, setProductCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const handleAddProduct = (index) => {
    setProductCount((p) => p + 1);
    const addedProduct = { name: products[index].name, count: 1 };
    for (let i = 0; i < cartProducts.length; i++) {
      if (cartProducts[i].name === addedProduct.name) {
        cartProducts[i].count++;
        return;
      }
    }
    setCartProducts((c) => [...c, addedProduct]);
  };
  const handleProductIcrement = (index) => {
    cartProducts[index].count++;
    setProductCount((p) => p + 1);
  };
  const handleProductDecrement = (index) => {
    cartProducts[index].count--;
    if (cartProducts[index].count === 0) {
      cartProducts.splice(index, 1);
    }
    setProductCount((p) => p - 1);
  };
  return (
    <>
      <ProductList
        items={products}
        productCount={productCount}
        handleAddProduct={handleAddProduct}
      ></ProductList>
      <Cart
        cartProducts={cartProducts}
        productCount={productCount}
        handleProductIcrement={handleProductIcrement}
        handleProductDecrement={handleProductDecrement}
      ></Cart>
    </>
  );
}

export default App;