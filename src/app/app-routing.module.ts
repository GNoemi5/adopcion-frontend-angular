import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaListComponent } from './components/mascota/mascota-list/mascota-list.component';
import { MascotaDetailsComponent } from './components/mascota/mascota-details/mascota-details.component';
import { AddMascotaComponent } from './components/mascota/add-mascota/add-mascota.component';
import { SolicitudComponent } from './components/adopcion/solicitud/solicitud.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegistroComponent } from './components/login/registro/registro.component';
import { AdopcionMascotaListComponent } from './components/adopcion/adopcion-mascota-list/adopcion-mascota-list.component';
import { VigilanteGuard } from './guards/vigilante.guard';

const routes: Routes = [
  { path: '', redirectTo: 'adopcion', pathMatch: 'full' },
  { path: 'adopcion', component: AdopcionMascotaListComponent },
  { path: 'tutorials/:id', component: MascotaDetailsComponent },
  { path: 'add', component: AddMascotaComponent },
  { path: 'solicitarAdopcion', component: SolicitudComponent, canActivate: [VigilanteGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }