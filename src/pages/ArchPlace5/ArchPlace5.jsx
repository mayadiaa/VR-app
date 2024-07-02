import './ArchPlace5.scss';
import 'aframe';
import{Sky, Scene}from 'react-aframe-ar';

export default function ArchPlace5(){
    return(
        <div className="col-12">
            <Scene>
                <Sky src={require('./p8.jpg')}></Sky>
            </Scene>
        </div>
    );

}