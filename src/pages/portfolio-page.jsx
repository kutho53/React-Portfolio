import "./pages.css";
import sample from '../assets/istockphoto-1973365581-612x612.jpg';
import ticTac from '../assets/TicTacScreenshot.png';
import weatherIcon from '../assets/weather-109.png';


export default function Portfolio(){
    return(
        <section id='portfolio'>
            <h2 style={{marginTop: '2em'}}>Portfolio</h2>
            <section>
                <div className='row'> 
                    <div className='col-md card'>
                        <div className='card-header'>
                            <h3>Tic-Tac-Toe</h3>
                        </div>
                        <div className='card-body center-content'>
                            <img src={ticTac} alt='Image of Tic-Tac-Toe game.' style={{ width: '200px', height: '200px', borderRadius: 10 ,}} />
                        </div>
                        <div className='card-footer'>
                            <a className='github link' href='https://github.com/kutho53/TicTacToe'>Github Repo</a>
                            {/* <a class='deployed link' href='https://kutho53.github.io/TicTacToe/' >Deployed Application</a> */}
                        </div>   
                    </div>
                    <div className='col-md card'>
                        <div className='card-header'>
                            <h3>WeatherStorm</h3>
                        </div>
                        <div className='card-body center-content'>
                            <img src={weatherIcon} alt='Weather Icon' style={{ width: '200px', height: '200px', backgroundColor: 'blue', borderRadius: 10 }} />
                        </div>                                        
                        <div className='card-footer'>
                            <a className='github link' href='https://github.com/kutho53/WeatherSite'>Github Repo </a>
                            {/* <a class='deployed link' href='https://kutho53.github.io/WeatherSite/' >Deployed Application</a> */}
                        </div>   
                    </div>
                    <div className='col-md card'>
                        <div className='card-header'>
                            <h3>Readme Generator</h3>
                        </div>
                        <div className='card-body center-content'>
                            <img src={weatherIcon} alt='Weather Icon' style={{ width: '200px', height: '200px', backgroundColor: 'blue', borderRadius: 10 }} />
                        </div>
                        <div className='card-footer'>
                            <a className='github link' href='https://github.com/kutho53/README-Generator'>Github Repo </a>
                            {/* <a class='deployed link' href='https://kutho53.github.io/README-Generator/' >Deployed Application</a> */}
                        </div>                   
                    </div>
                </div> 
                {/* <div className='row'>     
                    <div className='col-md card'>
                        <h3 className='card-header'>Project Example 1</h3>
                        <div className='card-body'>
                            <img src={image} alt='Sample Image' style={{ width: '200px', height: '200px', backgroundColor: 'blue', borderRadius: 100 }} />
                        </div>
                        <div className='card-footer'>
                            <a href='https://github.com/kutho53/README-Generator'>Github Link </a>
                            <a href='https://kutho53.github.io/README-Generator/' >Deployed Link</a>
                        </div>                   
                    </div>
                    <div className='col-md card'>
                        <h3 className='card-header'>Project Example 1</h3>
                        <div className='card-body'>
                            <img src={image} alt='Sample Image' style={{ width: '200px', height: '200px', backgroundColor: 'blue', borderRadius: 100 }} />
                        </div>
                        <div className='card-footer'>
                            <a href='https://github.com/kutho53/README-Generator'>Github Link </a>
                            <a href='https://kutho53.github.io/README-Generator/' >Deployed Link</a>
                        </div>                   
                    </div>
                    <div className='col-md card'>
                        <h3 className='card-header'>Project Example 1</h3>
                        <div className='card-body'>
                            <img src={image} alt='Sample Image' style={{ width: '200px', height: '200px', backgroundColor: 'blue', borderRadius: 100 }} />
                        </div>
                        <div className='card-footer'>
                            <a href='https://github.com/kutho53/README-Generator'>Github Link </a>
                            <a href='https://kutho53.github.io/README-Generator/' >Deployed Link</a>
                        </div>                   
                    </div>
                </div> */}
            </section>
            <section>
                    <h2 style={{marginTop: '2em'}}>Download my resume <a href='src/assets/KurtisThomasResumeSE.docx.pdf' download>here.</a></h2>
            </section>
        </section>
    )
}