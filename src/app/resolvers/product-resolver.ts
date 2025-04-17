import { Injectable } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "../common/product";


@Injectable({providedIn: "root"})
export class ProductResolver {

    constructor(private productService: ProductService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>{
        const id = +route.paramMap.get('id')!;
        console.log('[RESOLVER] Fetching product with id:', id); 
        return this.productService.getProductsDetails(id);
    }
}
