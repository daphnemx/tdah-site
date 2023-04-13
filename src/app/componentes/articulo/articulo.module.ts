import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloComponent } from './articulo.component';
import { ArticuloContentComponent } from './articulo-content/articulo-content.component';

@NgModule({
  declarations: [ArticuloComponent, ArticuloContentComponent],
  imports: [CommonModule],
  providers: [],
  exports: [ArticuloComponent],
})
export class ArticuloModule {}
