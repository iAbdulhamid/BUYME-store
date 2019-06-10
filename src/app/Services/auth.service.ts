import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable <firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    //afAuth.authState.subscribe(user => this.user = user);
    this.user$ = afAuth.authState;
  }

  login() {
    // Old!
    //let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    //localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  loginFacebook(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
