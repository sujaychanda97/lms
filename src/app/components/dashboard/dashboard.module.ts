/*
 FILENAME: attotrain/src/app/components/dashboard/dashboard.module.ts
 AUTHOR: ICI/AD
 SUMMARY: ENTRY POINT FOR DASHBOARD COMPONENT.
 PURPOSE: THIS MODULE IS LOADED BY USING LAZY LOADING IN APP ROUTING MODULE
 TO LOAD THE DASHBOARD.
 IMPORTING FILES: dashboard.routing.ts | dashboard.component.ts | managecourses.component.ts |
 managequizzes.component.ts | manageusers.component.ts | studentprogress.component.ts |
 adminutilities.component.ts | inprogress.component.ts | coursehistory.component.ts |
 resources.component.ts | myinformation.component.ts | createcourses.component.ts |
 managequiz.component.ts | managequestions.component.ts
 managecourse.component.ts | manageunit.component.ts
 managemodule.component.ts | managetopics.component.ts
 SUBSCRIBING FILES: N/A
 LAST COMMIT DATE: September 27, 2021
 */

// IMPORTING THE ANGULAR MODULES FOR PERFORMING BASIC ANGULAR FRAMEWORK OPERATIONS.
import {NgModule} from '@angular/core';

// IMPORTING THE ANGULAR COMMON DATA.
import {CommonModule, DatePipe} from '@angular/common';

// IMPORTING THE ANGULAR MODULES FOR DOING OPERATIONS ON URL.
import {dashboardRoutingModule} from './dashboard.routing';

// IMPORTING DASHBOARD COMPONENT
import {DashboardComponent} from './dashboard.component';

// IMPORTING HTTP MODULE
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

// IMPORTING THE ANGULAR FORM TO CONVERT AN HTML FORM TO A REACTIVE FORM.
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManagecoursesComponent } from './managecourses/managecourses.component';
import { ManagetopicsComponent } from './managetopics/managetopics.component';


// AN ANGULAR DECORATOR THAT IDENTIFIES THE MODULE'S OWN COMPONENTS, DIRECTIVES, AND PIPES, SO THAT EXTERNAL COMPONENTS CAN USE THEM.
@NgModule
({
    // IMPORTS HOLDS THE LIST OF ANGULAR MODULES REQUIRED FOR THIS MODULE.
    imports: [
        CommonModule,
        dashboardRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    // DECLARATION THAT HOLDS THE COMPONENTS TO BE LOADED IN THIS MODULE.
    declarations: [
        DashboardComponent,
        HeaderComponent,
        SidebarComponent,
        ManageusersComponent,
        ManagecoursesComponent,
        ManagetopicsComponent

    ],
    // EXPORT HOLDS THE COMPONENT TO BE EXPORTED.
    exports: [DashboardComponent],
    // HOLDS THE PROVIDER
    providers: [DatePipe]
})

// DECLARING THE dashboardModule CLASS WITH EXPORT SO THAT WE CAN IMPORT THIS SERVICE INTO ANY OTHER COMPONENT OR SERVICE.
export class dashboardModule
{
  // CLASS CONSTRUCTOR, THIS WILL BE THE FIRST FUNCTION TO BE EXECUTED WHEN THIS CLASS LOADS.
  // HERE WE WILL TELL ANGULAR TO INJECT A DEPENDENCY BY SPECIFYING A CONSTRUCTOR PARAMETER WITH THE DEPENDENCY TYPE.
  constructor ()
  {
    console.log ('dashboardModule Module loaded');
  }
}
