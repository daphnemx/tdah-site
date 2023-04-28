import { NgModule } from '@angular/core';
import { TopNavComponent } from './top-nav.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TopNavComponent],
  exports: [TopNavComponent],
  imports: [CommonModule],
})
export class TopNavModule {}
