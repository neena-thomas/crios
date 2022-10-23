import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared/shared/shared.component';

const routes: Routes = [
  {
    path: '', component: SharedComponent
  },
  // {
  //   path: 'offer',
  //   loadChildren: () => import('../modules/application/offer/offer.module')
  //     .then(com => com.OfferModule)
  // },
  // {
  //   path: 'content',
  //   loadChildren: () => import('../modules/application/content1/content1.module')
  //     .then(com => com.Content1Module)
  // },
  // {
  //   path: 'media',
  //   loadChildren: () => import('../modules/application/media/media.module')
  //     .then(com => com.MediaModule)
  // },
  // {
  //   path: 'support',
  //   loadChildren: () => import('../modules/application/support/support.module')
  //     .then(com => com.SupportModule)
  // },
  // {
  //   path: 'testimonials',
  //   loadChildren: () => import('../modules/application/testimonials/testimonials.module')
  //     .then(com => com.TestimonialsModule)
  // },
  // {
  //   path: 'testimonials',
  //   loadChildren: () => import('../modules/application/testimonials/testimonials.module')
  //     .then(com => com.TestimonialsModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
