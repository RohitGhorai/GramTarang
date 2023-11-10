import { myAxios } from "./helper";

export const getAllSchemes = () => {
  return myAxios.get(`/schemes/`).then((response) => response.data);
};

export const getSchById = (id) => {
  return myAxios.get(`/schemes/${id}`).then((response) => response.data);
}