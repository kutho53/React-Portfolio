import Card from 'react-router-dom';
import image from '../assets/istockphoto-1973365581-612x612.jpg';


export default function Portfolio(){
    return(
        <section id='portfolio'>
            <h2>Portfolio</h2>
            <section>
                <Card>
                    <h3>Project Example 1</h3>
                    <img src={image} alt='Sample Image' style={{ width: '50px', height: '50px', backgroundColor: 'blue', borderRadius: 100 }} />
                    <a href='https://github.com/kutho53/README-Generator'>Github Link</a>
                    <a href='https://kutho53.github.io/README-Generator/' >Deployed Link</a>
                </Card>
                <Card>
                    <h3>Project Example 1</h3>
                    <img src={image} alt='Sample Image' style={{ width: '50px', height: '50px', backgroundColor: 'blue', borderRadius: 100 }} />
                    <a href='https://github.com/kutho53/README-Generator'>Github Link</a>
                    <a href='https://kutho53.github.io/README-Generator/' >Deployed Link</a>
                </Card>
                <Card>
                    <h3>Project Example 1</h3>
                    <img src={image} alt='Sample Image' style={{ width: '50px', height: '50px', backgroundColor: 'blue', borderRadius: 100 }} />
                    <a href='https://github.com/kutho53/README-Generator'>Github Link</a>
                    <a href='https://kutho53.github.io/README-Generator/' >Deployed Link</a>
                </Card>
                <Card>
                    <h3>Project Example 1</h3>
                    <img src={image} alt='Sample Image' style={{ width: '50px', height: '50px', backgroundColor: 'blue', borderRadius: 100 }} />
                    <a href='https://github.com/kutho53/README-Generator'>Github Link</a>
                    <a href='https://kutho53.github.io/README-Generator/' >Deployed Link</a>
                </Card>
                <Card>
                    <h3>Project Example 1</h3>
                    <img src={image} alt='Sample Image' style={{ width: '50px', height: '50px', backgroundColor: 'blue', borderRadius: 100 }} />
                    <a href='https://github.com/kutho53/README-Generator'>Github Link</a>
                    <a href='https://kutho53.github.io/README-Generator/' >Deployed Link</a>
                </Card>
                <Card>
                    <h3>Project Example 1</h3>
                    <img src={image} alt='Sample Image' style={{ width: '50px', height: '50px', backgroundColor: 'blue', borderRadius: 100 }} />
                    <a href='https://github.com/kutho53/README-Generator'>Github Link</a>
                    <a href='https://kutho53.github.io/README-Generator/' >Deployed Link</a>
                </Card>
            </section>
        </section>
    )
}