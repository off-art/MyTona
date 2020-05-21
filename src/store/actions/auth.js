import axios from "axios";
import { AUTH_SUCCESS, AUTH_LOGOUT } from "./actionTypes";

export function auth(email, password, isLogin) {
  return async (dispatch) => {

    const authData = {
      email,
      password,
      returnSecureToken: true,
    };
    try{
      let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBAnwjfCHkOBEonkEUozGnvYJnlBvQrr8Q";
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBAnwjfCHkOBEonkEUozGnvYJnlBvQrr8Q";
    }

    const response = await axios.post(url, authData);
    const data = response.data;
    const expirationDate = new Date(
      new Date().getTime() + data.expiresIn * 1000
    );


    localStorage.setItem("token", data.idToken);
    localStorage.setItem("userId", data.localId);
    localStorage.setItem("expiresIn", expirationDate);
    localStorage.setItem('email', data.email)

    dispatch(authSuccess(data.idToken, data.email));
    dispatch(autoLogout(data.expiresIn));
    } catch(error) {
      alert(error.response.data.error.message)
    }

    
  };
}

export function authSuccess(token, email) {
  return {
    type: AUTH_SUCCESS,
    token,
    email
  };
}

export function autoLogout(time) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logOut());
    }, time * 1000);
  };
}

export function logOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expiresIn");
  localStorage.removeItem('email')
  return {
    type: AUTH_LOGOUT
  };
}

export function autoLogin() {
  return dispatch => {
    const token = localStorage.getItem('token')
    if(!token) {
      dispatch(logOut())
    } else {
      const expDate = new Date(localStorage.getItem('expiresIn'))
      if(expDate <= new Date()) {
        dispatch(logOut())
      } else {
        dispatch(authSuccess(token));
        dispatch(autoLogout((expDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  }
}
