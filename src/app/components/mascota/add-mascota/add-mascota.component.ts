import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota.model';
import { TipoMascota } from 'src/app/models/tipo-mascota.model';
import { MascotaService } from 'src/app/services/mascota.service';
import { TipoMascotaService } from 'src/app/services/tipo-mascota.service';

@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css'],
})
export class AddMascotaComponent implements OnInit{

  imageUrl:any;
  fileToUpload:any;

  mascota: Mascota = {
    nombre: '',
    raza: '',
    fechaNacimiento: '',
    tipoMascota: {},
    salud: '',
    estado: false,
    foto: '',
    descripcion: '',
  };
  submitted = false;

  tipoMascotas?: TipoMascota[];


  constructor(private mascotaService: MascotaService, private tipoMascotaService: TipoMascotaService) {}

  ngOnInit(): void {
    this.retrieveTipoMascotas();
  }

  retrieveTipoMascotas(): void {
    this.tipoMascotaService.getAll()
      .subscribe({
        next: (data) => {
          this.tipoMascotas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  saveTutorial(): void {
    const data = {
      nombre: this.mascota.nombre,
      raza: this.mascota.raza,
      fechaNacimiento: this.mascota.fechaNacimiento,
      tipoMascota: this.mascota.tipoMascota,
      salud: this.mascota.salud,
      estado: this.mascota.estado,
      foto: this.mascota.foto,
      descripcion: this.mascota.descripcion,
    };

    this.mascotaService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.mascota = {
      nombre: '',
      raza: '',
      fechaNacimiento: '',
      tipoMascota: {},
      salud: '',
      estado: false,
      foto: '',
      descripcion: '',
    };
  }

  handleFileInput(file: File[]){
    this.fileToUpload = file[0];
    let reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
}
