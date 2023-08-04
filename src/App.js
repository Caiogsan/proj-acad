import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/layouts/Navbar';
import Contact from './components/pages/Contact';
import Footer from './components/layouts/Footer';
import Horario from './components/pages/Horarios';
import About from './components/pages/About';


function App() {
  return (
    <Router>
      <Navbar></Navbar>        
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
        <Route path="/times" exact element={<Horario />}></Route>
        <Route path="/about" exact element={<About />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
