import './MetaGame.scss';
import { Link } from "react-router-dom";
export default function MetaGame() {
    return (
        <div className='col-12' id='MetaDiv1'>
           <div className='col-3 Meta'>
            <Link to='game1'>
            <img src={require("./game1.webp")}/>
            </Link>
             <h4>Roller <span>Coaster</span> Rides</h4>
             <p>VR roller coaster rides in 360 degree interactive
             360° content is immersive material that allows a panoramic view of reality
             </p>
    </div>
    <div className='col-3 Meta'>
            <Link to='game2'>
             <img src={require("./game3.jpg")}/>
            </Link>
             <h4>360° <span>FEAR </span> OF HEIGHTS </h4>
             <p>Are you brave enough to rescue a German Shepherd that is stuck on a plank high up between buildings?</p>
    </div>
    <div className='col-3 Meta'>
            <Link to='game3'>
             <img src={require('./game2.jpg')} />
            </Link>
            <h4>Deep <span>Ocean</span> Horror</h4>
            <p>venture deep into the ocean and discover creatures from the past and present allows a panoramic view of reality</p>
                </div>
                </div>
                );
    }