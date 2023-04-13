import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articulo-recomendado',
  templateUrl: './articulo-recomendado.component.html',
  styleUrls: ['./articulo-recomendado.component.css']
})
export class ArticuloRecomendadoComponent {
  @Input() imageMiniatura: string;
  @Input() imageAlt: string;
  @Input() title: string;
  @Input() paragraph: string;
  @Input() linkUrl: string;
  @Input() articleId: number;
}
