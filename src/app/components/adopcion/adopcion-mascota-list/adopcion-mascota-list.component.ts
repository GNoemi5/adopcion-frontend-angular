import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota.model';
import { Router } from '@angular/router';
import { AdopcionService } from 'src/app/services/adopcion.service';

@Component({
  selector: 'app-adopcion-mascota-list',
  templateUrl: './adopcion-mascota-list.component.html',
  styleUrls: ['./adopcion-mascota-list.component.css']
})
export class AdopcionMascotaListComponent {
  mascotas?: Mascota[];
  currentMascota: Mascota = {};
  currentIndex = -1;
  title = '';

  constructor(private adopcionService: AdopcionService, private router:Router) { }

  ngOnInit(): void {
    this.retrieveMascotas();
  }

  retrieveMascotas(): void {
    this.adopcionService.getMascotasDisponibles()
      .subscribe({
        next: (data) => {
          this.mascotas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveMascotas();
    this.currentMascota = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(mascota: Mascota, index: number): void {
    this.currentMascota = mascota;
    this.currentIndex = index;
  }

  solicitar(mascota:Mascota):void{
    let id=localStorage.setItem("idMascota",mascota.id);
    this.router.navigate(["solicitarAdopcion"])
  }
}
 