import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class RegisterPage {

nombre = '';
email = '';
password = '';

constructor(private router: Router){}

registrar(){

  localStorage.setItem(
    'usuario',
    JSON.stringify({
      nombre: this.nombre,
      email: this.email,
      password: this.password
    })
  );

  alert('Usuario registrado');

  this.router.navigate(['/login']);

}
}
