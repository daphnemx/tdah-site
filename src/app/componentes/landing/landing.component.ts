import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('fadeOut', [
      transition('* => false', [
        style({ opacity: 1 }),
        animate('0.3s', style({ opacity: 0.1 }))
      ])
    ])
  ]
})

export class LandingComponent {
  public showLanding = true;

  constructor(private router: Router) {}

  public onButtonClick() {
    this.showLanding = false;
    const delay = 300; // milliseconds
    const promise = new Promise(resolve => setTimeout(resolve, delay));
    promise.then(() => {
      this.router.navigate(['/home']);
    });
  }
  

}
