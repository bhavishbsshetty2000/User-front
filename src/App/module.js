import axios from "axios";
const serverUrl = "http://localhost:2000";
const productionUrl = "https://users-add-remove.herokuapp.com";

export const getUser = () => {
  return axios.get(`${productionUrl}/get-users`).then((res) => res.data);
};

export const addUser = (name) => {
  return axios
    .post(`${productionUrl}/user-create`, { name })
    .then((res) => res.data);
};

export const removeUser = (id) => {
  return axios
    .delete(`${productionUrl}/delete-users/${id}`)
    .then((res) => res.data);
};
