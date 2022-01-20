import axios from 'axios';

const client = axios.create({ baseURL: 
  //heroku
process.env.NODE_ENV === 'production'
? `${window.location.origin}/api`
: '<your local backend server>/api' })
//heroku 


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
