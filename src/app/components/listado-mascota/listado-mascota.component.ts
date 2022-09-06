import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';



const ListadoMascota: Mascota[] = [
  {nombre: 'Firulais', edad: 2, raza: 'Pastor Aleman', color: 'Cafe', peso: 20},
  {nombre: 'Pelusa', edad: 1, raza: 'Persa', color: 'Blanco', peso: 5},
  {nombre: 'Pompin', edad: 3, raza: 'Pastor', color: 'Cafe', peso: 21},
  {nombre: 'Kira', edad: 2, raza: 'Caniche', color: 'Blanco', peso: 6},
  {nombre: 'Rufus', edad: 2, raza: 'Builldog', color: 'Cafe', peso: 27},
  {nombre: 'Tomy', edad: 1, raza: 'Sin raza', color: 'Blanco', peso: 8},
  {nombre: 'Charly', edad: 3, raza: 'Lobo', color: 'Cafe', peso: 29},
  {nombre: 'Viki', edad: 2, raza: 'Foxterrier', color: 'Blanco', peso: 3},


];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso','acciones'];
  dataSource = new MatTableDataSource<Mascota>(ListadoMascota);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Registros por pagina';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}