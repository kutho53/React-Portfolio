import "./pages.css";
import sample from '../assets/istockphoto-1973365581-612x612.jpg';
import ticTac from '../assets/TicTacScreenshot.png';
import weatherIcon from '../assets/weather-109.png';
import readmeIcon from '../assets/readmeLogo.png';
import resume from'../assets/KurtisThomasResumeSE.pdf'

export default function Portfolio(){
    return(
        <section id='portfolio'>
            <h2 className='portfolio-section'>Portfolio</h2>
            <section>
                <div className='row g-0'> 
                    <div className='col-md card bg-dark text-white text-center portfolio-card'>
                        <div className='card-header'>
                            <h3>Tic-Tac-Toe</h3>
                        </div>
                        <div className='card-body center-content'>
                            <img src={ticTac} alt='Image of Tic-Tac-Toe game.' className='project-image' />
                        </div>
                        <div className='card-footer'>
                            <a className='github-link' href='https://github.com/kutho53/TicTacToe'>Github Repo</a>
                            {/* <a class='deployed link' href='https://kutho53.github.io/TicTacToe/' >Deployed Application</a> */}
                        </div>   
                    </div>
                    <div className='col-md card bg-dark text-white text-center portfolio-card'>
                        <div className='card-header'>
                            <h3>WeatherStorm</h3>
                        </div>
                        <div className='card-body center-content'>
                            <img src={weatherIcon} alt='Weather Icon' className='project-image bg-white' />
                        </div>                                        
                        <div className='card-footer'>
                            <a className='github-link' href='https://github.com/kutho53/WeatherSite'>Github Repo </a>
                            {/* <a class='deployed link' href='https://kutho53.github.io/WeatherSite/' >Deployed Application</a> */}
                        </div>   
                    </div>
                    <div className='col-md card bg-dark text-white text-center portfolio-card'>
                        <div className='card-header'>
                            <h3>Readme Generator</h3>
                        </div>
                        <div className='card-body center-content'>
                            <img src={readmeIcon} alt='Weather Icon' className='project-image bg-white' />
                        </div>
                        <div className='card-footer'>
                            <a className='github-link' href='https://github.com/kutho53/README-Generator'>Github Repo </a>
                            {/* <a class='deployed link' href='https://kutho53.github.io/README-Generator/' >Deployed Application</a> */}
                        </div>                   
                    </div>
                </div> 
            </section>
            <section>
                    <h2 style={{marginTop: '2em'}}>Download my resume <a src={resume} download className="github-link">here.</a></h2>
            </section>
        </section>
    )
}