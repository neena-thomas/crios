import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
 import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    ContentRoutingModule, SharedModule
  ],
  exports: []
})
export class ContentModule { }
