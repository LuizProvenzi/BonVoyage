import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroVeiculoPageRoutingModule } from './cadastro-veiculo-routing.module';

import { CadastroVeiculoPage } from './cadastro-veiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroVeiculoPageRoutingModule
  ],
  declarations: [CadastroVeiculoPage]
})
export class CadastroVeiculoPageModule {}
