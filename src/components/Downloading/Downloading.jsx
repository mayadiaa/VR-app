import './Downloading.scss';
export default function Downloading(){
    return(
        <div className='col-12' id='DownloadingDiv'>
            <div className='col-5 Download'>
                <h4>OUR APPS</h4>
                <h1>Download Our App<br/> for <span>Real Time</span><br/> Updates</h1>
                <p>Download VR Explorer now and unlock the doors to a universe of possibilities. Your immersive adventure awaits!</p>
            <div className="imgDiv">
        <img  src={require('./Google-Play.png')}></img>
        <img  src={require('./App-Store.png')}></img>
        </div>
            </div>
            <div className='col-5 Download Download1'>
            <img  src={require('./phone.png')}></img>
            </div>
        </div>
        
    );
}