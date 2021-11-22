import cookie from 'js-cookie';
import defaultAxios from 'axios';

export default function getAxios() {
  // const { idToken } = cookie.get(process.env.COOKIE_TOKEN_NAME);

  const instance = defaultAxios.create({
    // baseURL: process.env.DARIUS_BACKEND_ENDPOINT,
    // headers: { Authorization: `Bearer ${idToken}` },
    baseURL: 'http://localhost:8080',
  });
  return instance;
}
