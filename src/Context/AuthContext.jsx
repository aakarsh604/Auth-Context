import React, { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const form = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorized, setisAuthorized] = useState(false);
  const [token, settoken] = useState(false);
  const [error, seterror] = useState(false);

  const login = (username, password) => {
    if ( username === form.email && password === form.password){
        const postData = async () => {
            const res = await axios.post("https://reqres.in/api/login", form);
            console.log(res.data);
            settoken(res.data);
    }
            postData();
            setisAuthorized(false);
            seterror(false);
    }  else {
        console.log("Wrong INFO")
        seterror("Wrong Credentials")
    }
  
  };

  const logout = () => {
    setisAuthorized(false);
    settoken(false);
    seterror(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthorized, login, logout, setisAuthorized , token, error }}>
      {children}
    </AuthContext.Provider>
  );
};
