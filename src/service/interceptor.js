import axios from "axios";

const api = axios.create({
  baseURL: "https://fe-task-api.mainstack.io/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
