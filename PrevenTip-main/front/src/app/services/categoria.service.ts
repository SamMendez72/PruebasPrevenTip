import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl = 'http://localhost:3050/users';
 
  constructor(private http: HttpClient) { }

  //Obtener la información de todos los clientes
  getCategorias() {
    return this.http.get(`${this.baseUrl}`);
  }

  // Obtener el registro de vitales mas reciente de un cliente especifico
  getCategoria(idCategoria: number):Observable<any>{
   return this.http.get(`${this.baseUrl}/${idCategoria}`);
  }

  // Obtener el historial de registros de vitales de un cliente especifico
  getCategoriaEverthing(userId: number): Observable<any> {
    const url = `${this.baseUrl}/todo/${userId}`;
    return this.http.get(url);
  }
}
