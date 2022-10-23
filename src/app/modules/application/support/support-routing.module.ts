import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { SupportComponent } from 'src/app/components/support/support.component';
 
const routes: Routes = [
  { path: '', component: SupportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
