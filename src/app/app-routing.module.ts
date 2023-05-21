import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarRegistroComponent } from './Componentes/Administrador/agregar-registro/agregar-registro.component';
import { ListasRegistrosComponent } from './Componentes/Administrador/listas-registros/listas-registros.component';
import { AdopcionesComponent } from './Componentes/Usuario/mascotasAdopcion/adopciones.component';
import { RecursosEducativosComponent } from './Componentes/Usuario/recursosEducativos/recursosEducativos.component';

import { MascotaFormularioComponent } from './Componentes/Usuario/mascota-formulario/mascota-formulario.component';
import { ReservaCitaComponent } from './Componentes/Usuario/reserva-cita/reserva-cita.component';
import { ListaCitasComponent } from './Componentes/Usuario/lista-citas/lista-citas.component';
import { ListaMascotasComponent } from './Componentes/Usuario/lista-mascotas/lista-mascotas.component';

const routes: Routes = [
  { path: 'mascota-formulario' , component: MascotaFormularioComponent },
  { path: "", component: RecursosEducativosComponent},
  { path: "adopciones", component: AdopcionesComponent},
  { path: "registro", component: ListasRegistrosComponent },
  { path: "agregar_registro", component: AgregarRegistroComponent },
  { path: "citas", component: ReservaCitaComponent },
  { path: "citas-agendadas", component: ListaCitasComponent },
  { path: "lista-mascotas", component: ListaMascotasComponent },


  
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
