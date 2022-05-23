import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminpageComponent } from './adminpage.component';
import { CitasComponent } from './components/citas/citas.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
  
    CitasComponent,
    NavbarComponent,
    AdminpageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
