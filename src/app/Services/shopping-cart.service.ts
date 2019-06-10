import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { take, map } from 'rxjs/operators';
import { IShoppingCart } from '../Shared Classes and Interfaces/ishopping-cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  // 01: creating shopping cart...
  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime() // creating date...
    });
  }

  // 02: When the user clicking (add to cart)..
  // Is this his first click ? creatCart : getCart;
  private async getOrCreateCartId() {
    let cartID = localStorage.getItem('cartID');
    if (cartID) {
      return cartID;
    }

    let result = await this.create();
    localStorage.setItem('cartID', result.key);
    return result.key;
  }

  // 03: Get the product the the user want to add to cart...
  // and pushing it to the shopping-cart...
  getItem(cartID: string, productID: string) {
    return this.db.object('/shopping-carts/' + cartID + '/items/' + productID);
  }

  // 04: Add(+) or Remove(+) from the Shopping-Cart..
  async updateCart(product, quantityState) {

    let cartid = await this.getOrCreateCartId();

    let item$ = this.getItem(cartid, product.key); // Adding the product to the cart...
    item$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {
      // if the item already added before...
      if (item.payload.exists()) {
        item$.update({quantity: item.payload.val().quantity + quantityState});
      // the first add...
      } else {
        item$.update({
          product: {
            title: product.payload.val().title,
            price: product.payload.val().price,
            category: product.payload.val().category,
            imageUrl: product.payload.val().imageUrl
          }, quantity: 1});
      }

    });
  }

  async addToCart(product)      { this.updateCart(product,  1)}
  async removeFromCart(product) { this.updateCart(product, -1)}

  public async getMyCart(): Promise<AngularFireObject<IShoppingCart>> {
    let cartid = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartid + '/items'); // .valueChanges()
    // .pipe(map(cart => new IShoppingCart(cart as any).items));
  } // async .. await => return promise ...
}
