import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css'],
})
export class RegistrarUserComponent implements OnInit {
  email: string;
  password: string;
  errorMessage: string;
  logged = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.userService
      .registrarUser({ email: this.email, password: this.password })
      .then((response) => {
        console.log('Usuario creado con éxito!', response);
        this.errorMessage = null; // clear error message
        this.logged = true;
        //this.displayWelcomeMessage(); // call the method to display welcome message
        setTimeout(() => {
          //alert('Welcome!'); // display the welcome message
          this.router.navigate(['/']); // navigate to home route
        }, 3000);
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.error(error);
      });
  }

  registerGoogle() {
    this.userService
      .loginconGoogle()
      .then((response) => {
        console.log('User registered successfully!', response);
        this.errorMessage = null; // clear error message
        this.logged = true;
        //this.displayWelcomeMessage(); // call the method to display welcome message
        setTimeout(() => {
          //alert('Welcome!'); // display the welcome message
          this.router.navigate(['/']); // navigate to home route
        }, 3000);
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.error(error);
      });
  }

  /*displayWelcomeMessage() {
    // set a timeout to delay navigation to home route
    setTimeout(() => {
      //alert('Welcome!'); // display the welcome message
      this.router.navigate(['/']); // navigate to home route
    }, 3000); // change 3000 to the number of milliseconds you want to display the message for
  }*/
}
