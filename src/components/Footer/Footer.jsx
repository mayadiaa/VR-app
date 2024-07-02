import "./Footer.scss";
import { Link } from "react-router-dom";
export default function Footer(){
    return(<div className="col-12" id="Footer">
        <div className="col-4 Foot">
            <img className='Image'src={require('./Logo-1.png')}/>
            <p>Step into a universe where the constraints of the physical realm vanish, replaced by boundless landscapes waiting to be discovered.</p>
        <h1 className="TheH1">Download Our App</h1>
        <div className="imgDiv">
        <img  src={require('./Google-Play.png')}></img>
        <img  src={require('./App-Store.png')}></img>
        </div>
        </div>
        <div className="col-2 Foot Div2">
            <h1>Menu</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/faq’s">FAQ’s</Link>
                <Link to="/service">Service</Link>
            </nav>
        </div>
        <div className="col-2 Foot Div3">
            <h1>Company</h1>
            <nav>
                <ul>
                    <li>Carrers</li>
                    <li>Culture</li>
                    <li>Help Centre</li>
                    <li>Support</li>
                </ul>
            </nav>
        </div>
        <div className="col-2 Foot">
            <div className="ContentDiv">
            <div  className="Image1">
            <img src={require('./building.png')}></img>
            </div>
            <h1>Headquarters</h1>
            <p>Street Centre 99, London UK</p>
            </div>
            <div className="ContentDiv1">
            <div  className="Image2">
            <img   src={require('./telephone.png')}></img>
            </div>
            <h1>General <span> Inquiries</span></h1>
            <p>+2 7689101112</p>
            </div>
            <div className="ContentDiv3">
                <div  className="Image3">
            <img  src={require('./mail.png')}></img>
            </div>
            <h1>Email Us</h1>
            <p>vireal.lorem.ipsum</p>
            </div>
        </div>
    </div>);
}