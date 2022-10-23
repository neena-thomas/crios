import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
//import { TestimonialComponent } from 'src/app/components/testimonial/testimonial.component';
import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class TestimonialsModule { }
