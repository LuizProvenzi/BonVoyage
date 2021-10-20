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
        path: 'tabCadastro',
        loadChildren: () => import('../cadastro/cadastro.module').then(m => m.CadastroPageModule)
      },
      {
        path: 'tabLogin',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'tabLogin',
        redirectTo: '/tabs/tabLogin',
        pathMatch: 'full'
      }
      
    ]
  },
  {
    path: 'tabLogin',
    redirectTo: '/tabs/tabLogin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
