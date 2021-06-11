import axios from "axios";
import { TOKEN } from "../contexts/AuthContext";

export function apiAxios() {
  const token = localStorage.getItem(TOKEN);

  const api = axios.create({
    baseURL: "http://localhost:3333/api/v1", // Url API Base
  });

  api.interceptors.request.use(
    (request) => {
      if (token) {
        api.defaults.headers["Authorization"] = `Bearer ${token}`;
      }

      return request;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Print message error
      console.log(error);
    }
  );

  return api;
}
