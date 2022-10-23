import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
//import { OfferComponent } from 'src/app/components/offer/offer.component';
 import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OfferRoutingModule,
    SharedModule
  ],
  exports: []
})
export class OfferModule { }
