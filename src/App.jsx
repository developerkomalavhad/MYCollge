import usePageEffects from './hooks/usePageEffects.js';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import TrustStrip from './components/Overview/TrustStrip.jsx';
import Overview from './components/Overview/Overview.jsx';
import Admission from './components/Admission/Admission.jsx';
import About from './components/About/About.jsx';
import Principal from './components/Principal/Principal.jsx';
import Features from './components/Features/Features.jsx';
import Programs from './components/Programs/Programs.jsx';
import Departments from './components/Departments/Departments.jsx';
import Facilities from './components/Facilities/Facilities.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import News from './components/News/News.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Placements from './components/Placements/Placements.jsx';
import Stats from './components/Stats/Stats.jsx';
import Faq from './components/Faq/Faq.jsx';
import Research from './components/Research/Research.jsx';
import ImportantLinks from './components/ImportantLinks/ImportantLinks.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import BackToTop from './components/BackToTop/BackToTop.jsx';

export default function App() {
  usePageEffects();

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Overview />
        <Admission />
        <About />
        <Principal />
        <Features />
        <Programs />
        <Departments />
        <Facilities />
        <Placements />
        <Gallery />
        <News />
        <Testimonials />
        <Stats />
        <Research />
        <Faq />
        <ImportantLinks />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
