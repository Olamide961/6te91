import "./assest/Footer.css";


function Footer2() {
    const copyright = String.fromCodePoint(0x00A9)

    
    return (
        <>
        <div className="bottom-container">       
            <div class="row">
                <div className="btn-copyright">
                    <p>6te9 LTD<span>{`${copyright}`}</span>2024 <span>|</span> <span>sitemap</span></p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer2;