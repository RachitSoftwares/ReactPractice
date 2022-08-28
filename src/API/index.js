import axios from "axios";
export const getAPICall = () => {
  return axios.get("https://reqres.in/api/users");
};
