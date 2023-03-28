import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
  @Input() imageUrl: string;
  @Input() imageAlt: string;
  @Input() title: string;
  @Input() paragraph: string;
  @Input() linkUrl: string;
  @Input() linkText: string;
}
