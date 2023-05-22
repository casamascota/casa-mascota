import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarRegistroComponent } from './Componentes/Administrador/agregar-registro/agregar-registro.component';
import { ListasRegistrosComponent } from './Componentes/Administrador/listas-registros/listas-registros.component';
import { AdopcionesComponent } from './Componentes/Usuario/mascotasAdopcion/adopciones.component';
import { RecursosEducativosComponent } from './Componentes/Usuario/recursosEducativos/recursosEducativos.component';

import { ActualizarRegistroComponent } from './Componentes/Administrador/actualizar-registro/actualizar-registro.component';

import { MascotaFormularioComponent } from './Componentes/Usuario/mascota-formulario/mascota-formulario.component';
import { ReservaCitaComponent } from './Componentes/Usuario/reserva-cita/reserva-cita.component';
import { ListaCitasComponent } from './Componentes/Usuario/lista-citas/lista-citas.component';
import { ListaMascotasComponent } from './Componentes/Usuario/lista-mascotas/lista-mascotas.component';
import { FormRevisionComponent } from './Componentes/Administrador/form-revision/form-revision.component';
import { FormEstilistaComponent } from './Componentes/Administrador/form-estilista/form-estilista.component';
//routing de formulario tratamientos y cirugias
import { TratamientoFormularioComponent } from './Componentes/Usuario/tratamiento-formulario/tratamiento-formulario.component';
import { CirugiaFormularioComponent } from './Componentes/Usuario/cirugia-formulario/cirugia-formulario.component';
//routing de listas tratamientos y cirugias
import { ListaCirugiasComponent } from './Componentes/Usuario/lista-cirugias/lista-cirugias.component';
import { ListaTratamientosComponent } from './Componentes/Usuario/lista-tratamientos/lista-tratamientos.component';

const routes: Routes = [
  { path: 'mascota-formulario' , component: MascotaFormularioComponent },
  //{ path: "", component: RecursosEducativosComponent},
  { path: "adopciones", component: AdopcionesComponent},
  { path: "recursoseducativos", component: RecursosEducativosComponent},
  { path: "registro", component: ListasRegistrosComponent },
  { path: "agregar_registro", component: AgregarRegistroComponent },
  { path: 'actualizar_registro_doc', component: ActualizarRegistroComponent },
  { path: "citas", component: ReservaCitaComponent },
  { path: "citas-agendadas", component: ListaCitasComponent },
  { path: "lista-mascotas", component: ListaMascotasComponent },
  { path: "revision" , component: FormRevisionComponent},
  { path: "estilista" , component: FormEstilistaComponent},
  { path: "tratamiento-formulario" , component: TratamientoFormularioComponent},
  { path: "cirugia-formulario" , component: CirugiaFormularioComponent},
  { path: "lista-cirugia" , component: ListaCirugiasComponent},
  { path: "lista-tratamientos" , component: ListaTratamientosComponent},



  
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
