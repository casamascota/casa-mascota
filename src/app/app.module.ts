import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

<<<<<<< HEAD
import {MatInputModule} from '@angular/material/input';
import { TestComponentComponent } from './test-component/test-component.component';
import {  HttpClientModule } from '@angular/common/http';
=======

//----Componentes
import { MascotaFormularioComponent } from './mascota-formulario/mascota-formulario.component';
import { AgregarRegistroComponent } from './Componentes/Administrador/agregar-registro/agregar-registro.component';
import { ListasRegistrosComponent } from './Componentes/Administrador/listas-registros/listas-registros.component';
import { AgendarCitaComponent } from './Componentes/Usuario/agendarCita/agendarCita.component';

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
>>>>>>> Front-Cristopher

@NgModule({
  declarations: [
    AppComponent,
    MascotaFormularioComponent,
<<<<<<< HEAD
    TestComponentComponent,
    
=======
    AgregarRegistroComponent,
    AgendarCitaComponent,
    ListasRegistrosComponent,
>>>>>>> Front-Cristopher
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
    
=======
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
>>>>>>> Front-Cristopher
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
