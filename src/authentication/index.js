export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data != null) return true;
  else return false;
};

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};

export const getCurrentSrcUserDetail = () => {
  return isLoggedIn()
    ? JSON.parse(localStorage.getItem("data")).srcUser
    : undefined;
};

export const getCurrentTpUserDetail = () => {
  return isLoggedIn()
    ? JSON.parse(localStorage.getItem("data")).tpUser
    : undefined;
};

export const getToken = () => {
  if (isLoggedIn()) return JSON.parse(localStorage.getItem("data")).token;
  else return null;
};
