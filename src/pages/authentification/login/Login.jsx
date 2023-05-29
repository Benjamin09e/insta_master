import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import "../authentification.css";
import "../../../components/footer/Footer.css";
import axios from "axios";

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [mot_de_passe, setMot_de_passe] = useState("");

  const handleSubmit = async () => {
    await axios
      .post("http://localhost:5000/api/login", {
        email: email,
        mot_de_passe: mot_de_passe,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="container-card">
        <div className="card-content">
          <div className="block">
            <h1>Instagram</h1>
          </div>

          <div  className="signup">
            <div className="field">
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Num. téléphone, nom d'utilisateur ou e-mail"
                required
              />
            </div>
            <div className="field">
              <input
                value={mot_de_passe}
                onChange={(e) => {
                  setMot_de_passe(e.target.value);
                }}
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="field btn">
              <button onClick={handleSubmit} className="btn-layer">Se Connecter</button>
            </div>
           </div>
          <hr />
          <div className="space-btn">
            <NavLink className="nav-link" to="#">
              <p className="sp-text">
                {" "}
                <AiFillFacebook /> Se connecter avec Facebook
              </p>
            </NavLink>
            <NavLink className="nav-link" to="/forgetpass">
              <p className="style-link">Mot de passe oublié ?</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container-card-child">
        <div className="card-content">
          <p>
            Vous n'avez pas de compte ?{" "}
            <NavLink className="sp-color" to="/register">
              Inscrivez-vous
            </NavLink>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
