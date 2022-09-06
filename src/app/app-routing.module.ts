import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTES
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { AgrergarEditarMascotaComponent } from './components/agrergar-editar-mascota/agrergar-editar-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';


const routes: Routes = [
  
  {path: '' , redirectTo: 'listado-mascota', pathMatch: 'full'},
  {path: 'listado-mascota', component: ListadoMascotaComponent},
  {path: 'agregar-mascota', component: AgrergarEditarMascotaComponent},
  {path: 'ver-mascota/:id' , component: VerMascotaComponent},
  {path: 'editar-mascota/:id' , component: AgrergarEditarMascotaComponent},
  {path: '**' , redirectTo: 'listado-mascota', pathMatch: 'full'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
