import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabVeiculos',
        loadChildren: () => import('../veiculos/veiculos.module').then(m => m.VeiculosPageModule)
      },
      {
        path: 'tabTimeline',
        loadChildren: () => import('../timeline/timeline.module').then(m => m.TimelinePageModule)
      },
      {
        path: 'tabLogin',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tabLogin',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabLogin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
