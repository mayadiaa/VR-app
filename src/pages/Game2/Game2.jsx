import ReactPlayer from 'react-player';
export default function Game2() {
  return (
    <div className='col-12' id='VideoPlayer'>
  <ReactPlayer width="100%"
            height="99vh" 
           controls url=' https://youtu.be/rNVpFXuAXIA?si=MIn1P0fWYx8B1OQl' />
    </div>
  );
}