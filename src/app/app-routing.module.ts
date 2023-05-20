import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { MascotaFormularioComponent } from './mascota-formulario/mascota-formulario.component';

const routes: Routes = [
  { path: 'registro-mascota', component: TestComponentComponent},
  { path: '22' , component: MascotaFormularioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
