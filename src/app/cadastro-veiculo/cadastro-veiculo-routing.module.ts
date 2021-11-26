import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroVeiculoPage } from './cadastro-veiculo.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroVeiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroVeiculoPageRoutingModule {}
