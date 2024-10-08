import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private http = inject(HttpClient);
  readonly baseUrl = `${environment.endpoint}/config`;

  getSettingById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSetting(setting: any) {
    return this.http.post(this.baseUrl, setting);
  }

  updateSetting(id: number, setting: any) {
    return this.http.put(`${this.baseUrl}/${id}`, setting);
  }

  deleteSetting(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
