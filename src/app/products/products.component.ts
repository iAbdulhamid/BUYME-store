import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCartService } from '../Services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: any[] = [];
  filteredProducts: any[] = [];
  choosenCategory;
  cart: any;
  subscription: Subscription;

  constructor(private productService: ProductService,
              private cartService: ShoppingCartService,
              private route: ActivatedRoute) {

                this.subscription = this.productService.getAll().subscribe( p => {
                  this.products = p;
                // Reading the [queryParams] value ...
                this.route.queryParamMap.subscribe (params=> {
                  this.choosenCategory = params.get('category');
                // Filtering..
                this.filteredProducts = (this.choosenCategory) ?
                  this.products.filter(p => p.payload.val().category === this.choosenCategory) :
                    this.products;
                })
              })

              }

  async ngOnInit(): Promise<void> {
    (await this.cartService.getMyCart()).valueChanges().subscribe(cart => {
      this.cart = cart;
      console.log ('ss...' + cart);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

