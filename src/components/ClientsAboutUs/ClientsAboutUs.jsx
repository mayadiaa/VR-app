import './ClientsAboutUs.scss';
export default function ClientsAboutUs(){
    return(
        <div className='col-12' id='ClientsAboutUs'>
            <div className='col-12' id="content1">
            <h5>TESTIMONIAL</h5>
            <h1>Whatch Our <span>Clients</span> Say About Us</h1>
            </div>
            <div className='col-12 ' id='content2'>
                <div className='col-6' id='Imgdiv'></div>
                <div className='col-3' id='Div1'>
                    <div className="con1">
                    <img src={require('./2.png')}></img>
                    <p>Powered by the latest advancements in processing technology, our VR system delivers a smooth, lag-free experience,</p>
                </div>
                <div className='con'>
                    <h4>Esther Howard</h4>
                    <p>Big Kahuna Burger Ltd.</p>
                    </div>
                </div>
            </div>
            <div className="col-12" id="content3">
                <div className='col-3 contentDiv'>
                <div className="con1">
                    <img src={require('./2.png')}></img>
                    <p>In conclusion, my experience with Vireal has completely changed my perspective on virtual reality</p>
                </div>
                <div className='con'>
                    <h4>Darlene Robertson</h4>
                    <p>Abstergo Ltd.</p>
                    </div>
                </div>
                <div className='col-3 contentDiv'>
                <div className="con1">
                    <img src={require('./2.png')}></img>
                    <p>It’s not just a technological gimmick; it’s a transformative experience that opens up a world of possibilities</p>
                </div>
                <div className='con'>
                    <h4>Arlene McCoy</h4>
                    <p>Biffco Enterprises Ltd.</p>
                    </div>
                </div>
                <div className='col-3 contentDiv'>
                <div className="con1">
                    <img src={require('./2.png')}></img>
                    <p>The staff was knowledgeable, friendly, and eager to ensure I had the best possible experience</p>
                </div>
                <div className='con'>
                    <h4>Jenny Wilson</h4>
                    <p>Barone LLC.</p>
                    </div>
                </div>
        
            </div>
          
        </div>
    );
}