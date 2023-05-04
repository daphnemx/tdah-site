import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css'],
})
export class BillboardComponent implements OnInit {
  title = 'appBootstrap';
  closeResult: string;

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {}

  scrolltoDestacados(id) {
    let el = document.getElementById(id);
    el.scrollIntoView();
  }

  open(content: any) {
    this.modalService.open(content);
  }

  navigateToTest(id: string) {
    this.modalService.dismissAll(); // Close the modal
    this.router.navigate(['/tests', id]);
  }
}
