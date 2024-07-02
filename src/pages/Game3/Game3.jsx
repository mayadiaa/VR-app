import ReactPlayer from 'react-player';
export default function Game3() {
  return (
    <div className='col-12' id='VideoPlayer'>
  <ReactPlayer width="100%"
            height="99vh" 
           controls url='https://youtu.be/533QhqMQWQ4?si=fds92nRiS-vKl8bS' />
    </div>
  );
}