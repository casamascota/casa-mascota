import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.component.html',
  styleUrls: ['./detalle-mascota.component.css']
})
export class DetalleMascotaComponent {
  constructor(
    public dialogRef: MatDialogRef<DetalleMascotaComponent>,
    @Inject(MAT_DIALOG_DATA) public mascota: any
  ) { }
}
