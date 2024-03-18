import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Template from "./layout/Template";
import Home from "./component/pages/Home";
import Product from "./component/pages/Product";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Tech from "./component/pages/Tech";
import TemplateB from "./layout/Template2"
import Culinary from "./component/pages/Culinary";
import Media from "./component/pages/Media";
import Service from "./component/pages/Service";


function App () {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
        </Route>

        <Route element={<TemplateB />} >
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Media" element={<Media />} />
          <Route path="Culinary" element={<Culinary />} />
          <Route path="Service" element={<Service />} />
          <Route path="/About" element={<About />} />
        </Route> 
      </Routes>
    </Router>
    </>
  );
}

export default App;