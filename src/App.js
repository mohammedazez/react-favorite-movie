import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Components
import Header from "./Components/Header";

// Import Page
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <Header />
      <Cart />
    </div>
  );
}

export default App;
