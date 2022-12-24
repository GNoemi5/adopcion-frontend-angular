import { Component, Input, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/services/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/models/mascota.model';

@Component({
  selector: 'app-mascota-details',
  templateUrl: './mascota-details.component.html',
  styleUrls: ['./mascota-details.component.css']
})
export class MascotaDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentMascota: Mascota = {
    nombre: '',
    raza: '',
    fechaNacimiento: '',
    tipoMascota: {},
    salud: '',
    estado: false,
    foto: '',
    descripcion: ''
  };
  
  message = '';

  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  }

  getTutorial(id: string): void {
    this.mascotaService.get(id)
      .subscribe({
        next: (data) => {
          this.currentMascota = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateAdoption(status: boolean): void {
    const data = {
      nombre: this.currentMascota.nombre,
      raza: this.currentMascota.raza,
      fechaNacimiento: this.currentMascota.fechaNacimiento,
      tipoMascota: this.currentMascota.tipoMascota,
      salud: this.currentMascota.salud,
      estado: this.currentMascota.estado,
      foto: this.currentMascota.foto,
      descripcion: this.currentMascota.descripcion,
    };

    this.message = '';

    this.mascotaService.update(this.currentMascota.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentMascota.estado = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorial(): void {
    this.message = '';

    this.mascotaService.update(this.currentMascota.id, this.currentMascota)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.mascotaService.delete(this.currentMascota.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
  }

}