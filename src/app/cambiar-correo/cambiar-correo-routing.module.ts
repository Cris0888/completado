import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarCorreoPage } from './cambiar-correo.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarCorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarCorreoPageRoutingModule {}
