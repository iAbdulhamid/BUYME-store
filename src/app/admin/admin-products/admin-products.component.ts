import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Observable, Subscription, Subject } from 'rxjs';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})

export class AdminProductsComponent implements OnInit, OnDestroy {

  products : any[];
  filteredProducts : any[];
  subScribe: Subscription;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor( private prodService: ProductService) {
    this.subScribe =
     this.prodService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    }); 
   }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

  filter(queryString: string){
    if(queryString) { 
      this.filteredProducts = 
        this.products.filter(p => p.payload.val().title.toLowerCase().includes(queryString.toLocaleLowerCase()));
    } else {
      this.filteredProducts = this.products;
    }
  }

  ngOnDestroy(): void {
    this.subScribe.unsubscribe();
  }
}
