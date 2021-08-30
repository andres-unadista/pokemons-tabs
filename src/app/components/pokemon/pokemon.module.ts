import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class PokemonModule { }
