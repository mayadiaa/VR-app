import "./Glasses.scss";
import { Link } from "react-router-dom";
export default function Glasses(){
    return(
        <div className="col-12" id="GlassesDiv">
          <div className="col-5 Glasses">
            <img src={require('./vr-box.png')}/>
          </div>
          <div className="col-5 Glasses1">
            <h1><span>The Best</span> <br/> One For You</h1>
            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium vivamus elementum nisi.</p>
          <Link to="/purchase"><button>PURCHASE NOW</button></Link>
          </div>
        </div>
    );
}