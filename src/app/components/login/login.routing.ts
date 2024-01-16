/*
          FILENAME: attotrain/src/app/components/login/login.routing.ts
            AUTHOR: ICI/AD
           SUMMARY: LOGIN ROUTING MODULE
           PURPOSE: THIS FILE HOLDS THE ROUTE LOGIC FOR LOGIN MODULE.
   IMPORTING FILES: login.component.ts
 SUBSCRIBING FILES: login.module.ts
  LAST COMMIT DATE: September 27, 2021
*/

// IMPORTING THE ANGULAR MODULES FOR PERFORMING BASIC ANGULAR FRAMEWORK OPERATIONS.
import {NgModule} from '@angular/core';

// IMPORTING THE ANGULAR MODULES FOR DOING OPERATIONS ON URL.
import {Routes, RouterModule} from '@angular/router';

// IMPORTING THE ANGULAR LOGIN COMPONENT.
import {LoginComponent} from './login.component';

// DEFINING THE ROUTES
const routes: Routes = 
[
	// IF THE PATH IS BLANK THEN LOAD LoginComponent COMPONENT
	{
		path: '',
		component: LoginComponent
	}
];

// AN ANGULAR DECORATOR THAT IDENTIFIES THE MODULE'S OWN COMPONENTS, DIRECTIVES, AND PIPES, SO THAT EXTERNAL
// COMPONENTS CAN USE THEM.
@NgModule
({
  // SETTING THE ABOVE ROUTES IN ANGULAR ROUTER MODULE.
  imports: [RouterModule.forChild (routes)],
  
  // EXPORTING THE ROUTER MODULE.
  exports: [RouterModule]
})

// DECLARING THE LoginRoutingModule CLASS WITH EXPORT SO THAT WE CAN IMPORT THIS SERVICE INTO ANY OTHER COMPONENT OR SERVICE.
export class LoginRoutingModule{}
