import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MascotaFormularioComponent } from './mascota-formulario/mascota-formulario.component';
import { TratamientoComponent } from './tratamiento/tratamiento.component';
import { CirugiaComponent } from './cirugia/cirugia.component';

const routes: Routes = [
  { path: 'mascota-formulario', component: MascotaFormularioComponent },
  { path: 'tratamiento', component: TratamientoComponent },
  { path: 'cirugia', component: CirugiaComponent},
  { path: '', redirectTo: '/mascota-formulario', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/mascota-formulario' } // Ruta para cualquier otro caso
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
