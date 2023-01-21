import React from "react";
import { RouterWrapper } from "./router/RouterWrapper";
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <RouterWrapper />;
    </CartContextProvider>
  );
};

export default App;
