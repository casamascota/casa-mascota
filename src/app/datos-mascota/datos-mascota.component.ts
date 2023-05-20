import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DetalleMascotaComponent } from '../detalle-mascota/detalle-mascota.component';

@Component({
  selector: 'app-datos-mascota',
  templateUrl: './datos-mascota.component.html',
  styleUrls: ['./datos-mascota.component.css']
})
export class DatosMascotaComponent implements OnInit {
  mascotas: any[] = [];
  URL_BASE = 'http://localhost:3000/api';
  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit() {
    this.http.get<any[]>(this.URL_BASE + '/mascotas').subscribe(
      (mascotas) => {
        console.log('get');
        this.mascotas = mascotas;
        console.log(this.mascotas);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  abrirDetalleMascota(mascota: any) {
    const dialogRef = this.dialog.open(DetalleMascotaComponent, {
      width: '600px',
      data: mascota
    });
  }
}
