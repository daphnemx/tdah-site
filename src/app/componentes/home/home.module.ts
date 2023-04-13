import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RecomendadosComponent } from './recomendados/recomendados.component';
import { ArticuloRecomendadoComponent } from './recomendados/articulo-recomendado/articulo-recomendado.component';
import { BillboardComponent } from './billboard/billboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    RecomendadosComponent,
    ArticuloRecomendadoComponent,
    BillboardComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
