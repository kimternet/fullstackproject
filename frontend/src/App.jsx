import { Box, Button } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import { useProductStore } from "./store/product";
import { useEffect } from "react";


function App() {
  const { products } = useProductStore()

  useEffect(() => {
    const fetchProducts = async () => {
      
    }
  })

  return (
    <Box minH={"100vh"}>
      {<Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
