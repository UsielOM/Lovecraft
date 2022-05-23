import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage.component';
import { CitasComponent } from './components/citas/citas.component';

const routes: Routes = [
  {path:'', component:AdminpageComponent,
children:[
  {path:'citas',component:CitasComponent }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
