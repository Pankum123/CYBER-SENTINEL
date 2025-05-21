import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("CyberApp");
    //get method dwara browser se cookie->jwt and userinformation->ChatApp se lenge 

  // parse the user data and storing in state.
  const [authUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);