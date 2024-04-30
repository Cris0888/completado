import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CambiarCorreoPageModule } from './cambiar-correo/cambiar-correo.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'rutinas',
    loadChildren: () => import('./rutinas/rutinas.module').then( m => m.RutinasPageModule)
  },
  {
    path: 'personalizados',
    loadChildren: () => import('./personalizados/personalizados.module').then( m => m.PersonalizadosPageModule)
  },
  {
    path: 'avances',
    loadChildren: () => import('./avances/avances.module').then( m => m.AvancesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'medidas',
    loadChildren: () => import('./medidas/medidas.module').then( m => m.MedidasPageModule)
  },
  {
    path: 'contactanos',
    loadChildren: () => import('./contactanos/contactanos.module').then( m => m.ContactanosPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'cambiar-contra',
    loadChildren: () => import('./cambiar-contra/cambiar-contra.module').then( m => m.CambiarContraPageModule)
  },
  {
    path: 'cambiar-correo',
    loadChildren: () => import('./cambiar-correo/cambiar-correo.module').then( m => m.CambiarCorreoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
