import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../../services/mascota.service';
import { Mascota } from '../../interfaces/mascota';
import { MatCardLgImage } from '@angular/material/card';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent implements OnInit, OnDestroy {
  id!: number;
  mascota !: Mascota;
  /*PIPE ASYNC  
  mascota$ = observable<Mascota>;
  */
 loading: boolean = false;
 routeSub !: Subscription; 

  constructor(private _mascotaService : MascotaService,
              private aRoute: ActivatedRoute
    ) {/* this.id = +this.aRoute.snapshot.paramMap.get('id')!; */ /* Opcion para obtener el ID por ruta */
   }

  ngOnInit(): void {
   this.routeSub =  this.aRoute.params.subscribe(data=> {
      this.id = data['id'];
      this.obtenerMascota();
    });
    
    /* PIPE ASYNC
    this.obtenerMascota();
    */
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  obtenerMascota(){
    this.loading = true;
    this._mascotaService.getMascota(this.id).subscribe(data => {
      //console.log(data);
    this.mascota = data;
    this.loading = false; 
    });
  }

}
