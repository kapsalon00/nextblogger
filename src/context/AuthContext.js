import React, { createContext, useState } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);

  projectAuth.onAuthStateChanged((user) => {
    if (user) {
      setisAuth(true);
    } else {
      setisAuth(false);
    }
  });
  const value = { isAuth, setisAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
