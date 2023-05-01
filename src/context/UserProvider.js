import React from "react";
import { useEffect, useState } from "react";
import { getCurrentUserDetail, isLoggedIn } from "../authentication/index";
import userContext from "./userContext";

function UserProvider({ children }) {
  const [user, setUser] = useState({
    data: {},
    login: false,
  });
  useEffect(() => {
    setUser({
      user: getCurrentUserDetail(),
      login: isLoggedIn(),
    });
  }, []);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
