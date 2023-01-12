import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Evento } from 'src/app/interfaces/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private apiUrl = "http://localhost:5000/eventos"

  constructor( private http: HttpClient) { }

  getApiUrl(){
    return this.apiUrl;
  }

  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl);
  }

  getEvento(id: string): Observable<Evento>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Evento>(url);
  }

  createEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.apiUrl, evento);
  }

  removeEvento(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateEvento(id: string, evento: Evento): Observable<Evento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Evento>(url, evento);
  }
}
