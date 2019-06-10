import { Component, OnInit } from '@angular/core';
import { CategotyService } from 'src/app/Services/categoty.service';
import { ProductService } from 'src/app/Services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/take';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.scss']
})
export class NewProductFormComponent implements OnInit {

  categories$: Observable<any[]>;
  product = {};
  id;

  constructor(private catService: CategotyService,
              private prodService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {

    this.categories$ = this.catService.getCategories();

    // if the admin coming to this page from (Edit) link ...
    // i need to get the product id .. to get this product and display it to the form ...
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.prodService.getProductById(this.id).pipe(take(1)).subscribe(p=> this.product=p);
      //console.log(this.product);
    }

  }

  ngOnInit() {
    //console.log(this.categories$);
  }

  save(product) {
    
    if(this.id) { // you are coming from Edit form ...
      this.prodService.updateProduct(this.id, product);
    } else {
    this.prodService.createProduct(product);
    }
    this.router.navigate(['/admin/products'])
  }

  delete(){
    if(!confirm('Are You sure about deleting this product?')) return;
    
    
    this.prodService.deleteProduct(this.id);
    this.router.navigate(['/admin/products'])
  }
}
