import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ConexionService } from 'src/app/services/conexion.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = '';
  contrasena: string = '';

  constructor(private conexion: ConexionService,
              private toastController: ToastController,
              private modalCtrl: ModalController,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }
  
  async login() {
    if (!this.usuario || !this.contrasena) {
      this.presentToast();
      return;
    }

    try {
      
      const response = await this.conexion.validarCredenciales(this.usuario, this.contrasena).toPromise();
      if (response.error === 'ok') {
        // Credenciales válidas, redirigir a la siguiente página
        this.userService.setUser(this.usuario);
        this.router.navigate(['/home']);
      } else {
        // Credenciales inválidas, mostrar mensaje de error
        this.presentToastInvalid();
      }
    } catch (error) {
      // Error de conexión, mostrar mensaje de error
      console.error(error);
      this.presentToastError();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Debe ingresar el usuario y la contraseña.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastInvalid() {
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña incorrectos.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastError() {
    const toast = await this.toastController.create({
      message: 'Error de conexión. Intente nuevamente más tarde.',
      duration: 2000
    });
    toast.present();
  }


}
