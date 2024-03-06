import BaseApi from "./axios";

// certification
export const getCertification = async () => {
  const { data } = await BaseApi.get("/certification");
  return data;
};

// major
export const getMajor = async () => {
  const { data } = await BaseApi.get("/major");
  return data;
};

// skill
export const getSkill = async () => {
  const { data } = await BaseApi.get("/skill");
  return data;
};

// university
export const getUniversity = async () => {
  const { data } = await BaseApi.get("/university");
  return data;
};
