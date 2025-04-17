import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  public baseUrl = 'http://localhost:8080/api/products'
  private categoryUrl = 'http://localhost:8080/api/product-category';

  private productSubject = new BehaviorSubject<Product[]>([]);
  private produc$ = this.productSubject.asObservable();
  private categorySubject = new BehaviorSubject<ProductCategory[]>([]);
  private categories$ = this.categorySubject.asObservable();
  
  constructor(public httpClient: HttpClient,) {
    this.getProductList(1);
   }

   getProductList(theCategoryId: number){
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
    this.fetchProducts(searchUrl);
  }

  getProductCategories(): void{
    this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    ).subscribe(categories => this.categorySubject.next(categories));
  }

  searchProducts(keyword: string): void {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${keyword}`;
    this.fetchProducts(searchUrl);
  }
  getProductsDetails(theProductId: number) {
   const productDetailURL = `${this.baseUrl}/${theProductId}`;
   return this.httpClient.get<Product>(productDetailURL);
  }

  private fetchProducts(searchUrl: string): void {
    this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    ).subscribe(products => this.productSubject.next(products));
  }
  
  getCategories(): Observable<ProductCategory[]>{
    return this.categories$;
  }

  getProducts(): Observable<Product[]>{
    return this.produc$;
  }
}
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}