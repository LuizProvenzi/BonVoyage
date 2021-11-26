import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogarPage } from './jogar.page';

const routes: Routes = [
  {
    path: '',
    component: JogarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogarPageRoutingModule {}
