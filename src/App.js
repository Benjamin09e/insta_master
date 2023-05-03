import "./App.css";
import Navbar from "./components/navbar/Navbar";
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

function App() {
  const [auth, setAuth] = useState(true);

  if (auth) {
    return (
      <div className="App">
        <Aside />
        <div className="App_main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profil />} />
            <Route path="/recherche" element={<Recherche />} />
          </Routes>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
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
