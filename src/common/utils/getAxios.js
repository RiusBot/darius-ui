import defaultAxios from 'axios';
import firebase from '@/utils/firebase';

export default function getAxios() {
  const idToken = firebase.auth().currentUser.getIdToken(true)

  const instance = defaultAxios.create({
    baseURL: process.env.NEXT_PUBLIC_DARIUS_BACKEND_API,
    headers: { Authorization: `Bearer ${idToken}` },
  });
  return instance;
}
