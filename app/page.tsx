import Hero from './components/Hero';
import Project from './components/Project';
import SourceCode from './components/SourceCode';
import About from './components/About';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Project />
      <SourceCode />
      <About />
      <Footer />
    </>
  );
}
