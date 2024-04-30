import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

import { from } from 'rxjs';
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.page.html',
  styleUrls: ['./contactanos.page.scss'],
})
export class ContactanosPage implements OnInit {
  listaDeDatos: any[] = [];

  constructor(private conexionService: ConexionService) { }

  ngOnInit() {
    this.obtenerDatosGym();
  }

  obtenerDatosGym() {
    this.conexionService.datosGym().subscribe(
      (datos: any[]) => {
        // guardamos los datos y convertimos todos los datos a mayúsculas
        this.listaDeDatos = datos.map(item => this.convertirObjetoAMayusculas(item));
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
        // Aquí podemos agregar codigo para manejar el errores o mostrar un mensaje al usuario
      }
    );
  }

  convertirObjetoAMayusculas(objeto: any): any {
    const nuevoObjeto: any = {}; // Se define el tipo any para nuevoObjeto
    // Iterar sobre las propiedades del objeto
    for (let key in objeto) {
      // Verificar que la propiedad sea propia del objeto 
      if (objeto.hasOwnProperty(key)) {
        // Convertir el valor de la propiedad a mayúsculas si es una cadena, de lo contrario, mantenerlo igual
        nuevoObjeto[key] = typeof objeto[key] === 'string' ? objeto[key].toUpperCase() : objeto[key];
      }
    }
    return nuevoObjeto;
  }
}