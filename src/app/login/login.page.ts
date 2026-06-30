import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule,RouterLink]
})
export class LoginPage {

  email = '';
  password = '';

  constructor(private router: Router) { }

  login() {

    const usuario = JSON.parse(
      localStorage.getItem('usuario') || '{}'
    );

    alert(
    'Guardado:\n' +
    usuario.email + '\n' +
    usuario.password
  );

  alert(
    'Ingresado:\n' +
    this.email + '\n' +
    this.password
  );

    if (
      this.email === usuario.email?.trim() &&
      this.password === usuario.password?.trim()
    ) {

      alert('Bienvenido');
      this.router.navigate(['/home']); 

    } else {

      alert('Credenciales incorrectas');

    }

  }

}