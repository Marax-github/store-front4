import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  product$!: Observable<Product[]>;
  currentCategoryId: number = 1;
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.product$ = this.productService.getProducts();
    
    this.route.paramMap.subscribe((params) => {
      if (params.has('keyword')) {
        this.searchMode(params.get('keyword')!);
      } else {
        this.categoryId();
      }
    });
  }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(() => {
  //     this.categoryId()
  //     this.products
  //     // this.product$ = this.productService.getProducts();
  //   })

  // }

  categoryId() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      this.currentCategoryId = 1;
    }

    this.productService.getProductList(this.currentCategoryId);
  }

  searchMode(keyword: string) {
    this.productService.searchProducts(keyword);
  }

  get products$() {
    return (this.product$ = this.productService.getProducts());
  }
}
