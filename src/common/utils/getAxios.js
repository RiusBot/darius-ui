import defaultAxios from 'axios';
import firebase from '@/utils/firebase';

export default async function getAxios() {
  const idToken = await firebase.auth().currentUser?.getIdToken();

  const instance = defaultAxios.create({
    // baseURL: process.env.NEXT_PUBLIC_DARIUS_BACKEND_API,
    baseURL: "http://35.240.214.114:8080",
    headers: { Authorization: `Bearer ${idToken}` },
  });
  return instance;
}
