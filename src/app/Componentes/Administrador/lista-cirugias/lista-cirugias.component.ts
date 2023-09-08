import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { Cirugia_Admin } from '../../interfaces/cirugia-adm';
import { MatTableDataSource } from '@angular/material/table';
import { CirugiasService } from '../../services/cirugia.service';
import { HttpClient } from '@angular/common/http';
import { ModalUpdateCirugiaService } from '../modals/modal-update-cirugia/modal-update-cirugia.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-lista-cirugias',
  templateUrl: './lista-cirugias.component.html',
  styleUrls: ['./lista-cirugias.component.css']
})
export class ListaCirugiasComponent implements OnInit {
  formularioAdmCir: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';
  cirugiasList: Cirugia_Admin[] = [];

  displayedColumns: string[] = ['id_cirugia','fecha','cirugiahecha', 'Doctor_id_doctor', 'Enfermero_id_enfermero', 'Diagnostico_id_diagnostico','acciones'];
  dataSource!: MatTableDataSource<Cirugia_Admin>;
  pageSize = 10; // Define el número de elementos por página
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private formBuilder: FormBuilder, private _cirugiasServices: CirugiasService, private http: HttpClient, private modalUpdateCirugiaService: ModalUpdateCirugiaService) {
    this.formularioAdmCir = this.formBuilder.group({
      id_cirugia: [1, Validators.required],
      fecha: [null, Validators.required],
      cirugiahecha: [null, Validators.required],
      Doctor_id_doctor: [null, Validators.required],
      Enfermero_id_enfermero: [null, Validators.required],
      Diagnostico_id_diagnostico: [null, Validators.required],
    });
    this.cargarCirugias();
  }

  ngOnInit(){
  }

  async cargarCirugias() {
    try {
      this.cirugiasList = await this._cirugiasServices.getCirugias();
      console.log("Lista: ", this.cirugiasList);
      this.dataSource = new MatTableDataSource<Cirugia_Admin>(this.cirugiasList);
  
      this.dataSource.paginator = this.paginator;
    } catch (error) {
      console.log(error);
    }
  }  

  applyPaginator(event: any) {
    this.pageSize = event.pageSize;
    // Asigna el paginador obtenido a la propiedad paginator del MatTabledataSource
    this.dataSource.paginator = this.paginator;
  }  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  enviarFormularioAdmCir() {
    if (this.formularioAdmCir.valid) {
      const url = this.URL_BASE + 'cirugia';
      const formData = this.formularioAdmCir.value;

      this.http.post(url, formData).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );

      console.log(this.formularioAdmCir.value);
    }
  }

  modificarCir(id: number) {
    const dialogRef = this.modalUpdateCirugiaService.openModal(id);

    dialogRef.afterClosed().subscribe(() => {
      this.cargarCirugias();
    });
  }

  eliminarCir(id: number) {
    console.log(id);
    const url = this.URL_BASE + 'cirugia/';
    this.http.delete(url + id).subscribe(
      res => {
        alert('Cirugia eliminada');
        console.log(res);
        this.cargarCirugias();
      },
      err => {
        console.log(err);
      }
    );
  }
}