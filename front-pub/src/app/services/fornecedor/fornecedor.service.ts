import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Fornecedor } from 'src/app/interfaces/Fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private apiUrl = "http://localhost:5000/fornecedores"

  constructor( private http: HttpClient) { }

  getApiUrl(){
    return this.apiUrl;
  }

  getFornecedores(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.apiUrl);
  }

  getFornecedor(id: string): Observable<Fornecedor>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Fornecedor>(url);
  }

  createFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.apiUrl, fornecedor);
  }

  removeFornecedor(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateFornecedor(id: string, fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Fornecedor>(url, fornecedor);
  }

}
