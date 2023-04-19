import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.css'],
})
export class HomeLandingComponent implements OnInit {
  articulos: Articulo[] = [];

  constructor(private articuloService: ArticuloService) {}

  ngOnInit(): void {
    this.getArticulos();
  }

  async getArticulos(): Promise<void> {
    this.articulos = await this.articuloService.getArticulos();
    console.log(this.articulos);
  }
}
