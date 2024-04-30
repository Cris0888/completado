import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.page.html',
  styleUrls: ['./rutinas.page.scss'],
})
export class RutinasPage implements OnInit {
  listaDeDatos: any[] = [];
  currentIndex: number = 0; // Índice de la tarjeta actual

  constructor(private conexionService: ConexionService) {}

  ngOnInit() {
    this.obtenerRutinas();
  }

  obtenerRutinas() {
    this.conexionService.Rutinas().subscribe(
      (datos: any[]) => {
        this.listaDeDatos = datos;
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

 // Función para cambiar a la siguiente tarjeta
siguienteTarjeta() {
  if (this.currentIndex < this.listaDeDatos.length - 1) {
    this.currentIndex++;
  } else {
    // Si llegamos al final, volvemos al inicio
    this.currentIndex = 0;
  }
}

anteriorTarjeta() {
  if (this.currentIndex > this.listaDeDatos.length + 1) {
    this.currentIndex++;
  } else {
    // Si llegamos al final, volvemos al inicio
    this.currentIndex = 0;
  }
}

};

