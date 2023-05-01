import { myAxios } from "./helper";

export const getAllSchemes = () => {
  return myAxios.get(`/schemes/`).then((response) => response.data);
};
