import 'aframe';
import{Sky, Scene}from 'react-aframe-ar';

export default function ArchPlace2(){
    return(
        <div className="col-12">
            <Scene>
                <Sky src={require('./t2.jpg')}></Sky>
            </Scene>
        </div>
    );

}