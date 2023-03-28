import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    this.buttonClicked.emit(true);
  }

}
