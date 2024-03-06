import BaseApi from "./axios";

export const getRunningText = async () => {
  const { data } = await BaseApi.get("/running-text");
  return data;
};

export const getRunningTextById = async (id) => {
  const { data } = await BaseApi.get(`/running-text/${id}`);
  return data;
};
