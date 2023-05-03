import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:3050/dashboard';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl);
  }
}
