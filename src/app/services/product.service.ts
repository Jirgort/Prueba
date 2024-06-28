import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://181.193.1.114:89/api/api';

  constructor(private http: HttpClient) { }

  //obtener los productos
  getProducts(): Observable<any[]> {
    const url = `${this.apiUrl}/producto/lista/true`;
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      })
    });
  }

  getProduct(id: number): Observable<any> {
    const url = `${this.apiUrl}/producto/detalle/${id}`;
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      })
    });
  }

  addProduct(product: any): Observable<any> {
    const url = `${this.apiUrl}/producto/mantenimiento`;
    return this.http.post<any>(url, product, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      })
    });
  }

  updateProduct(id: number, product: any): Observable<any> {
    const url = `${this.apiUrl}/producto/mantenimiento`;
    return this.http.post<any>(url, product, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      })
    });
  }
}
