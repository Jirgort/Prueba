import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl ="http://181.193.1.114:89/api/api/autenticacion/login"

  constructor(private http: HttpClient) { }

  login(user:any): Observable<boolean> {
    return this.http.post<any>(this.apiUrl, user)
    .pipe(
      map(response => {
        if (response) {
          localStorage.setItem('jwt', response);
          return true;
        } else {
          return false;
        }
      }),
      catchError(() => of(false))
    );
     
  }

  logout() {
    localStorage.removeItem('jwt');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt');
  }


}
