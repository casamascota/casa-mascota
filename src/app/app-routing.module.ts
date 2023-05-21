import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarRegistroComponent } from './Componentes/Administrador/agregar-registro/agregar-registro.component';
import { ListasRegistrosComponent } from './Componentes/Administrador/listas-registros/listas-registros.component';
import { AdopcionesComponent } from './Componentes/Usuario/mascotasAdopcion/adopciones.component';
import { RecursosEducativosComponent } from './Componentes/Usuario/recursosEducativos/recursosEducativos.component';

import { MascotaFormularioComponent } from './mascota-formulario/mascota-formulario.component';
import { ActualizarRegistroComponent } from './Componentes/Administrador/actualizar-registro/actualizar-registro.component';

const routes: Routes = [
  { path: 'mascota-formulario' , component: MascotaFormularioComponent },
  { path: "", component: RecursosEducativosComponent},
  { path: "adopciones", component: AdopcionesComponent},
  { path: "registro", component: ListasRegistrosComponent },
  { path: "agregar_registro", component: AgregarRegistroComponent },
  { path: 'actualizar_registro_doc', component: ActualizarRegistroComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
