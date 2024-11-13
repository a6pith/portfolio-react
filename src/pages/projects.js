
import '../App.css';
import { Helmet } from 'react-helmet';


function NotFound() {
  return (
    <div className="">

      <Helmet>
        <script src="https://kit.fontawesome.com/55917b94b9.js" crossorigin="anonymous"></script>
      </Helmet>
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
        <h1>PROJECTS</h1>
      </section>
      <div class="links">
          <h4 style={{fontSize:"60px"}}>Projects</h4>
          <ul class=""style={{fontSize:"30px",listStyleType: 'none'}}>
            
            <li><a href="#">1 .React Safe Android App</a></li>
            <li><a href="#">2 .Finding resistivity of sand and water when current passing through it.</a></li>
            
          </ul>
        </div>
      

    </div>
  );
}

export default NotFound;
