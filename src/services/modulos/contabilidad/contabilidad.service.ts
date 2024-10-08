import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContabilidadService {
  
  private http = inject(HttpClient);
  readonly baseUrl = `${environment.endpoint}/contabilidad`;

  getAccounting() {
    return this.http.get<any>(`${this.baseUrl}/contabilidad`);
  }

  getAccountingById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/contabilidad/${id}`);
  }

  createAccounting(data: any) {
    return this.http.post<any>(`${this.baseUrl}/contabilidad`, data);
  }

  updateAccounting(id: number, data: any) {
    return this.http.put<any>(`${this.baseUrl}/contabilidad/${id}`, data);
  }

  deleteAccounting(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/contabilidad/${id}`);
  }
}
