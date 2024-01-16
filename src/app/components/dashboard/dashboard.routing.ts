/*
         FILENAME: attotrain/src/app/components/dashboard/dashboard.routing.ts
           AUTHOR: ICI/PG
          SUMMARY: HOLDS THE ROUTING INSIDE THE DASHBOARD.
          PURPOSE: TO LOAD CORRESPONDING COMPONENT FOR A PATH.
  IMPORTING FILES: dashboard.component.ts | managecourses.component.ts | managequizzes.component.ts |
                   manageusers.component.ts | studentprogress.component.ts | adminutilities.component.ts |
                   inprogress.module.ts | coursehistory.component.ts | resources.component.ts |
                   myinformation.component.ts | createcourses.component.ts
SUBSCRIBING FILES: dashboard.module.ts
 LAST COMMIT DATE: September 27, 2021
*/

// IMPORTING THE ANGULAR MODULES FOR PERFORMING BASIC ANGULAR FRAMEWORK OPERATIONS.
import {NgModule} from '@angular/core';

// IMPORTING THE ANGULAR MODULES FOR DOING OPERATIONS ON URL.
import {Routes, RouterModule} from '@angular/router';

// IMPORTING DASHBOARD COMPONENT
import {DashboardComponent} from './dashboard.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManagecoursesComponent } from './managecourses/managecourses.component';
import { ManagetopicsComponent } from './managetopics/managetopics.component';

// DEFINING THE ROUTINGS
const routes: Routes =
[
	// IF THE PATH IS BLANK THEN LOAD DashboardComponent COMPONENT
	{
    path: '',
    component: DashboardComponent,
    children:
    [
      // LOAD PATH WISE COMPONENT.
      // {path: 'createoutline', loadChildren: () => import('./createoutline/createoutline.module').then( m => m.CreateoutlineModule)},
      {path: 'manageusers', component: ManageusersComponent},
      {path: 'managecourses', component: ManagecoursesComponent},
      // {path: 'managetopics', component: ManagetopicsComponent}
      
    ]
  }
];

// AN ANGULAR DECORATOR THAT IDENTIFIES THE MODULE'S OWN COMPONENTS, DIRECTIVES, AND PIPES, SO THAT EXTERNAL
// COMPONENTS CAN USE THEM.
@NgModule
({
  imports: [RouterModule.forChild (routes)],
  exports: [RouterModule]
})

// DECLARING THE dashboardRoutingModule CLASS WITH EXPORT SO THAT WE CAN IMPORT THIS SERVICE
// INTO ANY OTHER COMPONENT OR SERVICE.
export class dashboardRoutingModule{}
