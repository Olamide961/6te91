import "./assest/Footer.css";


function Footer() {
    const copyright = String.fromCodePoint(0x00A9)

    
    return (
        <>
         <div className="bottom-container">
          
          <div class="row">
            <div className="btn-copyright">
            <p>6te9 LTD<span>{`${copyright}`}</span>2024 <span>|</span> <span>sitemap</span></p>

            </div>

            <div className="bottom-navbar">
              <div className="footer-menu">
                <a href="About">About Us </a>
                <a href="Product">Product</a>
                <a href="Contact">Contact Us</a>
              </div>
            </div>
          </div>
      </div>
        </>
    );
}

export default Footer;