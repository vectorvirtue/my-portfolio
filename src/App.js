import Header from './sections/Header';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
// import Certifications from './sections/Certifications';
import { Helmet } from 'react-helmet';


function App() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Faith Amaugo',
    jobTitle: 'Frontend Developer',
    email: 'amaugofaith@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
    sameAs: [
      'https://github.com/vectorvirtue',
      'https://www.linkedin.com/in/amaugo-faith-b7b7412ab',
    ],
    knowsAbout: ['React', 'JavaScript', 'HTML', 'CSS', 'Frontend Development'],
  };

  return (
    <div className='container'>

<Helmet>
        <title>Faith Amaugo | Frontend Developer Portfolio</title>
        <meta name="description" content="Portfolio of Faith Amaugo – a frontend developer passionate about building responsive, user-friendly websites." />
        <meta name="keywords" content="Faith Amaugo, frontend developer, web developer, React portfolio, JavaScript, HTML, CSS" />
        <meta name="author" content="Faith Amaugo" />
        <meta property="og:title" content="Faith Amaugo | Frontend Developer" />
        <meta property="og:description" content="Portfolio of Faith Amaugo, a frontend developer building responsive web experiences." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Faith Amaugo | Frontend Developer" />
        <meta name="twitter:description" content="Portfolio of Faith Amaugo, a frontend developer building responsive web experiences." />
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>
      <Header />
      <About />
      <Projects />
      <Contact />
      {/* <Certifications /> */}
    </div>
  );
}

export default App;
