import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminpageComponent } from './adminpage.component';
import { CitasComponent } from './components/citas/citas.component';


@NgModule({
  declarations: [
    AdminpageComponent,
    CitasComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
