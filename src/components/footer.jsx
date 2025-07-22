import './components.css'
import LILogo from '../assets/3-1.png';
import GHLogo from '../assets/github.png';

export default function Footer(){
    return(
        <footer className="mt-5 p-4 bg-dark text-white text-center"> 
          <a href='https://github.com/kutho53' className> 
            <img src={GHLogo}
            alt='GitHub Logo'
            className="img-fluid logo-icon"
            style={{ backgroundColor: 'black', borderRadius: 10 }}/>
          </a>
          <a href='https://linkedin.com/in/kurt-thomas-912168169/'>
            <img src={LILogo}
            alt='LinkedIn Logo'
            className="img-fluid logo-icon"
            style={{ backgroundColor: 'black', borderRadius: 10 }}/>
          </a>
          <div>email: kurtisthomas53@gmail.com</div>
        </footer>
    )
}

{/* <div class="mt-5 p-4 footer-expand bg-dark text-white text-center">
  <p>Footer</p>
</div> */}

// mt-5 p-4 bg-dark text-white text-center