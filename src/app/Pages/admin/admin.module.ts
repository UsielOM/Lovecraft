import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminpageComponent } from './adminpage.component';
import { CitasComponent } from './components/citas/citas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
    CitasComponent,
    NavbarComponent,
    AdminpageComponent,
    AdministracionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
