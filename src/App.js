import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/layouts/Navbar';
import Contact from './pages/Contact';
import Footer from './components/layouts/Footer';
import Horario from './pages/Horarios';
import About from './pages/About';
import Store from './pages/Store';


function App() {
  return (
    <Router>
      <Navbar></Navbar>        
      <Routes>
        <Route path="/proj-acad" exact element={<Home />}></Route>
        <Route path="/store" exact element={<Store />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
        <Route path="/times" exact element={<Horario />}></Route>
        <Route path="/about" exact element={<About />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
