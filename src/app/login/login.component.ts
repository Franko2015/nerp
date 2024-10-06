
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Definir los valores para los campos de login
  username: string = 'admin';
  password: string = 'admin';

  // Crear el FormGroup para login
  formGroupLogin: FormGroup = new FormGroup({
    username: new FormControl(this.username, [
      Validators.required
    ]),
    password: new FormControl(this.password, [
      Validators.required
    ])
  });

  // Método que se ejecutará al enviar el formulario de login
  onSubmitLogin() {
    if (this.formGroupLogin.valid) {
      console.log('Login enviado con los siguientes datos:', this.formGroupLogin.value);
      // Aquí puedes hacer lo que necesites, como enviar los datos a un servidor o autenticar el usuario.
    } else {
      console.log('Formulario de login inválido');
    }
  }
  
}


