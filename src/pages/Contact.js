import logo from '../logo.svg';
import '../App.css';
import { Helmet } from 'react-helmet';


function Contact() {
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

      <section className="TopHero">
        <h1>Contact</h1>
      </section>

      <section className='contact'>

        <div className='top-holder'>
             <div className='touch'>
             ""The best programmers are not those who know everything, but those who know how to learn quickly.""
             </div>

             <div className='element-address'>
                <div className='element-pin flex-box'>
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <h1>My Address</h1>
                <span>Sivodayam singapore jn pallippuram po,<br></br>Kerala,India</span>
             </div>

             <div className='element-contact'>
                <div className='element-pin  flex-box'>
                    <i class="fa-solid fa-phone"></i>
                </div>
                <h1>My Contact</h1>
                <span>+91 8590182131<br></br>arpithmysterio@gmail.com</span>
             </div>
        </div>

        

      </section>

      

    

      <section class="footer" style={{backgroundColor:"black"}}>
      <div class="footer-row">
      <div class="footer-col">
          <h4 style={{color:"white"}}>Arpith S Nair</h4>
          <p>
            A passionate programmer, graduated from Kerala University.
          </p>
        
        </div>
        
        <div class="footer-col">
          <h4 style={{color:"white"}}>Info</h4>
          <ul class="links" style={{color:"black"}}>
            <li><a href="#">Home Page</a></li>
            <li><a href="#">About Page</a></li>
            <li><a href="#">Vision Page</a></li>
            <li><a href="#">Projects Page</a></li>
            <li><a href="#">Contact Page</a></li>
          </ul>
        </div>
      
        <div class="footer-col">
          <h4 style={{color:"white"}}> Contact</h4>
          <ul class="links">
            <li><a href="#">+91 8590182131</a></li>
            <li><a href="#">arpithmysterio@gmail.com</a></li>
            
            
          </ul>
        </div>
        
      </div>
    </section>

    </div>
  );
}

export default Contact;
