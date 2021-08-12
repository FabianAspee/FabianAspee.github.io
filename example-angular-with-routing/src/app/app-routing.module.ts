import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleTurbineModule } from '../app/component/example_post_get_turbine/example_post_get_turbine.module';
import { PageNotFoundComponent } from './component/page_not_found/page_not_found.component';

const routes: Routes = [
{
  path: 'insertturbine',
  loadChildren: () => import('../app/component/insert_turbine/insert_turbine.module')
  .then(m => m.InsertTurbineModule),
  data: { preload: true }
}, 
{ 
  path: 'exampleturbine', loadChildren: () => import('../app/component/example_post_get_turbine/example_post_get_turbine.module')
  .then(m => m.ExampleTurbineModule),
  data: { preload: true }
},
{ 
  path: 'loginsystem', loadChildren: () => import('../app/component/login/login.module')
  .then(m => m.LoginModule),
  data: { preload: true }
},
{ path: '',   redirectTo: '/exampleturbine', pathMatch: 'full'},
{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
