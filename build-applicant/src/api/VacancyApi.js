import BaseApi from "./axios";

export const getJob = async (query) => {
  const { data } = await BaseApi.get(`/job?search=${query}`);
  return data;
};

export const getJobById = async (id) => {
  const { data } = await BaseApi.get(`/job/${id}`);
  return data;
};
