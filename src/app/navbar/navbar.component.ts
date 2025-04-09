import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {

  searchKeyword: string = '';
  private searchSubject = new Subject<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(keyword => {
      if(keyword.trim()){
        this.router.navigateByUrl(`/search/${keyword}`);
      }else{
        this.router.navigateByUrl(`/products`);
      }
    });
  }

  searchProducts() {
    this.searchSubject.next(this.searchKeyword);
  }
}
// DEEPLINK



// STARY KOD
// searchKeyword: string = '';

//   constructor(private router: Router) {}

//   searchProducts() {
//     if (this.searchKeyword.trim().length > 0) {
//       this.router.navigateByUrl(`/search/${this.searchKeyword}`);
//     }
//   }
