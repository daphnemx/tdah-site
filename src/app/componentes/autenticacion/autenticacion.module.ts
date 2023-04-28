import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrarUserComponent } from './registrar-user/registrar-user.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegistrarUserComponent, LoginComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [RegistrarUserComponent, LoginComponent],
})
export class AutenticacionModule {}
