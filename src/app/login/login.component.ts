import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Auth/auth.service';

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
    this.authService.login(user).subscribe(
      success => {
        if(success){
          
          this.router.navigate(['/home']);

        }else{

          alert("Login failed")
        }
      }
    );
  }
}
