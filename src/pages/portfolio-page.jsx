
import image from '../assets/istockphoto-1973365581-612x612.jpg';


export default function Portfolio(){
    return(
        <section id='portfolio'>
            <h2 style={{marginTop: '2em'}}>Portfolio</h2>
            <section>
                <div class='row'> 
                    <div class='col-md card'>
                        <h3 class='card-header'>Tic-Tac-Toe</h3>
                        <div class='card-body'>
                            <img src={image} alt='Sample Image' style={{ width: '200px', height: '200px', backgroundColor: 'blue', borderRadius: 100 }} />
                        </div>
                        <div class='card-footer'>
                            <a href='https://github.com/kutho53/TicTacToe'>Github Link </a>
                            <a href='https://github.com/kutho53/TicTacToe' >Deployed Link</a>
                        </div>   
                    </div>
                    <div class='col-md card'>
                        <h3 class='card-header'>WeatherStorm</h3>
                        <div class='card-body'>
                            <img src={image} alt='Sample Image' style={{ width: '200px', height: '200px', backgroundColor: 'blue', borderRadius: 100 }} />
                        </div>                                        
                        <div class='card-footer'>
                            <a href='https://github.com/kutho53/WeatherSite'>Github Link </a>
                            <a href='https://github.com/kutho53/WeatherSite' >Deployed Link</a>
                        </div>   
                    </div>
                    <div class='col-md card'>
                        <h3 class='card-header'>Project Example 1</h3>
                        <div class='card-body'>
                            <img src={image} alt='Sample Image' style={{ width: '200px', height: '200px', backgroundColor: 'blue', borderRadius: 100 }} />
                        </div>
                        <div class='card-footer'>
                            <a href='https://github.com/kutho53/README-Generator'>Github Link </a>
                            <a href='https://kutho53.github.io/README-Generator/' >Deployed Link</a>
                        </div>                   
                    </div>
                </div> 
                <div class='row'>     
                    <div class='col-md card'>
                        <h3 class='card-header'>Project Example 1</h3>
                        <div class='card-body'>
                            <img src={image} alt='Sample Image' style={{ width: '200px', height: '200px', backgroundColor: 'blue', borderRadius: 100 }} />
                        </div>
                        <div class='card-footer'>
                            <a href='https://github.com/kutho53/README-Generator'>Github Link </a>
                            <a href='https://kutho53.github.io/README-Generator/' >Deployed Link</a>
                        </div>                   
                    </div>
                    <div class='col-md card'>
                        <h3 class='card-header'>Project Example 1</h3>
                        <div class='card-body'>
                            <img src={image} alt='Sample Image' style={{ width: '200px', height: '200px', backgroundColor: 'blue', borderRadius: 100 }} />
                        </div>
                        <div class='card-footer'>
                            <a href='https://github.com/kutho53/README-Generator'>Github Link </a>
                            <a href='https://kutho53.github.io/README-Generator/' >Deployed Link</a>
                        </div>                   
                    </div>
                    <div class='col-md card'>
                        <h3 class='card-header'>Project Example 1</h3>
                        <div class='card-body'>
                            <img src={image} alt='Sample Image' style={{ width: '200px', height: '200px', backgroundColor: 'blue', borderRadius: 100 }} />
                        </div>
                        <div class='card-footer'>
                            <a href='https://github.com/kutho53/README-Generator'>Github Link </a>
                            <a href='https://kutho53.github.io/README-Generator/' >Deployed Link</a>
                        </div>                   
                    </div>
                </div>
            </section>
        </section>
    )
}