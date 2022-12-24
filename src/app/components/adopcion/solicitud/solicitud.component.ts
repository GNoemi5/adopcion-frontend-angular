import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota.model';
import { MascotaService } from 'src/app/services/mascota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit{

  mascota: Mascota = {};

  constructor(private mascotaService: MascotaService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerMascota();
  }

  obtenerMascota(){
    let idMascota = localStorage.getItem("idMascota");
    this.mascotaService.get(idMascota)
    .subscribe(data=>{
      this.mascota=data;
      
    })
    console.log(this.mascota);
  }

  

}
