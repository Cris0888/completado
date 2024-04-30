import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ConexionService } from 'src/app/services/conexion.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-cambiar-correo',
  templateUrl: './cambiar-correo.page.html',
  styleUrls: ['./cambiar-correo.page.scss'],
})
export class CambiarCorreoPage implements OnInit {

  correo=""
  correo2=""
  usuario = this.userService.getUser()
  emailPattern = /^[A-Za-z_\-][A-Za-z_\-0-9]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  constructor(private conexion: ConexionService,
              private toastController: ToastController,
              private modalCtrl: ModalController,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  async closeModal() {
    this.modalCtrl.dismiss(null, 'closed');
  }
    
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  verificarCorreo() {
    const usuario = this.userService.getUser()

    if (this.correo === this.correo2) {
      if (this.emailPattern.test(this.correo)) {
        this.conexion.consultaCorreo(this.correo).subscribe(
          response => {
            if (response.message === 'Correo encontrado') {
              this.presentToast('El correo ya existe, coloque otro');
              this.closeModal();
            } else {
              const dat = {
                correo: this.correo,
                usuario: usuario
              };
              this.conexion.cambiarCorreo(dat).subscribe(
                data => {
                  this.presentToast('El correo se cambió con éxito');
                  this.closeModal();
                  this.router.navigate(['/login']);
                },
                error => {
                  this.presentToast('Error al cambiar el correo');
                  this.closeModal();
                }
              );
            }
          },
          error => {
            this.presentToast('Error al consultar el correo');
            this.closeModal();
          }
        );
      } else {
        this.presentToast('Ingrese un correo válido');
        this.closeModal();
      }
    } else {
      this.presentToast('Los correos no coinciden');
      this.closeModal();
    }
    

    /* if (this.correo == this.correo2){

      if (this.emailPattern.test(this.correo)){

        const data = {
          correo: this.correo
        }
        this.conexion.consultaCorreo(data).subscribe(
          data => {
              this.presentToast('El correo ya existe, coloque otro');
              this.closeModal();
              console.log(data)
          },
          error => {
            const dat = {
              correo: this.correo,
              usuario: this.usuario
            };
      console.log(error)
            this.conexion.cambiarCorreo(dat).subscribe(
              data => {
                this.presentToast('El correo se cambio con exito');
                this.closeModal();
                this.router.navigate(['/editar-perfil']);
      
              },
              error => {
                this.presentToast('Error al cambiar el correo');
                this.closeModal();

              })
          }
        )

      }else {
        this.presentToast('Ingrese un correo valido');
        this.closeModal();
      }


    } else {
      this.presentToast('Los correos no coinciden');
      this.closeModal();
    }}

 */
    
}}
