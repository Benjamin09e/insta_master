import axios from "axios";
import jwtDecode from "jwt-decode";
import { additem, removeitem, getitem } from "./localStorage";

export function hasAuthenticated() {
  const token = getitem();
  const result = token ? tokenIsValid(token) : false;
  if (false === result) {
   removeitem();
  }
  return result;
}


export function hasAuthenticate() {
  const token = getitem();
  if (token) {
    if (tokenIsValid(token) === false) {
      return false;
    } else {
      const res = jwtDecode(token);
      const result = res;
      const elements = {
        email: result.email,
        id: result.userId
      }
      return elements;
    }
  }
  return false;
}


export function LoginApi(email, mot_de_passe) {
  return axios
    .post("http://localhost:5000/insta-api/users/login", {
      email: email,
      mot_de_passe: mot_de_passe,
    })
    .then((token) => {
      additem(token.data.token);
      const resDecode = jwtDecode(token.data.token);
      const elements = {
        email: resDecode.email,
        id: resDecode.userId
      }
      const data = { status: true, elements };
      return data;

    })
    .catch(error => {
      console.log(error)
    })
}

export function logout() {
  removeitem();
}

function tokenIsValid(token) {
  const decode = jwtDecode(token);
  if (decode.exp * 1000 > new Date().getTime()) {
    return true;
  }
  return false;
}