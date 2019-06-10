import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {
   
  constructor(private userService: UserService) { }

  canActivate() : Observable<boolean> {
    // get the current user
    // check.. is he admin ? (can access the admin pages) : (can't access ..)
    return this.userService.appUser$.pipe(map(appuser => appuser.isAdmin));
  }
}


