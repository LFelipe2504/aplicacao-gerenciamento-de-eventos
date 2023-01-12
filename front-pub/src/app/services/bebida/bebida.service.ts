import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Bebida } from 'src/app/interfaces/Bebida';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  private apiUrl = "http://localhost:5000/bebidas"

  constructor( private http: HttpClient) { }

  getApiUrl(){
    return this.apiUrl;
  }

  getBebidas(): Observable<Bebida[]> {
    return this.http.get<Bebida[]>(this.apiUrl);
  }

  getBebida(id: string): Observable<Bebida>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Bebida>(url);
  }

  createBebida(bebida: Bebida): Observable<Bebida> {
    return this.http.post<Bebida>(this.apiUrl, bebida);
  }

  removeBebida(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateBebida(id: string, bebida: Bebida): Observable<Bebida> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Bebida>(url, bebida);
  }
}
