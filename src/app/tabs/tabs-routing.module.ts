import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabVeiculo',
        loadChildren: () => import('../veiculo/veiculo.module').then(m => m.VeiculoPageModule)
      },
      {
        path: 'tabTimeline',
        loadChildren: () => import('../timeline/timeline.module').then(m => m.TimelinePageModule)
      },
      {
        path: 'tabAlertas',
        loadChildren: () => import('../alertas/alertas.module').then(m => m.AlertasPageModule)
      },
      {
        path: 'tabJogar',
        loadChildren: () => import('../jogar/jogar.module').then(m => m.JogarPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tabVeiculo',
        pathMatch: 'full'
      }
      
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabVeiculo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
