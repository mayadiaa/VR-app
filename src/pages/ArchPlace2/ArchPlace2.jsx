import './ArchPlace2.scss';
import 'aframe';
import{Sky, Scene}from 'react-aframe-ar';

export default function ArchPlace2(){
    return(
        <div className="col-12">
            <Scene>
                <Sky src={require('./p2.jpg')}></Sky>
            </Scene>
        </div>
    );

}