import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarCorreoPageRoutingModule } from './cambiar-correo-routing.module';

import { CambiarCorreoPage } from './cambiar-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarCorreoPageRoutingModule
  ],
  declarations: [CambiarCorreoPage]
})
export class CambiarCorreoPageModule {}
