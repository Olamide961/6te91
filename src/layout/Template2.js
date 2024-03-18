import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header2 from "../component/Header2";
import Footer2 from "../component/Footer2";
import Tech from "../component/pages/Tech";
import Media from "../component/pages/Media";
import Culinary from "../component/pages/Culinary";
import Service from "../component/pages/Service";


function TemplateB () {
  return (
    <>
    <Header2 />
    <Outlet />
    <Footer2 />
    </>
  );
}

export default TemplateB;