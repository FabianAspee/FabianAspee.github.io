import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const heroesRoutes: Routes = [
    { path: 'inserturbine', redirectTo: '/inserturbine' },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(heroesRoutes)
    ],
    exports: [
      RouterModule
    ]
  })

export class InsertTurbineComponent{

}