import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Horario from "./pages/Horarios";
import Store from "./pages/Store";
import { StoreCardContext } from "./data/StoreCardContext";
import { useEffect, useState } from "react";
import {
  getData,
  getLogin,
  postRegister,
} from "./data/StoreData";
import { useTransition } from "react-spring";
import React from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [loginData, setLoginData] = useState([]);
  const [cost, setCost] = useState([]);
  const [rate, setRate] = useState([]);
  const [image, setImage] = useState([]);
  const [description, setDescription] = useState([]);
  const [title, setTitle] = useState([]);
  const [openLogin, setOpenLogin] = useState(false);
  const openPage = () => {
    setOpenLogin(!openLogin)
  };
  const [menu, setMenu] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const changeMenu = () => setMenu(!menu);
  const [menuLogged, setMenuLogged] = useState(false);
  const [activateTransition, setActivateTransition] = useState(false)
  const [activateTransition2, setActivateTransition2] = useState(false)
  const changeTransition = () => {setActivateTransition(!activateTransition)}
  const changeTransition2 = () => {setActivateTransition2(!activateTransition2)}
  const changeMenuLogged = () => {
    setMenuLogged(!menuLogged);
  };
  const getNewData = async () => {
    const dados = await getData();
    const login = await getLogin();
    setData(dados);
    setLoginData(login);
  };

  const transition = useTransition(activateTransition, {
    from: { x: 0, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 100, opacity: 0 },
  });

  const transition2 = useTransition(activateTransition2, {
    from: { x: 0, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 0, opacity: 0 },
    config: { duration: 300 }
  });

  
  const getLoginData = () => {
    if (loginData.length >= 1) {
      for (let i = 0; i < loginData.length; i++) {
        setEmail((oldEmail) => [...oldEmail, loginData[i].email.toLowerCase()]);
        setPassword((oldPassword) => [...oldPassword, loginData[i].password]);
        setUsername((oldUsername) => [
          ...oldUsername,
          loginData[i].username.toLowerCase(),
        ]);
      }
    }
  };

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
    getLoginData();
  }, [loginData % 2]);

  useEffect(() => {
    getSpecificData();
  }, [data / 2]);

  return (
    <StoreCardContext.Provider
      value={{
        image,
        postRegister,
        changeTransition2,
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
        username,
        email,
        password,
        setIsLogged,
        isLogged,
        transition2,
        menuLogged,
        changeMenuLogged,
        changeTransition
      }}
    >
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path="/proj-acad" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/times" element={<Horario />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </StoreCardContext.Provider>
  );
};

export default App;
