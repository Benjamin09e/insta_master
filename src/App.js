import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/authentification/login/Login";

import Register from "./pages/authentification/register/Register";
import { useState } from "react";
import Profil from "./pages/profile/Profil";
import Recherche from "./pages/recherche/Recherche";
import ForgetPass from "./pages/authentification/forgetpass/ForgetPass";
import Footer from "./components/footer/Footer";
import Aside from "./components/aside/Aside";
import Decouvrir from "./pages/decouvrir/Decouvrir";
import Reels from "./pages/reels/Reels";
import Message from "./pages/message/Message";

import New from "./pages/creer/New";
import Plus from "./pages/plus/Plus";
import Activite from "./pages/activite/Activite";


function App() {
  const [auth, setAuth] = useState(false);
  const [creer, setCreer] = useState(false);
  const [plus, setPlus] = useState(false);



  if (auth) {
    return (
      <div className="App">
        <New TestCreer={creer} setCreer={setCreer}/>
        <Plus plus={plus} />
        
        <Aside setCreer={setCreer} setPlus={setPlus} plus={plus}/>
        <div className="App_main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profil />} />
            <Route path="/recherche" element={<Recherche />} />
            <Route path="/decouvrir" element={<Decouvrir />} /> 
            <Route path="/reels" element={<Reels />} /> 
            <Route path="/message" element={<Message />} />  
            <Route path="/activite" element={<Activite />} />  
             
          </Routes>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Applogin">
        
        <Routes>
          <Route path="/" element={<Login setAuth={setAuth} />} />
          <Route path="/register" element={<Register setAuth={setAuth} />} />
          <Route
            path="/forgetpass"
            element={<ForgetPass setAuth={setAuth} />}
          />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
