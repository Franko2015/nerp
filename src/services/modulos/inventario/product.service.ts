import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  readonly baseUrl = `${environment.endpoint}/productos`;

  getProducts() {
    return this.http.get(this.baseUrl);
  }

  getProductById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduct(product: any) {
    return this.http.post(this.baseUrl, product);
  }

  updateProduct(id: number, product: any) {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}
