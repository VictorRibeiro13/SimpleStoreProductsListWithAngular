import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private _router : Router;

  constructor(private router: Router) { 
    this._router = router;
  }

  ngOnInit(): void {
  }

  navigateToProductCreateForm() {
    this._router.navigate(['/products/create'])
  }

}
