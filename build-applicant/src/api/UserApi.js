import { AuthHeader, AuthHeaderForm } from "./AuthHeader.js";
import BaseApi from "./axios.js";

export const getUser = async () => {
  const { data } = await BaseApi.get("/user");
  return data;
};

export const deleteUser = async (id) => {
  const { data } = await BaseApi.delete(`/user/${id}`);
  return data;
};

export const signup = async (formData) => {
  const { data } = await BaseApi.post("/signup", formData);
  return data;
};

export const signinUser = async (formData) => {
  const { data } = await BaseApi.post("/signin-user", formData);
  return data;
};

export const getApplicant = async (nik) => {
  const { data } = await BaseApi.get(`/applicant/${nik}`, {
    headers: AuthHeader(),
  });
  return data;
};

export const postApplicant = async (formData) => {
  const { data } = await BaseApi.post("/applicant", formData, {
    headers: AuthHeaderForm(),
  });
  return data;
};

export const putApplicant = async (nik, formData) => {
  const { data } = await BaseApi.put(`/applicant/${nik}`, formData, {
    headers: AuthHeader(),
  });
  return data;
};

export const putChangePasswordUser = async (id, formData) => {
  const { data } = await BaseApi.put(`/change-password-user/${id}`, formData, {
    headers: AuthHeader(),
  });
  return data;
};

export const postSendForgetPassword = async (formData) => {
  const { data } = await BaseApi.post("/send-forgot-password", formData);
  return data;
};

export const putForgetPassword = async (token, formData) => {
  const { data } = await BaseApi.put(`/forgot-password/${token}`, formData);
  return data;
};
