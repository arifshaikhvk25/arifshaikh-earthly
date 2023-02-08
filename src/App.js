// import logo from './logo.svg';
import './App.css';
import { Header, Navbar, About, Container, Slideshow, Footer } from "./Components"

import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init(
      {
        duration: 1000,
        offset: 250,
        easing: 'ease',
      }
    )
  }, [])

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Container />
      <Slideshow />
      <Footer />
    </div>
  );
}

export default App;
