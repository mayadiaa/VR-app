import './ArchPlace6.scss';
import 'aframe';
import{Sky, Scene}from 'react-aframe-ar';

export default function ArchPlace6(){
    return(
        <div className="col-12">
            <Scene>
                <Sky src={require('./p5.jpg')}></Sky>
            </Scene>
        </div>
    );

}