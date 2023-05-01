import { myAxios, privateAxios } from "./helper";

export const signup = (user, schId, orgId) => {
  return myAxios
    .post(`/auth//register/schemes/${schId}/orgs/${orgId}`, user)
    .then((response) => response.data);
};

export const loginUser = (loginDetail) => {
  return myAxios
    .post(`/auth/login`, loginDetail)
    .then((response) => response.data);
};

export const getAllSchemes = (schemes) => {
  return myAxios.get(`/schemes/`, schemes).then((response) => response.data);
};

export const getAllOrgs = (orgs) => {
  return myAxios.get(`/orgs/`, orgs).then((response) => response.data);
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
