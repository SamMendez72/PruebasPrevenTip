import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl = environment.baseUrl;
 
  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get(`${this.baseUrl}/dashboard`);
  }

  getCategoria(idCategoria: string){
   return this.http.get(`${this.baseUrl}/dashboard/${idCategoria}`);
  }
}
