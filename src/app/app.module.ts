import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//----Componentes
import { MascotaFormularioComponent } from './Componentes/Usuario/mascota-formulario/mascota-formulario.component';
import { AgregarRegistroComponent } from './Componentes/Administrador/agregar-registro/agregar-registro.component';
import { ListasRegistrosComponent } from './Componentes/Administrador/listas-registros/listas-registros.component';
import { RecursosEducativosComponent } from './Componentes/Usuario/recursosEducativos/recursosEducativos.component';
import { ActualizarRegistroComponent } from './Componentes/Administrador/actualizar-registro/actualizar-registro.component';

//----Modulos
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

//----Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReservaCitaComponent } from './Componentes/Usuario/reserva-cita/reserva-cita.component';
import { ListaCitasComponent } from './Componentes/Usuario/lista-citas/lista-citas.component';
import { ListaMascotasComponent } from './Componentes/Usuario/lista-mascotas/lista-mascotas.component';
import { DetallesMascotaComponent } from './Componentes/Usuario/detalles-mascota/detalles-mascota.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormRevisionComponent } from './Componentes/Administrador/form-revision/form-revision.component';
import { FormEstilistaComponent } from './Componentes/Administrador/form-estilista/form-estilista.component';
import { TratamientoFormularioComponent } from './Componentes/Usuario/tratamiento-formulario/tratamiento-formulario.component';
import { ListaTratamientosComponent } from './Componentes/Usuario/lista-tratamientos/lista-tratamientos.component';
import { CirugiaFormularioComponent } from './Componentes/Usuario/cirugia-formulario/cirugia-formulario.component';
import { ListaCirugiasComponent } from './Componentes/Usuario/lista-cirugias/lista-cirugias.component';
import { DetalleTratamientoComponent } from './Componentes/Usuario/detalle-tratamiento/detalle-tratamiento.component';
import { DetallesCirugiaComponent } from './Componentes/Usuario/detalles-cirugia/detalles-cirugia.component';

@NgModule({
  declarations: [
    AppComponent,
    MascotaFormularioComponent,
    AgregarRegistroComponent,
    ListasRegistrosComponent,
    RecursosEducativosComponent,
    ActualizarRegistroComponent,
    ReservaCitaComponent,
    ListaCitasComponent,
    ListaMascotasComponent,
    DetallesMascotaComponent,
    FormRevisionComponent,
    FormEstilistaComponent,
    TratamientoFormularioComponent,
    ListaTratamientosComponent,
    CirugiaFormularioComponent,
    ListaCirugiasComponent,
    DetalleTratamientoComponent,
    DetallesCirugiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,

    //--Material
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
