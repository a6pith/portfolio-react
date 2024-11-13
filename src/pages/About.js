import logo from '../logo.svg';
import '../App.css';
import { Helmet } from 'react-helmet';


function About() {
  return (
    <div className="About">

      <Helmet>
        <script src="https://kit.fontawesome.com/55917b94b9.js" crossorigin="anonymous"></script>
      </Helmet>

      <nav className="nav-bar-container make-sticky">
        <div className="logo-head"><span>A6</span></div>
        <div className="nav-items">
          <div className="item"><a href='/'>Home</a></div>
          <div className="item"><a href='/about'>About</a></div>
          <div className="item"><a href='/projects'>Projects</a></div>
          <div className="item"><a href='https://euphonious-boba-a8b212.netlify.app/'>Vision</a></div>
          <div className="item"><a href='/contact'>Contact</a></div>
        </div>
      </nav>

      <section className="AboutMeHero">
        <h1>About Me</h1>
      </section>

      <section className='about flex-box'>
      <img src="https://i.pinimg.com/236x/d0/6f/d4/d06fd4421ff7f67be807d7d3f8382c56.jpg?nii=t"/>
      <div className='about-right'>
        <h1>Arpith S Nair</h1>
        <h2>Programmer</h2>
        <p>"Innovative thinker with a strong ability to solve complex problems through creative design solutions."
        “Programs must be written for people to read, and only incidentally for machines to execute.”
        “Code is like humor. When you have to explain it, it’s bad.”
        “We’re moving from a world where computers are used by programmers to one where computers are used by everyone.” 
        “Computing is not about computers any more. It is about living.” 
        </p>
      </div>
      </section>

      <section className='education'>
        <h1>Educational Qualifications</h1>

        {/* -- Education item -- */}
        <div className='edu-item flex-box main-bx'>
          <img src='ku_logo.jpg'></img>
          <div className='about-right'>
          <h1>University of Kerala</h1>
          <h2>MSc. Computer Science (2024 - Present)</h2>
          <p>I am currently doing my Post Graduation in Computer Science from Karyavattam Campus, Trivandrum</p>
          </div>
        </div>
        {/* -- end -- */}
        
        {/* -- Education item -- */}
        <div className='edu-item flex-box main-bx'>
          <img src='ku_logo.jpg'></img>
          <div className='about-right'>
          <h1>University of Kerala</h1>
          <h2>BSc.Physics and Computer Application(2021 - 2024)</h2>
          <p>I have completed my Under Graduation in Physics and Compuer Application  from Govt College Kariavattom, Trivandrum</p>
          </div>
        </div>
        {/* -- end -- */}

        {/* -- Education item -- */}
        <div className='edu-item flex-box main-bx'>
          <img src='https://upload.wikimedia.org/wikipedia/en/9/95/CBSE_new_logo.svg'></img>
          <div className='about-right'>
          <h1>Central Board of Secondary Education</h1>
          <h2>Higher Secondary Education (2021)</h2>
          <p>I have completed my Higher Secondary Education from Blue Mount Public School, Trivandrum</p>
          </div>
        </div>
        {/* -- end -- */}

      </section>

      <section className='certification'>
        <h1>Certifications</h1>
        <div className='certificate-container flex-box'>

       

      
          
          

        <div className='cert-holder'>
          <img src='https://www.nasscomfoundation.org/images/nasscom-logo.svg'></img>
          <h4>Nasscom Foundation</h4>
          <p>Certified Programmer in Python</p>
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
            
         < li><a href="#">+91 8590182131</a></li>
          <li><a href="#">arpithmysterio@gmail.com</a></li>
            
          
        
        
          
          
          
            
          </ul>
        </div>
        
      </div>
    </section>

    </div>
  );
}

export default About;
