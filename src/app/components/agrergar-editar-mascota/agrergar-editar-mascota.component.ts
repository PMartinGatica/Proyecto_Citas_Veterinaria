import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { MatCardLgImage } from '@angular/material/card';
import { Mascota } from '../../interfaces/mascota';

@Component({
  selector: 'app-agrergar-editar-mascota',
  templateUrl: './agrergar-editar-mascota.component.html',
  styleUrls: ['./agrergar-editar-mascota.component.css']
})
export class AgrergarEditarMascotaComponent implements OnInit {
  loading:boolean = false;
  form:FormGroup

  constructor(private fb:FormBuilder) {  
    this.form = this.fb.group({
      nombre:['',Validators.required],
      edad:['',Validators.required],
      raza:['',Validators.required],
      color:['',Validators.required],
      peso:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarMascota(){
    //const nombre = this.form.value.nombre;

    const mascota : Mascota = { 
      nombre: this.form.value.nombre,
      edad: this.form.value.edad,
      raza: this.form.value.raza,
      color: this.form.value.color,
      peso: this.form.value.peso,

   }
   console.log(mascota);
 }

}
