import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css'],
})
export class BillboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  scrolltoDestacados(id) {
    let el = document.getElementById(id);
    el.scrollIntoView();
  }
}
