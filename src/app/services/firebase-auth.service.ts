import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router"


@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  get user(){
    return this.afAuth.auth.currentUser;
  }

  register(email: string, password: string) {
   return this.afAuth.auth.
   createUserWithEmailAndPassword(email, password)
   .catch((error: Error) => {
     console.error(error);
     throw error;
   });
  }

  login(email:string, password: string) {
    return this.afAuth.auth
    .signInWithEmailAndPassword(email, password)
    .catch((error: Error) => {
      console.error(error.message);
      throw error;
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    }
    );
  }
 
}


