import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../../services/articulo.service';
import { Articulo } from '../../../models/articulo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css'],
})
export class DestacadosComponent implements OnInit {
  articulos: Articulo[] = [];

  constructor(
    private articuloService: ArticuloService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getArticulos();
  }

  async getArticulos(): Promise<void> {
    this.articulos = await this.articuloService.getArticulos();
  }

  navigateToArticle(article) {
    //console.log('Selected article:', article);
    this.router.navigate(['/articulo', article]);
  }
}
