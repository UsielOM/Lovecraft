import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormempleadoComponent } from './Pages/home/components/formempleado/formempleado.component';

const routes: Routes = [{path:'',
loadChildren:()=> import('./Pages/home/home.module').then(m=>m.HomeModule)}
,{path:'formempleado',component:FormempleadoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
