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


const route: Routes = [
  {path: 'search/:keyword', component: ProductListComponent},
  {path:'category/:id', component: ProductListComponent},
  {path:'category',component: ProductListComponent},
  {path:'products',component: ProductListComponent},
  {path:'', redirectTo:'/products',pathMatch: 'full'},
  {path:'**',redirectTo:'/products',pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    ProductCategoryMenuComponent,
  ],
  imports: [
    RouterModule.forRoot(route),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(), ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
