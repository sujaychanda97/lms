/*
         FILENAME: attotrain/src/app/components/login/login.module.ts
           AUTHOR: ICI/AD
          SUMMARY: ENTRY POINT FOR LOGIN COMPONENT.
          PURPOSE: THIS MODULE IS LOADED BY USING LAZY LOADING IN APP ROUTING MODULE
                   TO LOAD THE LOGIN PAGE.
  IMPORTING FILES: login.routing.ts | login.component.ts
SUBSCRIBING FILES: app-routing.module.ts
 LAST COMMIT DATE: September 27, 2021
*/

// IMPORTING THE ANGULAR MODULES FOR PERFORMING BASIC ANGULAR FRAMEWORK OPERATIONS.
import {NgModule} from '@angular/core';

// IMPORTING THE ANGULAR MODULES FOR COMMON DATA.
import {CommonModule} from '@angular/common';

// IMPORTING THE ANGULAR MODULES FOR DOING OPERATIONS ON URL.
import {LoginRoutingModule} from './login.routing';

// IMPORTING THE ANGULAR LOGIN COMPONENT
import {LoginComponent} from './login.component';

// IMPORTING THE ANGULAR FORM TO CONVERT AN HTML FORM TO A REACTIVE FORM.
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// AN ANGULAR DECORATOR THAT IDENTIFIES THE MODULE'S OWN COMPONENTS, DIRECTIVES, AND PIPES, SO THAT EXTERNAL
// COMPONENTS CAN USE THEM.
@NgModule
({
    // IMPORTS HOLDS THE LIST OF ANGULAR MODULES REQUIRED FOR THIS MODULE.
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    // DECLARATION HOLDS THE COMPONENT TO BE LOADED IN THIS MODULE.
    declarations: [
        LoginComponent
    ],
    // EXPORT HOLD THE COMPONENT TO BE EXPORTED.
    exports: [LoginComponent]
})

// DECLARING THE loginModule CLASS WITH EXPORT SO THAT WE CAN IMPORT THIS SERVICE INTO ANY OTHER COMPONENT OR SERVICE.
export class loginModule 
{
	// CLASS CONSTRUCTOR, THIS WILL BE THE FIRST FUNCTION TO BE EXECUTED WHEN THIS CLASS LOADS.
	// HERE WE WILL TELL ANGULAR TO INJECT A DEPENDENCY BY SPECIFYING A CONSTRUCTOR PARAMETER WITH THE DEPENDENCY TYPE.
	constructor()
	{
		console.log ('loginModule Module loaded');
	}
}
