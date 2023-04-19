import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-supporting-section',
  templateUrl: './supporting-section.component.html',
  styleUrls: ['./supporting-section.component.css'],
})
export class SupportingSectionComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() backgroundImageUrl: string;

  constructor() {}

  ngOnInit(): void {}
}
