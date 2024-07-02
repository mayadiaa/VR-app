import './MetaTours.scss';
import { Link } from "react-router-dom";
export default function MetaTours(props) {
    return (
        <div className='col-12' id='MetaDiv'>
           <div className='col-3 Meta'>
            <Link to='./tour1'>
            <img  src={require('./t1.jpg')}/>
            </Link>
             <h4> JOALI <span>Maldives</span> Luxury Resort</h4>
             <p>If you are looking to visit the Maldives, in order to speak to a Maldives travel expert who has actually visited this resort </p>
    </div>
    <div className='col-3 Meta'>
            <Link to='./tour2'>
             <img  src={require('./t2.jpg')} />
            </Link>
             <h4><span>Safari</span> Park</h4>
             <p>he Primorsky Safari Park was created in 2007 through the efforts of Dmitry Mezentsev, who became its director</p>
    </div>
    <div className='col-3 Meta'>
            <Link to='./tour3'>
             <img   src={require('./t3.jpg')}/>
            </Link>
            <h4>Saint Petersburg,<span> Russia</span></h4>
            <p>Saint Petersburg is one of the most famous and beautiful cities of the world. It is the second largest city in Russia after its capital, Moscow.</p>
                </div>
    <div className='col-3 Meta'>
            <Link to='./tour4'>
             <img  src={require('./t4.jpg')} />
            </Link>
             <h4><span>Pyramids</span> of Egypt </h4>
             <p> Explore the iconic Giza Pyramids of Egypt, stand in awe of their precision in alignment, and discover the cultural richness of diverse pyramid styles around the world.</p>
    </div>
    <div className='col-3 Meta'>
            <Link to='./tour5'>
             <img  src={require('./t2 copy.jpg')} />
            </Link>
             <h4>Sand Bar <span>Maldives</span>  </h4>
             <p>Endless expanses of water stretching to the horizon, hundreds of shades of blue and tiny coral atolls with white sand: it’s all about the Maldives!</p>
    </div>
    <div className='col-3 Meta'>
            <Link to='./tour6'>
             <img src={require('./t6.jpg')}/>
            </Link>
             <h4><span> Kaaba,</span> Makkah</h4>
             <p>The Makka Munawwar was originally built by prophet Muhammad in the first year of the Hijrah , after his arrival in Medina.</p>
    </div>
   </div>

    );
}