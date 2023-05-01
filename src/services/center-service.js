import { privateAxios } from "./helper";

export const createCenter = (center, tpUserId) => {
  return privateAxios
    .post(`/tpUsers/${tpUserId}/centers/`, center)
    .then((response) => response.data);
};

export const getAllCenters = (pageNumber, pageSize) => {
  return privateAxios
    .get(`/centers?pageNumber=${pageNumber}&pageSize=${pageSize}&sortDirection=desc`, centers)
    .then((response) => response.data);
};

export const updateCenter = (center, centerId) => {
  return privateAxios
    .put(`/centers/${centerId}`, center)
    .then((response) => response.data);
};

export const deleteCenter = (centerId) => {
  return privateAxios
    .delete(`/centers/${centerId}`)
    .then((response) => response.data);
};
