import { useEffect } from "react";
import "./HomePage.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { WOW } from "wowjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { $Current_Width } from "../../store";
import { useRecoilState } from "recoil";
// import { AFrameRenderer, Marker } from 'aframe-react';
// import {Entity, Scene} from 'aframe-react';
// import Img from "./vr img.jpg.jpg";
import MainHeader from "../../components/MainHeader/MainHeader";
import TheHeader from "../../components/TheHeader/TheHeader";
import GlassFloating from "../../components/GlassFloating/GlassFloating";
import About from "../../components/About/About";
import Dashboard from "../../components/Dashboard/Dashboard";
import ChoosingUs from "../../components/ChoosingUs/ChoosingUs";
import Features from "../../components/Features/Features";
import Glasses from "../../components/Glasses/Glasses";
import VR from "../../components/VR/VR";
import Ready from "../../components/Ready/Ready";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  const [Current_Width] = useRecoilState($Current_Width);
  useEffect(() => {
    // console.log(Current_Width);
    // Active WoW.js
    const wow = new WOW({ live: false });
    wow.init();
    // Active Swal[=]
    // Swal.fire({
    //   position: "top-end",
    //   icon: "success",
    //   title: "Your work has been saved",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
    // axios
    //   .get("https://official-joke-api.appspot.com/random_joke")
    //   .then((res) => {
    //     console.log(res.data.setup);
    //   });
  }, []);
  return (
    <div className="col-12" id="HomePage">

<MainHeader />
      <TheHeader />
      <GlassFloating/>
      <About />
      <Dashboard />
      <ChoosingUs />
      <Features />
      <Glasses />
      <MainHeader />
      <VR />
      <Ready/>
      <Footer/>

        {/* {/* <a-scene>
      <a-assets>
        <img src={Img}>
        </img>
      </a-assets>
      <a-sky material="src:#Img" rotation="0 -130 0"></a-sky>
      </a-scene> 
     <entity primitive="a-plane" rotation="-90 0 0" height="1000" width="1000"></entity>
   */}
    </div>
  ); 
}

export default HomePage;
