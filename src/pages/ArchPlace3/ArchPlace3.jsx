import './ArchPlace3.scss';
import 'aframe';
import{Sky, Scene}from 'react-aframe-ar';

export default function ArchPlace3(){
    return(
        <div className="col-12">
            <Scene>
                <Sky src={require('./p7.jpg')}></Sky>
            </Scene>
        </div>
    );

}