import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { IUserInfo } from '../Shared Classes and Interfaces/userInfo';
import { UserService } from '../Services/user.service';
import { map } from 'rxjs/operators';
import { ShoppingCartService } from '../Services/shopping-cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  // user$: Observable <firebase.User>;
  appUser: IUserInfo;
  shoppingCartCounter: number;

  constructor(private afAuthService: AuthService,
              private userService: UserService,
              private cartService: ShoppingCartService) {

    this.userService.appUser$.pipe(map(appUser => appUser.isAdmin));

   }

  async ngOnInit() {
    let cart$ = await this.cartService.getMyCart();
    cart$.valueChanges().subscribe( cart => {
      this.shoppingCartCounter = 0;
      for (let productID in cart.items) {
            this.shoppingCartCounter += cart.items[productID].quantity;
           }
    });
    // cart$.valueChanges().subscribe(cart => {
    //   sfor (let item in cart.items) {
    //     thi.shoppingCartCounter += cart.items[item].quantity;
    //   }
  //  })
  }

  logout() {
    this.afAuthService.logout();
  }
}
