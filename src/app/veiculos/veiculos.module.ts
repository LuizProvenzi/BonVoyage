import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeiculosPageRoutingModule } from './veiculos-routing.module';

import { VeiculosPage } from './veiculos.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeiculosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VeiculosPage]
})
export class VeiculosPageModule {}
