import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/authentification/login/Login";

import Register from "./pages/authentification/register/Register";
import { useContext, useState } from "react";
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
import Auth from "./context/auth";

import EditProfil from "./pages/editProfil/EditProfil";
import axios from "axios";

function App() {
  const { auth, setAuth } = useContext(Auth);
  const [creer, setCreer] = useState(false);
  const [plus, setPlus] = useState(false);
  const [infoModal, setInfoModal] = useState("");
  const [ShowModal, setShowModal] = useState(false);


  const onShowModal = async(id)=> {
    // console.log(id)
    if (ShowModal) {
      setShowModal(false)
    } else {
      try {
        const res = await axios.get(
          `http://localhost:5000/insta-api/posts/${id}`
        );
        setInfoModal(res.data)
        setShowModal(true)
      } catch (error) {
        console.log(error)
      }
    
    }
  }


  if (auth) {
    return (
      <div className="App">
        <New TestCreer={creer} setCreer={setCreer} />
        <Plus plus={plus} />
       

        <Aside setCreer={setCreer} setPlus={setPlus} plus={plus} />
        <div className="App_main">
          <Routes>
            <Route path="/" element={<Home  ShowModal={ShowModal}  onShowModal={onShowModal} infoModal= {infoModal} />} />
            <Route path="/profile" element={<Profil ShowModal={ShowModal} onShowModal={onShowModal} infoModal= {infoModal} />} />
            <Route path="/recherche" element={<Recherche />} />
            <Route path="/decouvrir" element={<Decouvrir />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/message" element={<Message />} />
            <Route path="/editprofil" element={<EditProfil />} />
            <Route path="/activite" element={<Activite />} />
          </Routes>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Applogin">
        <Routes>
          <Route path="/" element={<Login />} />
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
