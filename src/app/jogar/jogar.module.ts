import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogarPageRoutingModule } from './jogar-routing.module';

import { JogarPage } from './jogar.page';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [JogarPage]
})
export class JogarPageModule {}

