import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { TopNavModule } from './componentes/top-nav/top-nav.module';
import { HomeModule } from './componentes/home/home.module';
import { HomeLandingModule } from './componentes/home-landing/home-landing.module';
import { ArticuloModule } from './componentes/articulo/articulo.module';
import { AutenticacionModule } from './componentes/autenticacion/autenticacion.module';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeLandingComponent } from './componentes/home-landing/home-landing.component';
import { CrearArticuloComponent } from './componentes/crear-articulo/crear-articulo.component';
import { RegistrarUserComponent } from './componentes/autenticacion/registrar-user/registrar-user.component';
import { LoginComponent } from './componentes/autenticacion/login/login.component';

const appRoutes: Routes = [
  { path: '', component: HomeLandingComponent },
  { path: 'signup', component: RegistrarUserComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'articulo/:id',
    component: ArticuloComponent,
    ...canActivate(() => redirectUnauthorizedTo(['login'])),
  },
  {
    path: 'crear-articulo',
    component: CrearArticuloComponent,
    ...canActivate(() => redirectUnauthorizedTo(['login'])),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    FooterComponent,
    CrearArticuloComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    //AngularFireStorage,
    FormsModule,
    TopNavModule,
    HomeModule,
    HomeLandingModule,
    ArticuloModule,
    AutenticacionModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
