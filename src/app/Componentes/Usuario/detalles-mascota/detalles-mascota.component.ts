import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalles-mascota',
  templateUrl: './detalles-mascota.component.html',
  styleUrls: ['./detalles-mascota.component.css']
})
export class DetallesMascotaComponent {
  constructor(
    public dialogRef: MatDialogRef<DetallesMascotaComponent>,
    @Inject(MAT_DIALOG_DATA) public mascota: any,
    private httpClient: HttpClient
  ) {
    alert(JSON.stringify(mascota));
    this.getMascotaCirugia(mascota.id_mascota);
   }
  


   getMascotaCirugia(id_mascota : number){
    this.httpClient.get('http://localhost:3000/api/cirugias/mascota/'+id_mascota).subscribe(
      (res: any) => {
      this.mascota.cirugias = res;
      console.log(this.mascota.cirugias);
   },
    err => {
      console.log(err);
      }
    );


   
}
}
