import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { FormempleadoComponent } from './components/formempleado/formempleado.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { HomepageComponent } from './homepage.component';
import { VisitanteComponent } from './components/visitante/visitante.component';

const routes: Routes = [
  {path: '', component:HomepageComponent,
children:[
  
  {path:'', component:PrincipalComponent},

  {path:'visitante',component:VisitanteComponent},
  {path:'formempleado',component:FormempleadoComponent}
  
  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
