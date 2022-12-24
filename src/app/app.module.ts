import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMascotaComponent } from './components/mascota/add-mascota/add-mascota.component';
import { MascotaDetailsComponent } from './components/mascota/mascota-details/mascota-details.component';
import { MascotaListComponent } from './components/mascota/mascota-list/mascota-list.component';
import { SolicitudComponent } from './components/adopcion/solicitud/solicitud.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegistroComponent } from './components/login/registro/registro.component';
import { authInterceptorProviders } from './services/auth.interceptor.service';
import { AdopcionMascotaListComponent } from './components/adopcion/adopcion-mascota-list/adopcion-mascota-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMascotaComponent,
    MascotaDetailsComponent,
    MascotaListComponent,
    SolicitudComponent,
    LoginComponent,
    RegistroComponent,
    AdopcionMascotaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
