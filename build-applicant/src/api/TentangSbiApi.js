import BaseApi from "./axios";

// profile company
export const getProfileCompany = async () => {
  const { data } = await BaseApi.get("/profile-company");
  return data;
};

export const getProfileCompanyById = async (id) => {
  const { data } = await BaseApi.get(`/profile-company/${id}`);
  return data;
};

// president text
export const getPresidentText = async () => {
  const { data } = await BaseApi.get("/president-text");
  return data;
};

export const getPresidentTextById = async (id) => {
  const { data } = await BaseApi.get(`/president-text/${id}`);
  return data;
};

// sws
export const getSWS = async () => {
  const { data } = await BaseApi.get("/sws");
  return data;
};

export const getSWSById = async (id) => {
  const { data } = await BaseApi.get(`/sws/${id}`);
  return data;
};
