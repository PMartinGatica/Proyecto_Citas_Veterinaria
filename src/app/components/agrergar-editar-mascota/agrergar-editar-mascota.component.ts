import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { MatCardLgImage } from '@angular/material/card';
import { MascotaService } from 'src/app/services/mascota.service';
import { Mascota } from '../../interfaces/mascota';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agrergar-editar-mascota',
  templateUrl: './agrergar-editar-mascota.component.html',
  styleUrls: ['./agrergar-editar-mascota.component.css']
})
export class AgrergarEditarMascotaComponent implements OnInit {
 
  loading:boolean = false;
  form:FormGroup;
  id: number;
  Operacion : string = 'Agregar';
  

  constructor(private fb:FormBuilder,
              private _mascotaService : MascotaService,
              private _snackBar: MatSnackBar, 
              private router:Router,
              private activatedRoute:ActivatedRoute
              
               ) { 
    this.form = this.fb.group({
      nombre:['',Validators.required],
      edad:['',Validators.required],
      raza:['',Validators.required],
      color:['',Validators.required],
      peso:['',Validators.required],
    })

    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    if (this.id != 0 ){
      this.Operacion = 'Editar';
      this.obtenerMascota(this.id);
    }
  }

  obtenerMascota(id : number){
    this.loading = true;
    this._mascotaService.getMascota(this.id).subscribe(data =>{
      console.log(data);
      this.form.setValue({
        nombre: data.nombre,
        edad: data.edad,
        raza: data.raza,
        color: data.color,
        peso: data.peso,
      })

      this.loading = false;
    })}

    agregarEditarMascota(){
    

    const mascota : Mascota = { 
      nombre: this.form.value.nombre,
      edad: this.form.value.edad,
      raza: this.form.value.raza,
      color: this.form.value.color,
      peso: this.form.value.peso,
   }
      if (this.id != 0){
        mascota.id = this.id;
        this.editarMascota(this.id, mascota);
      }else{
        this.agregarMascota(mascota);
      }
    
    
  }

  editarMascota(id: number, mascota: Mascota) {
    this.loading = true;
    this._mascotaService.updateMascota(id, mascota).subscribe(() => {
      this.mensajeExito('actualizada');
      this.loading = false;
      this.router.navigate(['/listMascotas']);
    })
  }

  agregarMascota(mascota: Mascota) {
    this._mascotaService.AddMascota(mascota).subscribe(data => {
      this.mensajeExito('registrada');
      this.router.navigate(['/listMascotas']);
    })
}

mensajeExito(texto: string) {
  this._snackBar.open(`La Mascota fue ${texto} con exito`,'', {
    duration: 4000,
    horizontalPosition: 'right',
  });
}

}
