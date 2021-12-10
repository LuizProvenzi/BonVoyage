import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardComponent } from '../card/card.component';
import { InfoComponent } from '../info/info.component';


@NgModule({
    imports: [CommonModule, FormsModule, IonicModule],
    declarations: [CardComponent,InfoComponent],
    exports: [CardComponent,InfoComponent]
})
export class ComponentsModule {}