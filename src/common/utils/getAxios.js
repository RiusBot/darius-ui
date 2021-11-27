import cookie from 'js-cookie';
import defaultAxios from 'axios';

export default function getAxios() {
  // const { idToken } = cookie.get(process.env.COOKIE_TOKEN_NAME);

  const instance = defaultAxios.create({
    baseURL: 'http://localhost:8080',
    // headers: { Authorization: `Bearer ${idToken}` },
  });
  return instance;
}
