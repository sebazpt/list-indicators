import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule),
    data: { animationState: 'Hom' }
  },
  {
    path: 'indicators-list',
    loadChildren: () => import('./indicators-list/indicators-list.module').then( m => m.IndicatorsListModule),
    data: { animationState: 'Lis' }
  },
  {
  path: '**',
  redirectTo: 'home'
 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
