import { useState } from "react";
import "./AboutDashboard.scss";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function AboutDashboard() {
    const [counterOn,setcounterOn]=useState(false);
    return (
        <div className="col-12" id="AboutDashboard">
            <div className="col-3 AboutDash">
                <div className="col-5 AD1">
                    <div className="col-12 aboutDiv" id="ad1">
                        <img src={require("./ro.png")}></img>
                    </div>
                    <div className="col-12 aboutDiv ad2">
                    <ScrollTrigger onEnter={()=>setcounterOn(true)} >
                    <h2 className=" H1">
                        {counterOn&& <CountUp start={0} end={56} duration={2.75} delay={0} preserveValue='true'/>}
              K
                       </h2>
                        </ScrollTrigger>
                        <h4>HAPPY<br /> CLIENT</h4>
                    </div>
                </div>
                <div className="col-5 AD1" id="ad3"></div>
                <div className="col-11 AD2">
                    <div className="col-5">
                        <img src={require('./ro2.png')}></img>
                    </div>
                    <div className="col-5">
                    <ScrollTrigger onEnter={()=>setcounterOn(true)} >
                    <h2 className=" H1">
                        {counterOn&& <CountUp start={0} end={120} duration={2.75} delay={0} preserveValue='true'/>}
              K
                       </h2>
                        </ScrollTrigger>
                        <h4>PRODUCT SOLD</h4>
                    </div>
                </div>
            </div>
            <div className="col-3 AboutDash">
                <div className="col-12" id="About1">

                </div>
            </div>
            <div className="col-3 AboutDash">
                <div className="col-11" id="Div1">
                    <div className="col-5">
                        <img src={require('./ro3.png')}></img>
                    </div>
                    <div className="col-5">
                    <ScrollTrigger onEnter={()=>setcounterOn(true)} >
                    <h2 className=" H1">
                        {counterOn&& <CountUp start={0} end={49} duration={2.75} delay={0} preserveValue='true'/>}
              +
                       </h2>
                        </ScrollTrigger>
                        <h4>POPULAR FEATURES</h4>
                    </div>
                </div>
                <div className="col-11" id="div2">
                    <div className="col-5 Imgdiv"></div>
                    <div className="col-6 contentdiv">
                        <div className="col-12" id="condiv1">
                        <ScrollTrigger onEnter={()=>setcounterOn(true)} >
                    <h2 className=" H1">
                        {counterOn&& <CountUp start={0} end={45} duration={2.75} delay={0} preserveValue='true'/>}
              K
                       </h2>
                        </ScrollTrigger>
                            <h4>COUNTRY CLIENT</h4>
                        </div>
                        <div className="col-12" id="condiv2">
                            <img src={require('./ro4.png')}></img>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}