import { Component, OnInit, Input } from '@angular/core';
import { CategotyService } from 'src/app/Services/categoty.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  @Input('choosenCategory') choosenCategory;
  categories$;

  constructor(private catService: CategotyService) { 
    this.categories$ = this.catService.getCategories();
  }
 
  ngOnInit() {}
}
