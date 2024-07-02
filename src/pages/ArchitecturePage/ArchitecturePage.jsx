import './ArchitecturePage.scss';
import MainHeader from "../../components/MainHeader/MainHeader";
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader";
import OurService from"../../components/OurService/OurService";
import Meta from "../../components/Meta/Meta";
import Footer from"../../components/Footer/Footer";
export default function ArchitecturePage(){
    return(
        <div className='col-12'>
             <MainHeader />
        <ServiceHeader Name="Architecture" Title="welcome to you in meta world"/>
        <OurService/>
        <Meta/>
        <Footer/>
        </div>
    );
}