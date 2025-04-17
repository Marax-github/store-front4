import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './components/product-details/product-details.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    ProductCategoryMenuComponent,
    ProductDetailsComponent,
  ],
  imports: [
    // RouterModule.forRoot(route),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService,
    provideHttpClient(
      
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
