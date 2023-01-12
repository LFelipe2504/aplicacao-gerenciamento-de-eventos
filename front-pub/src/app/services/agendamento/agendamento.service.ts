import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Agendamento } from 'src/app/interfaces/Agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private apiUrl = "http://localhost:5000/agendamentos"

  constructor( private http: HttpClient) { }

  getApiUrl(){
    return this.apiUrl;
  }

  getAgendamentos(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.apiUrl);
  }

  getAgendamento(id: string): Observable<Agendamento>{
    const url = `${this.apiUrl}/usuario/${id}`;
    return this.http.get<Agendamento>(url);
  }

  createAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.apiUrl, agendamento);
  }

  removeAgendamento(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateAgendamento(id: string, agendamento: Agendamento): Observable<Agendamento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Agendamento>(url, agendamento);
  }
}
