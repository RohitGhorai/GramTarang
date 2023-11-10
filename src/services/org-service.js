import { myAxios } from "./helper";

export const getAllOrgs = () => {
  return myAxios.get(`/orgs/`).then((response) => response.data);
};

export const getOrgById = (id) => {
  return myAxios.get(`/orgs/${id}`).then((response) => response.data);
}
