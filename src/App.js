import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layouts/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/layouts/Footer";
import Horario from "./pages/Horarios";
import About from "./pages/About";
import Store from "./pages/Store";
import { StoreCardContext } from "./components/items/storeItems/StoreCardContext";
import { useEffect, useState } from "react";
import { getData } from "./components/items/storeItems/StoreData";
import { useTransition } from "react-spring";

function App() {
  const [data, setData] = useState([]);
  const [cost, setCost] = useState([]);
  const [rate, setRate] = useState([]);
  const [image, setImage] = useState([]);
  const [description, setDescription] = useState([]);
  const [title, setTitle] = useState([]);
  const [openLogin, setOpenLogin] = useState(false);
  const openPage = () => setOpenLogin(!openLogin);
  const [menu, setMenu] = useState(false);
  const changeMenu = () => setMenu(!menu);
  const getNewData = async () => {
    const dados = await getData();
    setData(dados);
  };
  const transition = useTransition(openLogin, {
    from: { x: 300, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 300, y: 0, opacity: 0 },
  });

  const getSpecificData = () => {
    if (data.length > 1) {
      for (let i = 0; i < data.length; i++) {
        setCost((oldCost) => [...oldCost, data[i].cost]);
        setTitle((oldTitle) => [...oldTitle, data[i].title]);
        setDescription((oldDescription) => [
          ...oldDescription,
          data[i].description,
        ]);
        setRate((oldRate) => [...oldRate, data[i].rate]);
        setImage((oldImage) => [...oldImage, data[i].image]);
      }
    }
  };

  useEffect(() => {
    getNewData();
  }, []);

  useEffect(() => {
    getSpecificData();
  }, [data / 2]);
  return (
    <StoreCardContext.Provider
      value={{
        image,
        cost,
        description,
        title,
        rate,
        openLogin,
        changeMenu,
        transition,
        openPage,
        menu,
        setMenu,
      }}
    >
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
    </StoreCardContext.Provider>
  );
}

export default App;
