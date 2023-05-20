import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MascotaFormularioComponent } from './mascota-formulario/mascota-formulario.component';
import { TratamientoComponent } from './tratamiento/tratamiento.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CirugiaComponent } from './cirugia/cirugia.component';


@NgModule({
  declarations: [
    AppComponent,
    MascotaFormularioComponent,
    TratamientoComponent,
    NavbarComponent,
    CirugiaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
