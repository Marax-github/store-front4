import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-category-menu',
  standalone: false,
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css'
})
export class ProductCategoryMenuComponent implements OnInit {

  productCategories$!: Observable<ProductCategory[]>;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productCategories$ = this.productService.getCategories();
    this.productService.getProductCategories();
  }

  // listProductCategories() {

  //   this.productService.getProductCategories().subscribe(
  //     data => {
  //       console.log('Product Categories=' + JSON.stringify(data));
  //       this.productCategories = data;
  //     }
  //   );
  // }



}
