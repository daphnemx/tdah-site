import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LandingComponent } from './componentes/landing/landing.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFireStorage } from '@angular/fire/compat/storage';

import { TopNavModule } from './componentes/top-nav/top-nav.module';
import { ArticuloModule } from './componentes/articulo/articulo.module';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { HomeModule } from './componentes/home/home.module';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeLandingComponent } from './componentes/home-landing/home-landing.component';
import { HomeLandingModule } from './componentes/home-landing/home-landing.module';
import { CrearArticuloComponent } from './componentes/crear-articulo/crear-articulo.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeLandingComponent },
  { path: 'home', component: HomeComponent },
  //{ path: 'articulo', component: ArticuloComponent },
  { path: 'articulo/:id', component: ArticuloComponent },
  { path: 'crear-articulo', component: CrearArticuloComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    NavbarComponent,
    LandingComponent,
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
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
