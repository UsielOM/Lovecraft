import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';


@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent,
    PrincipalComponent,
    ConocenosComponent,
    JumbotronComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
