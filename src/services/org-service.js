import { myAxios } from "./helper";

export const getAllOrgs = () => {
  return myAxios.get(`/orgs/`).then((response) => response.data);
};
