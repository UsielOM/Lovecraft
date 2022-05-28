import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage.component';
import { CitasComponent } from './components/citas/citas.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {path:'', component:AdminpageComponent,
children:[
  {path:'citas',component:CitasComponent },
  {path:'perfil', component:PerfilComponent }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
