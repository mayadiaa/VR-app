import ReactPlayer from 'react-player';
export default function Game1() {
  return (
    <div className='col-12' id='VideoPlayer'>
  <ReactPlayer width="100%"
            height="99vh" 
           controls url='https://youtu.be/Q0yzeIgxdSQ?si=xPHPYUSYfvqBcv6r'/>
    </div>
  );
}

