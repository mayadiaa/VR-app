
import './ArchPlacePage1.scss';
import 'aframe';
import{Sky, Scene}from 'react-aframe-ar';

export default function ArchPlacePage1(){
    return(
        <div className="col-12">
            <Scene>
                <Sky src={require('./p1.jpg')}></Sky>
            </Scene>
        </div>
    );

}