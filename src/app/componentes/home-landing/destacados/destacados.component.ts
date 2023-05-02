import { Component, OnInit, ElementRef } from '@angular/core';
import { ArticuloService } from '../../../services/articulo.service';
import { Articulo } from '../../../models/articulo';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css'],
})
export class DestacadosComponent implements OnInit {
  articulos: Articulo[] = [];

  constructor(
    private articuloService: ArticuloService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.getArticulos();
  }

  async getArticulos(): Promise<void> {
    this.articulos = await this.articuloService.getArticulos();
  }

  scrollToDestacados(): void {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
