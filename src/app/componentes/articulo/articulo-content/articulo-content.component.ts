import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from '../../../services/articulo.service';
import { Articulo } from '../../../models/articulo';

@Component({
  selector: 'app-articulo-content',
  templateUrl: './articulo-content.component.html',
  styleUrls: ['./articulo-content.component.scss', '../articulo.component.css'],
})
export class ArticuloContentComponent implements OnInit {
  articulo: Articulo;
  imagenPortada: any;

  constructor(
    private route: ActivatedRoute,
    private articuloService: ArticuloService
  ) {}

  async ngOnInit(): Promise<void> {
    this.articulo = await this.articuloService.getArticulo(
      this.route.snapshot.paramMap.get('id')
    );
    if (this.articulo) {
      console.log(this.articulo);
    } else {
      console.error('Articulo not found');
    }

    if (this.articulo) {
      this.imagenPortada = this.articulo.imagenes.find(
        (img) => img.imgPortada
      ).imgUrl;
    }
  }
}
