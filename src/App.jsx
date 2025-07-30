import { Weatherapp } from "./Pages/Weatherapp";
import { Aboutme } from "./Pages/Aboutme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Weatherapp />} />
        <Route path="/Aboutme" element={<Aboutme />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
