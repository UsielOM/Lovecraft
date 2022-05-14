import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  {path: '', component:HomepageComponent,
children:[
  
  {path:'', component:PrincipalComponent}
  
  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
