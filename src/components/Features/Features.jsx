import "./Features.scss";
export default function Features(){
    return(
        <div className="col-12" id="FeaturesDiv">
            <div className="col-3 FDiv Feature">
                <img src={require('./img1.png')}/>
                <h1>Modern Feature</h1>
                <p>Powered by the latest advancements in processing technology, our VR system delivers</p>
            </div>
            <div className="col-3 FDiv">
                <img src={require('./img2.png')}/>
                <h1>User Friendly</h1>
                <p>Seamless motion tracking ensures that your every move is accurately replicated in the virtual space.</p>
            </div>
            <div className="col-3 FDiv">
                <img src={require('./img3.png')}/>
                <h1>24/7 Support</h1>
                <p>Our VR technology invites you to step beyond the limits of reality and into your future world</p>
            </div>
        </div>
    );
}