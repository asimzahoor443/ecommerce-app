import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import Slider from './Components/Slider/Slider';
import Testimonials from './Components/Testimonails/Testimonials';
import Virtual from './Components/Virtual/Virtual';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
