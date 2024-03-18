import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../component/Header";
import Footer from "../component/Footer";
import Home from "../component/pages/Home"; 
import Product from "../component/pages/Product";
import TemplateB from "./Template2";
import About from "../component/pages/About";
import Contact from "../component/pages/Contact";
import Header2 from "../component/Header2";
import Footer2 from "../component/Footer2";
import Media from "../component/pages/Media";
import Culinary from "../component/pages/Culinary";
import Service from "../component/pages/Service";
import Tech from "../component/pages/Tech";




function Template () {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>

  );
}
  

export default Template;
