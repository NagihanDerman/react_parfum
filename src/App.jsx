import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Product from "./pages/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
