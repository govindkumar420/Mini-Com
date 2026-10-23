import { BrowserRouter, Route, Routes } from "react-router";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { RootLayout } from "./components/common/RootLayout";
import { Error404 } from "./pages/Error404";
import "./App.css";
import { ProductAPI } from "./pages/ProductAPI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
          <Route path="product-api" element={<ProductAPI />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
