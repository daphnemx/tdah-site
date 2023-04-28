import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-supporting-section',
  templateUrl: './supporting-section.component.html',
  styleUrls: ['./supporting-section.component.css'],
})
export class SupportingSectionComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() backgroundImageUrl: string;
  @Input() articuloID: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToArticle(article) {
    //console.log('Selected article:', article);
    this.router.navigate(['/articulo', this.articuloID]);
  }
}
