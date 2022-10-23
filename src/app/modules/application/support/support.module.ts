import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
//import { SupportComponent } from 'src/app/components/support/support.component';

import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SupportRoutingModule,
    SharedModule
  ],
  exports: []
})
export class SupportModule { }
