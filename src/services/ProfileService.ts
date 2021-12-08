import axios from "axios";
import Profile from "../models/Profile";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const addProfile = (profile: Profile): Promise<Profile> =>
  axios.post(`${baseURL}/profiles`, profile).then((response) => response.data);

export const getProfile = (uid: string): Promise<Profile[]> => {
  return axios
    .get(`${baseURL}/profiles/${encodeURIComponent(uid)}`)
    .then((response) => response.data);
};

export const deleteProfile = (uid: string): Promise<void> => {
  return axios
    .delete(`${baseURL}/profiles/${encodeURIComponent(uid)}`)
    .then((response) => response.data);
};
