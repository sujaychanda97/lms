
// IMPORTING THE ANGULAR MODULES FOR POPUPS.
import {NgModule} from '@angular/core';

// IMPORTING THE ANGULAR MODULES FOR DOING OPERATIONS ON URL.
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

// HOLDS THE AUTHENTICATION GUARD.
import {AuthGuard} from './auth/auth.guard';

// DEFINING THE ROUTES FOR ANGULAR.
const routes: Routes =
[
  {
    // LOADS LOGIN MODULE
    path: '',
    pathMatch: 'full',
    loadChildren:() => import ('./components/login/login.module').then(m => m.loginModule)
  },
  {
    // LOADS DASHBOARD MODULE
    path: 'dashboard',
    // canActivate: [AuthGuard],
    loadChildren:() => import ('./components/dashboard/dashboard.module').then(m => m.dashboardModule)
  },
];

// AN ANGULAR DECORATOR THAT IDENTIFIES THE MODULE'S OWN COMPONENTS, DIRECTIVES, AND PIPES.
// SO THAT EXTERNAL COMPONENTS CAN USE THEM.
@NgModule
({
  imports:
  [
    // SETTING THE ABOVE ROUTES IN ANGULAR ROUTER MODULE.
    RouterModule.forRoot (routes, {preloadingStrategy: PreloadAllModules})
  ],
  
  exports:
  [
    // EXPORTING THE ROUTER MODULE.
    RouterModule
  ]
})

// DECLARING THE AppRoutingModule CLASS WITH EXPORT SO THAT WE CAN IMPORT THIS SERVICE INTO ANY OTHER COMPONENT OR SERVICE.
export class AppRoutingModule{}
