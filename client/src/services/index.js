import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:3001/api' });

// Intercepts every request axios makes
client.interceptors.request.use(
  (config) => {
    // Reads the token in localstorage
    const token = localStorage.getItem('token');
    // if the token exists, we set the authorization header
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`;
    }
    return config; // We return the new config if the token exists or the default config if no token exists.
    // Provides the token to each request that passes through axios
  },
  (error) => Promise.reject(error)
);

export default client;
