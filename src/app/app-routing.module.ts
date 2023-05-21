import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { TestComponentComponent } from './test-component/test-component.component';
import { MascotaFormularioComponent } from './mascota-formulario/mascota-formulario.component';

const routes: Routes = [
  { path: 'registro-mascota', component: TestComponentComponent},
  { path: '22' , component: MascotaFormularioComponent }

=======
import { AgregarRegistroComponent } from './Componentes/Administrador/agregar-registro/agregar-registro.component';
import { ListasRegistrosComponent } from './Componentes/Administrador/listas-registros/listas-registros.component';
import { AdopcionesComponent } from './Componentes/Usuario/mascotasAdopcion/adopciones.component';
import { RecursosEducativosComponent } from './Componentes/Usuario/recursosEducativos/recursosEducativos.component';


const routes: Routes = [
  { path: "", component: RecursosEducativosComponent},
  { path: "adopciones", component: AdopcionesComponent},
  { path: "registro", component: ListasRegistrosComponent },
  { path: "agregar_registro", component: AgregarRegistroComponent },
>>>>>>> Front-Cristopher
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
