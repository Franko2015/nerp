import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor() { }

  private http = inject(HttpClient);
  readonly baseUrl = `${environment.endpoint}/ventas`;

  getSales() {
    return this.http.get<any>(this.baseUrl);
  }

  getSaleById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createSale(data: any) {
    return this.http.post<any>(this.baseUrl, data);
  }

  updateSale(id: number, data: any) {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }

  deleteSale(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
  
  getSalesByDateRange(startDate: string, endDate: string) {
    return this.http.get<any>(`${this.baseUrl}/por-fecha?startDate=${startDate}&endDate=${endDate}`);
  }

  getSalesByProduct(productId: number) {
    return this.http.get<any>(`${this.baseUrl}/por-producto/${productId}`);
  }

  getSalesByCustomer(customerId: number) {
    return this.http.get<any>(`${this.baseUrl}/por-cliente/${customerId}`);
  }
}
