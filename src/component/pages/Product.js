import React from "react";
import "../assest/Product.css";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function Product() {

   
    return (
        <>
        
        <div className="product">

            <div className="nav-content">
                <div className="nav-content-row">
                    <div className="content-img">
                    <img className="rectangles" src="" alt="" />
                    <Link className="rectangle-content" to="/Tech">6te9 tech</Link>
                    </div>

                    <div className="content-img">
                    <img className="rectangles" src="" alt="" />
                    <Link className="rectangle-content" to="/media">6te9 media</Link>
                    </div>

                    <div className="content-img">
                    <img className="rectangles" src="" alt="" />
                    <Link className="rectangle-content" to="culinary">6te9 Culinary</Link>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Product;