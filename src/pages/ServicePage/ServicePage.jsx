import { useEffect } from "react";
import "./ServicePage.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { WOW } from "wowjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { $Current_Width } from "../../store";
import { useRecoilState } from "recoil";
import MainHeader from "../../components/MainHeader/MainHeader";
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader";
import OurService from "../../components/OurService/OurService";
import VR from "../../components/VR/VR";
import HIW from "../../components/HIW/HIW";
import ChoosingUs from "../../components/ChoosingUs/ChoosingUs";
import Footer from "../../components/Footer/Footer";
export default function ServicePage() {
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
        <div className="col-12" id="ServicePage">
            <MainHeader />
            <ServiceHeader Name="Service" Title="Join Our Comunity"/>
            <OurService/>
            <VR/>
            <HIW/>
            <ChoosingUs/>
            <Footer/>
        </div>
    );
}
