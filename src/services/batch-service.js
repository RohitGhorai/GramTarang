import { privateAxios } from "./helper";

export const getBatchStatus = (centerId) => {
  return privateAxios
    .get(`/batchStatus/${centerId}`)
    .then((response) => response.data);
};