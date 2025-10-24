import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React, { useState } from "react";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import SearchBar from "./components/SearchBar";

function App() {
  const initialProducts = [
    { name: "IPhone 14", price: 99999, quantity: 0 },
    { name: "Redmi Note 12", price: 19999, quantity: 0 },
  ];

  const [productList, setProductList] = useState(initialProducts);
  const [totalAmount, setTotalAmount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const incrementQuantity = (index) => {
    const newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
    setTotalAmount(totalAmount + newProductList[index].price);
  };

  const decrementQuantity = (index) => {
    const newProductList = [...productList];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      setTotalAmount(totalAmount - newProductList[index].price);
    }
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    const newProductList = productList.map((p) => ({ ...p, quantity: 0 }));
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    const newProductList = [...productList];
    const removedAmount =
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(totalAmount - removedAmount);
  };

  const addItem = (name, price) => {
    const newProductList = [...productList, { name, price, quantity: 0 }];
    setProductList(newProductList);
  };

  const totalItems = productList.reduce((acc, item) => acc + item.quantity, 0);
  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar totalItems={totalItems} />
      <main className="container mt-4">
        <AddItem addItem={addItem} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ProductList
          productList={filteredProducts}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
