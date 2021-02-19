import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-product-create-form',
  templateUrl: './product-create-form.component.html',
  styleUrls: ['./product-create-form.component.css']
})
export class ProductCreateFormComponent implements OnInit {

  constructor(private productService : ProductService, private router: Router) { }

  ngOnInit(): void { }

  createProduct(): void {
    this.productService.showMessage("Product Successful Created");
  }

  cancel() :void {
    this.router.navigate(['/products']);
  }
}
