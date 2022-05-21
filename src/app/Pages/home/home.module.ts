import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { FormempleadoComponent } from './components/formempleado/formempleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent,
    PrincipalComponent,
    ConocenosComponent,
    FormempleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    
  ]
})
export class HomeModule { }
