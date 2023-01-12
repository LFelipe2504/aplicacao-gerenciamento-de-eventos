import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Comida } from 'src/app/interfaces/Comida';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  private apiUrl = "http://localhost:5000/comidas"

  constructor( private http: HttpClient) { }

  getApiUrl(){
    return this.apiUrl;
  }

  getComidas(): Observable<Comida[]> {
    return this.http.get<Comida[]>(this.apiUrl);
  }

  getComida(id: string): Observable<Comida>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Comida>(url);
  }

  createComida(comida: Comida): Observable<Comida> {
    return this.http.post<Comida>(this.apiUrl, comida);
  }

  removeComida(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateComida(id: string, comida: Comida): Observable<Comida> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Comida>(url, comida);
  }
}
