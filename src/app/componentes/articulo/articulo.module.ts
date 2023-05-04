import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloComponent } from './articulo.component';
import { ArticuloContentComponent } from './articulo-content/articulo-content.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [ArticuloComponent, ArticuloContentComponent, SafeHtmlPipe],
  imports: [CommonModule],
  providers: [],
  exports: [ArticuloComponent],
})
export class ArticuloModule {}
