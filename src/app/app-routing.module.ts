import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VisitanteComponent } from './Pages/home/components/visitante/visitante.component';

const routes: Routes = [{path:'',
loadChildren:()=> import('./Pages/home/home.module').then(m=>m.HomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
