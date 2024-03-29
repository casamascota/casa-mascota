import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AgregarRegistroComponent } from './Componentes/Administrador/agregar-registro/agregar-registro.component';
import { ListasRegistrosComponent } from './Componentes/Administrador/listas-registros/listas-registros.component';
import { AdopcionesComponent } from './Componentes/Usuario/mascotasAdopcion/adopciones.component';
import { RecursosEducativosComponent } from './Componentes/Usuario/recursosEducativos/recursosEducativos.component';

import { MascotaFormularioComponent } from './Componentes/Administrador/mascota-formulario/mascota-formulario.component';
import { ReservaCitaComponent } from './Componentes/Usuario/reserva-cita/reserva-cita.component';
import { ListaCitasComponent } from './Componentes/Administrador/lista-citas/lista-citas.component';
import { ListaMascotasComponent } from './Componentes/Administrador/lista-mascotas/lista-mascotas.component';
import { FormRevisionComponent } from './Componentes/Administrador/form-revision/form-revision.component';
import { FormEstilistaComponent } from './Componentes/Administrador/form-estilista/form-estilista.component';
//routing de formulario tratamientos y cirugias
import { TratamientoFormularioComponent } from './Componentes/Administrador/tratamiento-formulario/tratamiento-formulario.component';
import { CirugiaFormularioComponent } from './Componentes/Administrador/cirugia-formulario/cirugia-formulario.component';
//routing de listas tratamientos y cirugias
import { ListaCirugiasComponent } from './Componentes/Administrador/lista-cirugias/lista-cirugias.component';
import { ListaTratamientosComponent } from './Componentes/Administrador/lista-tratamientos/lista-tratamientos.component';
import { InicioComponent } from './Componentes/Usuario/inicio/inicio.component';
import { NosotrosComponent } from './Componentes/Usuario/nosotros/nosotros.component';
import { NavBarComponent } from './Componentes/Usuario/NavBar/NavBar.component';
import { FooterComponent } from './Componentes/Usuario/Footer/Footer.component';

/*
// Componentes EF
import { PresentacionComponent } from './FinalTecWeb/Presentacion/Presentacion.component';
import { ListasRegistrosComponent } from './Componentes/Administrador/listas-registros/listas-registros.component';*/
const routes: Routes = [
  
  { path: "", component: RecursosEducativosComponent},
  { path: 'mascota-formulario' , component: MascotaFormularioComponent },
  { path: "adopciones", component: AdopcionesComponent},
  { path: "registro", component: ListasRegistrosComponent },
  { path: "agregar_registro", component: AgregarRegistroComponent },
  { path: "citas", component: ReservaCitaComponent },
  { path: "citas-agendadas", component: ListaCitasComponent },
  { path: "lista-mascotas", component: ListaMascotasComponent },
  { path: "revision" , component: FormRevisionComponent},
  { path: "estilista" , component: FormEstilistaComponent},
  { path: "tratamiento-formulario" , component: TratamientoFormularioComponent},
  { path: "cirugia-formulario" , component: CirugiaFormularioComponent},
  { path: "lista-cirugia" , component: ListaCirugiasComponent},
  { path: "lista-tratamientos" , component: ListaTratamientosComponent},
  { path: "inicio" , component: InicioComponent},
  { path: "nosotros" , component: NosotrosComponent},
  { path: "app-navbar" , component:  NavBarComponent},
  { path: "app-footer" , component: FooterComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
