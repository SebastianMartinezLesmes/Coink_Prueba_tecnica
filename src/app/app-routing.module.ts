import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'numero-cel',
    loadChildren: () => import('./numero-cel/numero-cel.module').then( m => m.NumeroCelPageModule)
  },
  {
    path: 'cuenta-creada',
    loadChildren: () => import('./cuenta-creada/cuenta-creada.module').then( m => m.CuentaCreadaPageModule)
  },
  {
    path: 'finalizar',
    loadChildren: () => import('./finalizar/finalizar.module').then( m => m.FinalizarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
