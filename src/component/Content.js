import "./assest/Content.css";
import { Triangle } from 'react-shapes';

function Content() {
    return (
        <>
        <div className="content">
            <div className="nav-content">
                <p className="nav-content-para">optimize<span><Triangle width={35} height={35} /></span> evolve<span><Triangle width={35} height={35} /></span>
                    transend</p>
            </div>
        </div>

        </>
    );
}

export default Content;