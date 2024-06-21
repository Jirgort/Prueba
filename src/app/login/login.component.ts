import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  clave: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    const user = {correo: this.correo, clave: this.clave}
    console.log(user)
    this.authService.login(user).subscribe(
      (data) =>{
       
      }
    );
  }
}
