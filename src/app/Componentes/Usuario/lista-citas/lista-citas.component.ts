import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent {
  URL_BASE = 'http://localhost:3000/api/';
  citasList: any[] = [];
  //listaAux: any[] = [];
    constructor(private httpClient: HttpClient) { }
  
    ngOnInit(): void {
      this.getCitasAgendadas();
      
    }

    /* Este método se encarga de obtener las citas agendadas */
    _getCitasAgendadas():Observable<any> {
      return this.httpClient.get<any[]>(this.URL_BASE + 'citas');
    }

    /* Este se encarga de formatear, es decir agarra el id de la mascota y el id del
    servicio y los cambia por el nombre de la mascota y el tipo de servicio */

    /**
 * Recupera las citas agendadas y realiza modificaciones en los datos obtenidos.
 */
getCitasAgendadas() {
  this._getCitasAgendadas().subscribe(
    /**
     * Se ejecuta cuando se recibe una respuesta exitosa.
     * @param {any} res - La respuesta recibida.
     */
    (res) => {
      // Almacenar la respuesta en una variable auxiliar
      const auxLista = res;

      // Actualizar la propiedad this.citasList con la respuesta recibida
      this.citasList = res;

      // Iterar sobre cada elemento de auxLista
      for(let i = 0; i < auxLista.length; i++){
        // Llamar a this.getMascota con el ID de mascota actual
        this.getMascota(auxLista[i].Mascota_id_mascota).subscribe(
          /**
           * Se ejecuta cuando se recibe una respuesta exitosa.
           * @param {any} res - La respuesta recibida.
           */
          (res) => {
            // Actualizar el nombre de la mascota en el objeto actual de auxLista
            auxLista[i].Mascota_id_mascota = res.nombre;
          },
          /**
           * Se ejecuta cuando se produce un error.
           * @param {any} error - El error recibido.
           */
          (error) => {
            console.log(error);
          }
        );
      }

      // Iterar sobre cada elemento de auxLista
      for(let i = 0; i < auxLista.length; i++){
        // Llamar a this.getServicio con el ID de servicio actual
        this.getServicio(auxLista[i].Servicio_id_servicio).subscribe(
          /**
           * Se ejecuta cuando se recibe una respuesta exitosa.
           * @param {any} res - La respuesta recibida.
           */
          (res) => {
            // Actualizar el tipo de servicio en el objeto actual de auxLista
            auxLista[i].Servicio_id_servicio = res.tipo;
          },
          /**
           * Se ejecuta cuando se produce un error.
           * @param {any} error - El error recibido.
           */
          (error) => {
            console.log(error);
          }
        );
      }
    },
    /**
     * Se ejecuta cuando se produce un error.
     * @param {any} error - El error recibido.
     */
    (error) => {
      console.log(error);
    }
  );
}


    /* Obtiene la mascota por id*/
    getMascota(idMascota: number): Observable<any> {
      return this.httpClient.get(`${this.URL_BASE}mascotas/${idMascota}`);
    }

    /* Obtiene el servicio por id*/
    getServicio(idServicio: number): Observable<any> {
      return this.httpClient.get(`${this.URL_BASE}servicios/${idServicio}`);
    }
    
    

   

    
  
}
