import './ArchPlace4.scss';
import 'aframe';
import{Sky, Scene}from 'react-aframe-ar';

export default function ArchPlace4(){
    return(
        <div className="col-12">
            <Scene>
                <Sky src={require('./p10.jpg')}></Sky>
            </Scene>
        </div>
    );

}