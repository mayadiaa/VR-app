import './GamingVrPage.scss';
import MainHeader from "../../components/MainHeader/MainHeader";
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader";
import OurService from"../../components/OurService/OurService";
import MetaGame from "../../components/MetaGame/MetaGame";
import Footer from "../../components/Footer/Footer";
export default function GamingVrPage(){
    return(
        <div className='col-12'>
            <MainHeader />
        <ServiceHeader Name="Games" Title="welcome to you in meta world"/>
        <OurService/>
        <MetaGame/>
        <Footer/>
        </div>
    );
}































// export  default function GamingVrPage(){
//     return(
//         <iframe 
//   width="560" 
//   height="315" 
//   src="https://youtu.be/jqq_ZdD5Zwg?si=x7332natFgg6FFP0" 
//   title="YouTube video player" 
//   frameborder="0" 
//   allow="accelerometer; 
//   autoplay; 
//   clipboard-write; 
//   encrypted-media; 
//   gyroscope; 
//   picture-in-picture; 
//   web-share" allowfullscreen></iframe>
//     );
// }






























// import 'aframe';
// import { Sky, Text, Scene} from 'react-aframe-ar';
// import video from './video.mp4';
// export default function GamingVrPage(){
//   return(
//     <Scene>
//       <Sky src={require('./vr img.jpg.jpg')}> 

//       </Sky>
     
//     </Scene>
//   );
// }

