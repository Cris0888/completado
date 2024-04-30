import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizadosPage } from './personalizados.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizadosPageRoutingModule {}
