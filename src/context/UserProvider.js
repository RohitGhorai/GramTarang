import React from "react";
import { useEffect, useState } from "react";
import { getCurrentTpUserDetail, getCurrentSrcUserDetail, isLoggedIn } from "../authentication/index";
import userContext from "./userContext";

function UserProvider({ children }) {
  const [user, setUser] = useState({
    srcUser: {},
    tpUser: {},
    login: false,
  });
  useEffect(() => {
    setUser({
      srcUser: getCurrentSrcUserDetail(),
      tpUser: getCurrentTpUserDetail(),
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
