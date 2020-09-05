import axios from "axios";

export const AxiosCall = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:5002/api/",
    headers: {
      Authorization: token,
    },
  });
};