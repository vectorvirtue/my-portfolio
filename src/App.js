import Header from './sections/Header';
import About from './sections/About';
import Projects from './sections/Projects';
// import Certifications from './sections/Certifications';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className='container'>

<Helmet>
        <title>Faith Amaugo | Frontend Developer Portfolio</title>
        <meta name="description" content="Portfolio of Faith Amaugo – a frontend developer passionate about building responsive, user-friendly websites." />
        <meta name="keywords" content="Faith Amaugo, frontend developer, web developer, React portfolio, JavaScript, HTML, CSS" />
        <meta name="author" content="Faith Amaugo" />
      </Helmet>
      <Header />
      <About />
 <Projects />
      {/* <Certifications /> */}
    </div>
  );
}

export default App;
