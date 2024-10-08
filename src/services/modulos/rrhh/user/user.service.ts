import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  readonly baseUrl = `${environment.endpoint}/usuarios`;

  constructor() { }

  getUser() {
    return this.http.get(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: any) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(id: number, user: any) {
    return this.http.put(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
