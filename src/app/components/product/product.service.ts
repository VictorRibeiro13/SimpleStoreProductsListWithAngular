import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Product from './product.model';
import { ArgumentOutOfRangeError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(
      `${environment.baseUrlApi}/products`,
      product,
    );
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrlApi}/products`);
  }

  readById(id: string | null): Observable<Product> {
    if (!id) throw new Error('Id does not exists');

    const url = `${environment.baseUrlApi}/products/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = `${environment.baseUrlApi}/products/${product.id}`;
    return this.http.put<Product>(url, product);
  }
}
