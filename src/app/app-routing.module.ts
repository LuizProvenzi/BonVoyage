import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'veiculo',
    loadChildren: () => import('./veiculo/veiculo.module').then( m => m.VeiculoPageModule)
  },
  {
    path: 'timeline',
    loadChildren: () => import('./timeline/timeline.module').then( m => m.TimelinePageModule)
  },
  {
    path: 'alertas',
    loadChildren: () => import('./alertas/alertas.module').then( m => m.AlertasPageModule)
  },
  {
    path: 'cadastro-veiculo',
    loadChildren: () => import('./cadastro-veiculo/cadastro-veiculo.module').then( m => m.CadastroVeiculoPageModule)
  },
  {
    path: 'jogar',
    loadChildren: () => import('./jogar/jogar.module').then( m => m.JogarPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
