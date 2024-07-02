import { useEffect } from "react";
import "./ContactPage.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { WOW } from "wowjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { $Current_Width } from "../../store";
import { useRecoilState } from "recoil";
import MainHeader from "../../components/MainHeader/MainHeader";
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader";
import Contact from "../../components/Contact/Contact";
import ContactForm from '../../components/ContactForm/ContactForm';
import Downloading from "../../components/Downloading/Downloading";
import Space from "../../components/Space/Space";
import Footer from'../../components/Footer/Footer';
export default function AboutPage() {
    const [Current_Width] = useRecoilState($Current_Width);
    useEffect(() => {
        // console.log(Current_Width);
        // Active WoW.js
        const wow = new WOW({ live: false });
        wow.init();
    }, []);
    return (
        <div className="col-12" id="Contact">
             <MainHeader />
        <ServiceHeader Name="Contact" Title="contact us"/>
        <Contact/>
        <ContactForm/>
        <Downloading/>
        <Space/>
        <Footer/>
        </div>
     );
}