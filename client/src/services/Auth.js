import axios from 'axios'
import { BASE_URL } from '../globals'


export const SignInUser = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, data);
    // Set the current signed in users token to localstorage
    localStorage.setItem('token', res.data.token);
    return res.data.user;
  } catch (error) {
    throw error;
  }
};

export const RegisterUser = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/register`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await axios.get(`${BASE_URL}/auth/session`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
