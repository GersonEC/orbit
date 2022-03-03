import axios from 'axios';

// Fetch using for no-authentication services.
const publicFetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export { publicFetch };
