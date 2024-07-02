import './ToursPage.scss';
import MainHeader from "../../components/MainHeader/MainHeader";
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader";
import OurService from"../../components/OurService/OurService";
import MetaTours from '../../components/MetaTours/MetaTours';
import Footer from"../../components/Footer/Footer";

export default function ToursPage(){
    return(
        <div className='col-12'>
              <MainHeader />
        <ServiceHeader Name="Tours" Title="welcome to you in meta world"/>
        <OurService/>
        <MetaTours/>
        <Footer/>
        </div>
    );
}