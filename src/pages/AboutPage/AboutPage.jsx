import { useEffect } from "react";
import "./AboutPage.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { WOW } from "wowjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { $Current_Width } from "../../store";
import { useRecoilState } from "recoil";
import MainHeader from "../../components/MainHeader/MainHeader";
import About from "../../components/About/About";
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader";
import AboutDashboard from "../../components/AboutDashboard/AbourDashboard";
import ClientsAboutUs from "../../components/ClientsAboutUs/ClientsAboutUs";
import Footer from '../../components/Footer/Footer';
export default function AboutPage() {
    const [Current_Width] = useRecoilState($Current_Width);
    useEffect(() => {
        // console.log(Current_Width);
        // Active WoW.js
        const wow = new WOW({ live: false });
        wow.init();
    }, []);
    return (
        <div className="col-12" id="About">
            <MainHeader />
        <ServiceHeader Name="About Us" Title="about us"/>
        <About/>
        <AboutDashboard/>
        <ClientsAboutUs/>
        <Footer/>
        </div>
    );
}