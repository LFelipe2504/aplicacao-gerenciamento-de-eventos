import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Funcionario } from 'src/app/interfaces/Funcionario';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = "http://localhost:5000/funcionarios"

  constructor( private http: HttpClient) { }

  getApiUrl(){
    return this.apiUrl;
  }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  getFuncionario(id: string): Observable<Funcionario>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Funcionario>(url);
  }

  createFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.apiUrl, funcionario);
  }

  removeFuncionario(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateFuncionario(id: string, funcionario: Funcionario): Observable<Funcionario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Funcionario>(url, funcionario);
  }

}
