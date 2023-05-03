import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public auth: Auth) {}

  registrarUser({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginconGoogle() {
    return new Promise((resolve, reject) => {
      signInWithPopup(this.auth, new GoogleAuthProvider())
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
