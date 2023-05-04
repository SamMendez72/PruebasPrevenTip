import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = 'http://localhost:3050/users'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    const url = `${this.apiUrl}`;
    return this.http.get(url);
  }

  getUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }

  getUserFiles(userId: number): Observable<any> {
    const url = `${this.apiUrl}/todo/${userId}`;
    return this.http.get(url);
  }
}
