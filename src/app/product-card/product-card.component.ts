import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../Services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor(private cartService: ShoppingCartService) { }

  @Input ('product') product: any = []; 
  @Input ('shoppingCart') shoppingCart;

  ngOnInit() {
  } 

  addToCart(){
    this.cartService.addToCart(this.product);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }

  getQuantity(){
    if(!this.shoppingCart) {return 0;}
    let item = this.shoppingCart.items[this.product.key];
    return item ? item.quantity : 0;
  }

}
