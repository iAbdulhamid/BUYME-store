import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable  } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/operators'; 
import { IUserInfo } from '../Shared Classes and Interfaces/userInfo';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase, private authService: AuthService) { }

  save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    }); 
  }
  // get user by id:
  getUser(uid: string)  {
     return this.db.object('/users/' + uid).valueChanges(); 
  }
  // property
  get appUser$() :Observable<IUserInfo> {
    return this.authService.user$.pipe(switchMap(user=>{
      if(user){
        return this.getUser(user.uid);
      } else {
        return of(null);
      }
    }))
  }
}
