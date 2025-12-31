import { useState } from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Gallerypage from "./pages/Gallerypage";
import Eventpage from "./pages/Eventpage";
import Contactpage from "./pages/Contactpage";
import Footer from "./Footer";



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/gallery" element={<Gallerypage />} />
        <Route path="/event" element={<Eventpage />} />{" "}
        <Route path="/contact" element={<Contactpage />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
