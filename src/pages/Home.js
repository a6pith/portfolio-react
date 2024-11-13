import logo from '../logo.svg';
import '../App.css';
import { Helmet } from 'react-helmet';


function Home() {
  return (
    <div className="Home">

      <Helmet>
        <script src="https://kit.fontawesome.com/55917b94b9.js" crossorigin="anonymous"></script>
      </Helmet>

      <nav className="nav-bar-container make-sticky">
        <div className="logo-head"><span>A6</span></div>
        <div className="nav-items">
          <div className="item"><a href='/'>Home</a></div>
          <div className="item"><a href='/about'>About</a></div>
          <div className="item"><a href='/projects'>Projects</a></div>
          <div className="item"><a href='/https://euphonious-boba-a8b212.netlify.app/'>Vision</a></div>
          <div className="item"><a href='/contact'>Contact</a></div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-container">
        <div className="l-item">
        <img src="https://e0.pxfuel.com/wallpapers/55/37/desktop-wallpaper-cbum-bodybuilder-posing.jpg"></img>
          <h1>I'm ARPITH S NAIR</h1>
          <h2>I'm an <span>PROGRAMMER</span></h2>
          <p>"Innovative thinker with a strong ability to solve complex problems through creative design solutions."</p>
        </div>
        
        </div>

        
      </section>

      

      

      <section className='skill'>
        
        <h2> SkillS</h2>
        <div className='skill-container'>
        <div className='skill-item-row'>
          <div className='skill-item'>
            
            
          </div>
          <div className='skill-item'>
            <h4>PROGRAMMER</h4>
            <span>70%</span>
          </div>
          <div className='progress-bar-border'>
          <div className='progress-bar'></div>
          </div>

          <div className='skill-item'>
            <h4>GYM TRAINER</h4>
            <span>95%</span>
          </div>
          <div className='progress-bar-border'>
          <div className='progress-bar'></div>
          </div>
    
        </div>

        <div className='skill-item-row'>
          <div className='skill-item'>
            <h4>GAMER</h4>
            <span>80%</span>
          </div>
          <div className='progress-bar-border'>
            <div className='progress-bar'></div>
          </div>

          
      
        </div>
    
        </div>
      </section>

      <section class="footer">
      <div class="footer-row">
      <div class="footer-col">
          <h4>ARPITH S NAIR</h4>
          <p>
            A passionate programmer, graduated from Kerala University.
          </p>
          <div class="icons">
            
            
            
            
          </div>
        </div>
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li><a href="#">Home Page</a></li>
            <li><a href="#">About Page</a></li>
            <li><a href="#">Vision Page</a></li>
            <li><a href="#">Projects Page</a></li>
            <li><a href="#">Contact Page</a></li>
          </ul>
        </div>
        <div class="footer-col">
        <h4>Contact</h4>
          <ul class="links">
          <li><a href="#">Mobile : +91 8590182131</a></li>
          <li><a href="#">arpithmysterio@gmail.com</a></li>
           
          </ul>
        </div>
        <div class="footer-col">
          
          <ul class="links">
            
            
            
            
          </ul>
        </div>
        
      </div>
    </section>

    </div>
  );
}

export default Home;
