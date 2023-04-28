import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css'],
})
export class RegistrarUserComponent implements OnInit {
  email: string;
  password: string;
  errorMessage: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  register() {
    this.userService
      .registrarUser({ email: this.email, password: this.password })
      .then((response) => {
        console.log('Usuario creado con éxito!', response);
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.error(error);
      });
  }
}
