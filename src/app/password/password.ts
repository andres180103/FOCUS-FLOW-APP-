import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

@Component({
    
  selector: 'app-password',
  templateUrl: './password.html',
  styleUrls: ['./password.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class PasswordPage {

  email='';

  recuperar() {

    const usuario = JSON.parse(
      localStorage.getItem('usuario') || '{}'
    );

    if (this.email === usuario.email) {

      alert('Tu contraseña es: ' + usuario.password);

    } else {

      alert('Correo no encontrado');

    }

  }

}
