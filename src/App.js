import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./conponents/Cart";
import Footer from "./conponents/Footer";
import NavBar from "./conponents/NavBar";
import NavMenu from "./conponents/NavMenu";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Routes>
          <Route path="/products/:handle" element={<ProductPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
