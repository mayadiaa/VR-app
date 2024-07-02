import './Meta.scss';
import { Link } from "react-router-dom";
export default function Meta(props) {
    return (
        <div className='col-12' id='MetaDiv'>
           <div className='col-3 Meta'>
            <Link to='./archPlacePage1'>
             <img src={require('./p1.jpg')} />
            </Link>
             <h4><span>living</span> room</h4>
             <p>cozy seating arrangement made up of mismatched furnishings</p>
    </div>
    <div className='col-3 Meta'>
            <Link to='./archPlace2'>
             <img src={require('./p2.jpg')}/>
            </Link>
             <h4><span>bed</span>room</h4>
             <p>cozy feel that can sometimes be lost in a room with an expansive view to the outdoors</p>
    </div>
    <div className='col-3 Meta'>
            <Link to='./archPlace3'>
             <img src={require('./p7.jpg')} />
            </Link>
            <h4><span>bath</span>room</h4>
            <p>elegant clawfoot tub, shower skylight and recessed ceiling fan</p>
                </div>
    <div className='col-3 Meta'>
            <Link to='./archPlace4'>
             <img src={require('./p10.jpg')} />
            </Link>
             <h4><span>bath</span>room</h4>
             <p>Luxurious King bed with ensuite bathroom and French Doors that lead out to deck/hot tub area</p>
    </div>
    <div className='col-3 Meta'>
            <Link to='./archPlace5'>
             <img src={require('./p8.jpg')} />
            </Link>
             <h4> <span>modern</span> office </h4>
             <p>the kitchen area of a modern office with a long wooden table and chairs</p>
    </div>
    <div className='col-3 Meta'>
            <Link to='./archPlace6'>
             <img src={require('./p5.jpg')}/>
            </Link>
             <h4>cozy<span> living </span>room</h4>
             <p>vintage-style lighting, and a perfect sense of proportion that creates a cozy sitting area </p>
    </div>
   </div>

    );
}