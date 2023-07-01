import { myAxios, privateAxios } from "./helper";

export const signup = (user) => {
  return myAxios
    .post(`/tpUsers/schemes/${user.schId}/orgs/${user.orgId}`, user)
    .then((response) => response.data);
};

export const loginUser = (loginDetail) => {
  return myAxios
    .post(`/auth/login`, loginDetail)
    .then((response) => response.data);
};

export const getAllTpUsers = (pageNumber, pageSize) => {
  return privateAxios
    .get(
      `/tpUsers/?pageNumber=${pageNumber}&pageSize=${pageSize}&sortDirection=desc`
    )
    .then((response) => response.data);
};

export const updateTpUser = (update, tpUserId) => {
  return privateAxios
    .put(`/tpUsers/${tpUserId}`, update)
    .then((response) => response.data);
};

export const updateSrcUser = (update, srcUserId) => {
  return privateAxios
    .put(`/srcUsers/${srcUserId}`, update)
    .then((response) => response.data);
};
