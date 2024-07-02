import { useState } from "react";
import "./Dashboard.scss";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function Dashboard() {
const [counterOn,setcounterOn]=useState(false);
    return (
        <div className="col-12" id="DashboardDiv">
            <div className="col-3 DB">
                <div className="col-12" id="content1">

                    <img src={require("./robot.png")} />
                    <ScrollTrigger onEnter={()=>setcounterOn(true)} >
                    <h1 className=" H1">
                        {counterOn&& <CountUp start={0} end={15} duration={2.75} delay={0} preserveValue='true'/>}
              
                       </h1>
                        </ScrollTrigger>
                    <h1 className="TheH1">YEARS OF<br /><span>EXPERIENCE</span> </h1>

                </div>
                <div className="col-12" id="content2">
                    <img src={require("./person1.png")} />
                </div>
            </div>
            <div className="col-3 DB">
                <div className="col-12" id="content3">
                    <img src={require("./person2.png")} />
                </div>
                <div className="col-12" id="content4">
                    <img src={require("./robot 2.png")} />
                    <ScrollTrigger onEnter={()=>setcounterOn(true)} >
                    <h1 className=" H1">
                        {counterOn&& <CountUp start={0} end={99} duration={2.75} delay={0}/>}
                    %
                        </h1>
                        </ScrollTrigger>
                    <h1 className="TheH1">POSITIVE <br />REVIEWS  </h1>
                </div>
            </div>
            <div className="col-3 DB">
                <div className="col-12" id="content5">
                    <img src={require("./robot 3.png")} />
                    <ScrollTrigger onEnter={()=>setcounterOn(true)} >
                    <h1 className=" H1">
                        {counterOn&& <CountUp start={0} end={30} duration={2.75} delay={0}/>}
                       K
                        </h1>
                        </ScrollTrigger>
                    <h1 className="TheH2">USER<br /><span>WORLDWIDE</span> </h1>
                </div>
                <div className="col-12" id="content6">
                    <img src={require("./person3.png")} />
                </div>
            </div>
        </div>
    );
    
}