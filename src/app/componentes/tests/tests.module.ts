import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsComponent } from './tests.component';

@NgModule({
  declarations: [TestsComponent],
  imports: [CommonModule],
  exports: [TestsComponent],
})
export class TestsModule {}
