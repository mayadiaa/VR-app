import "./TheHeader.scss";
import BgImg from "../photos/bg.jpg";
import video from "./video_overlay.mp4";

export default function TheHeader(){
    return(
        <div id="TheHeader" className="col-12">
       
          <video src={video} autoPlay muted loop></video>
          <div id="Content">
            <h1>EXPLORE BEYOND BOUNDARIES <br/>WITH VIRTUAL REALITY</h1>
            <p>Step into a universe where the constraints of the physical realm vanish,<br/> replaced by boundless landscapes waiting to be discovered.</p>
          </div>
         
        </div>
    );

}