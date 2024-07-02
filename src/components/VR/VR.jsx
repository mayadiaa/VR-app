import { Link } from "react-router-dom";
import "./VR.scss";
export default function VR() {
    return (
        <div className="col-12" id="VRDiv">
            <div className="col-3 VR">
                <Link to="/gaming">
                    <div className="col-12 TheImg">

                        <img src={require('./images.jpg')} />
                                                                                                                                                                                  
                    </div>
                    <h1>GAMING VR</h1>
                </Link>
            </div>
            <div className="col-3 VR">
                <Link to="/architecture">
                    <div className="col-12 TheImg">
                        <img src={require('./img3.jpg')} />
                    </div>
                    <h1>ARCHITECTURE VR</h1>
                </Link>
            </div>
            <div className="col-3 VR">
                <Link to="/tours">
                    <div className="col-12 TheImg">
                        <img src={require('./img4.png')} />
                    </div>
                    <h1>TOURS VR</h1>
                </Link>
            </div>
        </div>
    );
}