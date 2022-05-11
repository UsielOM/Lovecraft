import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
