import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import CarDetail from "./pages/CarDetail/CarDetail";
import Contact from "./pages/Contact/Contact";
import Favorites from "./pages/Favorites/Favorites";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars/:id" element={<CarDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default App;