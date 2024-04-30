import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizadosPageRoutingModule } from './personalizados-routing.module';

import { PersonalizadosPage } from './personalizados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizadosPageRoutingModule
  ],
  declarations: [PersonalizadosPage]
})
export class PersonalizadosPageModule {}
