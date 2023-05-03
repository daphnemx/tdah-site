import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  errorMessage: string;

  loggedIn = false;
  userEmail: string | undefined;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    /* this.userService.auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        this.loggedIn = true;
        this.userEmail = user.email;
        console.log(this.userEmail);
      } else {
        this.loggedIn = false;
        this.userEmail = undefined;
      }
    });*/
  }

  async login() {
    try {
      const response = await this.userService.login({
        email: this.email,
        password: this.password,
      });
      console.log(response); // Log the response object to the console
      // Login successful
      this.router.navigate(['/']); // Redirect to the home page
    } catch (error) {
      this.errorMessage = error;
      console.log(this.errorMessage);
      // Login failed, handle the error
    }
  }
  loginGoogle() {
    this.userService
      .loginconGoogle()
      .then((response) => {
        //console.log('User registered successfully!', response);
        this.errorMessage = null; // clear error message
        this.router.navigate(['/']); // navigate to home route
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.error(error);
      });
  }
}
