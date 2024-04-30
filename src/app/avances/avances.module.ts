import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvancesPageRoutingModule } from './avances-routing.module';

import { AvancesPage } from './avances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvancesPageRoutingModule
  ],
  declarations: [AvancesPage]
})
export class AvancesPageModule {}
