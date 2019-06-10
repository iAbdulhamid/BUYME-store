import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../Services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart$ = {};
  constructor(private shoppingcartService: ShoppingCartService) { }

   ngOnInit() {
    let myCart = this.shoppingcartService.getMyCart(); // .then(data => {
    console.log('test:' + JSON.stringify(myCart));
    // });

  }

}
