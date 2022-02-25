import client from './';

export const SignInUser = async (data) => {
  try {
    const res = await client.post('/auth/login', data);
    // Set the current signed in users token to localstorage
    console.log(res.data);
    localStorage.setItem('token', res.data.token);
    return res.data.user;
  } catch (error) {
    throw error;
  }
};

export const RegisterUser = async (data) => {
  try {
    const res = await client.post('/auth/register', data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    console.log('running check session');
    const res = await client.get('/auth/session');
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
