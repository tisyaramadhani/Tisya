import { AuthHeader } from "./AuthHeader.js";
import BaseApi from "./axios.js";

export const getSelection = async () => {
  const { data } = await BaseApi.get("/selection");
  return data;
};

export const postSelection = async (formData) => {
  const { data } = await BaseApi.post("/selection", formData, {
    headers: AuthHeader(),
  });
  return data;
};

export const putSelection = async (id, formData) => {
  const { data } = await BaseApi.put(`/selection/${id}`, formData, {
    headers: AuthHeader(),
  });
  return data;
};

export const deleteSelection = async (id) => {
  const { data } = await BaseApi.delete(`/selection/${id}`, {
    headers: AuthHeader(),
  });
  return data;
};
