import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
