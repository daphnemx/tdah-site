import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  errorMessage: string;
  returnUrl: string;

  loggedIn = false;
  userEmail: string | undefined;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    console.log(this.returnUrl);
  }

  async login() {
    try {
      const response = await this.userService.login({
        email: this.email,
        password: this.password,
      });
      console.log(response); // Log the response object to the console
      // Login successful
      //this.router.navigate(['/']); // Redirect to the home page
      this.router.navigateByUrl(this.returnUrl);
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
        //this.router.navigate(['/']); // navigate to home route
        this.router.navigateByUrl(this.returnUrl);
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.error(error);
      });
  }
}
