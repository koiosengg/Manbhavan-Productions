import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <SocialSidebar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
