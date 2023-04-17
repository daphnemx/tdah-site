import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLandingComponent } from './home-landing.component';
import { SupportingSectionComponent } from './supporting-section/supporting-section.component';
import { TopNavModule } from '../top-nav/top-nav.module';
import { DestacadosComponent } from './destacados/destacados.component';

@NgModule({
  declarations: [
    HomeLandingComponent,
    SupportingSectionComponent,
    DestacadosComponent,
  ],
  imports: [CommonModule, TopNavModule],
  exports: [HomeLandingComponent],
})
export class HomeLandingModule {}
