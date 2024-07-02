import "./Ready.scss";
import { Link } from "react-router-dom";
export default function Ready(){
    return(
        <div className="col-12" id="ReadyDiv">
            <div className="col-5 Ready">
                <h1>Ready To Go<span> Next</span><p className="TheP"> Level ?</p></h1>
                <p>Embark on adventures traverse landscapes that exist only in dreams, and connect to breathe within the ImmersiaVR</p>
            <Link to="/service"><button>GET STARTED</button></Link>
            </div>
           
                <img src={require('./1.png')}/>
     
        </div>
    );
}
