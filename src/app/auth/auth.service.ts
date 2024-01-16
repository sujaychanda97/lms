// IMPORTING Injectable FROM ANGULAR CORE.
import {Injectable} from '@angular/core';

// IMPORTING THE ANGULAR COMMON DATA.
import {HttpClient} from '@angular/common/http';

// IMPORTING THE ENVIRONMENT MODULE
import {environment} from "../../environments/environment";

// INJECTING TO THE APP PROVIDER SO THAT WE CAN USE IT THROUGHOUT THE APPLICATION.
@Injectable
({
  providedIn: 'root'
})

// DECLARING THE AuthService CLASS WITH EXPORT SO THAT WE CAN USE THIS CLASS IN OTHER FILES.
export class AuthService
{
  // GET THE API BASE.
  public apiBase = environment.apiBase;
  
  // CLASS CONSTRUCTOR, THIS WILL BE THE FIRST FUNCTION TO BE EXECUTED WHEN THIS CLASS LOADS.
  // HERE WE WILL TELL ANGULAR TO INJECT A DEPENDENCY BY SPECIFYING A CONSTRUCTOR
  // PARAMETER WITH THE DEPENDENCY TYPE.
  constructor
  (
    private http: HttpClient
  ) 
  {}

  // CALL THIS FUNCTION WITH USERNAME AND PASSWORD TO MAKE LOGIN.
  doLogin (email: string, password: string)
  {
    return this.http.post (this.apiBase + '/api/user/login', { email, password });
  }

  // CALL THIS FUNCTION FOR FORGET PASSWORD LINK TO USER MAIL ID
  forgetPassword (emailAddress: string)
  {
    return this.http.post (this.apiBase + '/api/user/forgetpassword', {email: emailAddress});
  }

  // CALL THIS FUNCTION FOR RESET PASSWORD
  resetPassword (password: string)
  {
    return this.http.post (this.apiBase + '/api/user/resetpassword', {hashcode: sessionStorage.getItem ('hashcode'), password: password});
  }

  // CALL THIS FUNCTION FOR LOGIN CHECK
  isLoggedIn() 
  {
    // IF USER ID IS FOUND IN SESSION STORAGE.
    if (sessionStorage.getItem ('user_id'))
    {
      // RETURN TRUE
      return true;
    }
    
    // RETURN FALSE
    return false;
  }

  // THIS FUNCTION WILL BE CALLED TO LOGOUT.
  logout(user_id: any) 
  {    
    return this.http.post(this.apiBase + '/api/user/logout', {user_id});
    // REMOVE THE SESSION STORAGE.    
  }
}
