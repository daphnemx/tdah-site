import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'angular-project';
  showLanding = true;

  onButtonClicked(value: boolean): void {
    this.showLanding = false;
    console.log(this.showLanding)
  }
}
