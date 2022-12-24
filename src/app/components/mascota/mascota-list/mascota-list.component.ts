import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota.model';
import { MascotaService } from 'src/app/services/mascota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adopcion-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit {

  mascotas?: Mascota[];
  currentMascota: Mascota = {};
  currentIndex = -1;
  title = '';

  constructor(private mascotaService: MascotaService, private router:Router) { }

  ngOnInit(): void {
    this.retrieveMascotas();
  }

  retrieveMascotas(): void {
    this.mascotaService.getAll()
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

  removeAllTutorials(): void {
    this.mascotaService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  editar(mascota:Mascota):void{
    let id=localStorage.setItem("idMascota",mascota.id);
    this.router.navigate(["solicitarAdopcion"])
  }

}