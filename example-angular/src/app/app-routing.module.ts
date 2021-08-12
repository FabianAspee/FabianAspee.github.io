import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; 
import { PageNotFoundComponent } from './page_not_found/page_not_found.component';

const routes: Routes = [
  {path: 'home', component:AppComponent},
    {
      path: 'form-turbine',
      loadChildren: () => import('./insert_turbine/insert_turbine.component').then(m => m.InsertTurbineComponent),
      data: { preload: true }},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**',   component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
