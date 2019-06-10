import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  //
  createProduct(product){
    this.db.list('/Products').push(product);   
  }

  getAll() {
    return this.db.list('/Products').snapshotChanges(); // to retrive the key with the properites..
  }
 
  getProductById(productId: string) {
    return this.db.object('/Products/' + productId).valueChanges();
  }

  updateProduct(productId: string, product){
    return this.db.object('/Products/' + productId).update(product);
  }

  deleteProduct(productId: string){
    return this.db.object('/Products/' + productId).remove();
  }
}
