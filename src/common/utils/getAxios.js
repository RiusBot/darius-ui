import defaultAxios from 'axios';
import firebase from '@/utils/firebase';

export default function getAxios() {
  const idToken = firebase.auth().currentUser.getIdToken(true)
  
  const instance = defaultAxios.create({
    baseURL: 'http://localhost:8080',
    headers: { Authorization: `Bearer ${idToken}` },
  });
  return instance;
}
