import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InsertTurbineComponent } from "../insert_turbine/insert_turbine.component";

const turbineRoutes: Routes = [
    { path: 'turbine', redirectTo: '/home' },
    { path: 'inserturbine',  component: InsertTurbineComponent, data: { animation: 'insert' } },
  ];

@NgModule({
    imports: [
      RouterModule.forChild(turbineRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class RoutingModule { }