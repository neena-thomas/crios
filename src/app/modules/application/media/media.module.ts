import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';

//import { MediaComponent } from 'src/app/components/media/media.component';
import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MediaRoutingModule,
    SharedModule
  ],
  exports: []
})
export class MediaModule { }
