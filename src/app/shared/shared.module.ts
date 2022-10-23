import { NgModule, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared/shared/shared.component';

import { LoadCheckService } from '../services/load-check.service';

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  providers: [LoadCheckService]
})
export class SharedModule { }
