import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumeroCelPageRoutingModule } from './numero-cel-routing.module';

import { NumeroCelPage } from './numero-cel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumeroCelPageRoutingModule
  ],
  declarations: [NumeroCelPage]
})
export class NumeroCelPageModule {}
