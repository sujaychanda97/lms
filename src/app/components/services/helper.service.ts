// IMPORTING THE ANGULAR MODULES FOR PERFORMING BASIC ANGULAR FRAMEWORK OPERATIONS.
import {Injectable, ViewChild} from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

// IMPORTING THE ANGULAR SUBJECT TO USE AS AN OBSERVABLE.
import {BehaviorSubject, Observable, Subject} from 'rxjs';

// IMPORTING THE ANGULAR MODULES FOR DOING OPERATIONS ON URL.
import {Router} from "@angular/router";

import { environment } from '../../../environments/environment';

// DECLARE VARIABLE $ TO ANY TYPE. LATER, IT CAN BE CAST TO THE DESIRED TYPE.
declare var $: any;

// THE @Injectable DECLARES THIS AS A SERVICE SO THAT WE CAN INJECT THIS SERVICE INTO ANY OTHER
// COMPONENT OR SERVICE
@Injectable
({
  providedIn: 'root'
})

// DECLARING THE HelperService CLASS WITH EXPORT SO THAT WE CAN IMPORT THIS SERVICE INTO ANY OTHER COMPONENT OR SERVICE 
export class HelperService
{
  public apiBase = environment.apiBase;

  // CLASS CONSTRUCTOR, THIS WILL BE FIRST FUNCTION TO BE EXECUTED WHEN THIS CLASS LOADS.
  // HERE WE WILL TELL ANGULAR TO INJECT A DEPENDENCY BY SPECIFYING A CONSTRUCTOR
  // PARAMETER WITH THE DEPENDENCY TYPE.
  constructor
  (
    private router: Router,
    private http: HttpClient
  )
  {}

  // THIS FUNCTION WILL CONVERT PX VALUE TO VW
  pxTovw (pxvalue: any)
  {
    var vwvalue = pxvalue / document.documentElement.clientWidth * 100;
    return vwvalue;
  } 

  // THIS FUNCTION WILL CONVERT VW VALUE TO PX
  vwTopx (vwvalue: any)
  {
    var pxvalue = vwvalue * document.documentElement.clientWidth / 100;
    return pxvalue;
  } 

  // THIS FUNCTION WILL SORT A GIVEN ARRAY BY A GIVEN ARRAY KEY.
  sortArrayByKey (array: any, key: any)
  {
    // SORT THE ARRAY BY KEY.
    array = array.sort (function (a: any, b: any)
    {
      return a [key] - b [key];
    });
    
    // TBD
    return array;
  }

  // FUNCTION FOR CHECKING EMAIL VALID FORMAT
  validateEmail (email: any)
  {
    // EXPRESSION STRING FOR EMAIL; TRUE IS A VALID EMAIL ADDRESS. TEST METHOD EXECUTES THE
    // REGULAR EXPRESSION TEST
    if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email))
    {
      return (true);
    }
    
    // TBD
    return (false);
  }
  
  // THIS FUNCTION WILL RECEIVE THE KENDO DATE PICKER DATE AND RETURN DATE IN YYYY-MM-DD FORMAT.
  formatDate (date: any)
  {
    // TBD
    var d = new Date (date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    
    // TBD
    if (month.length < 2)
      month = '0' + month;
    
    // TBD
    if (day.length < 2)
      day = '0' + day;
    
    // TBD
    return [year, month, day].join ('-');
  }
  
  public performPostRequest(endPoint: any, filterObject: any) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.post(this.apiBase + endPoint, filterObject, { headers: headers });
  }


 
}
