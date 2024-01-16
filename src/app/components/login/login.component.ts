import { Component, OnInit } from '@angular/core';

// IMPORTING ANGULAR FORMS TO CONVERT AN HTML FORM TO A REACTIVE FORM.
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";

// IMPORTING HELPER SERVICE TO LOAD INITIAL DATA.
import {HelperService} from '../services/helper.service';

// IMPORTING THE ANGULAR MODULES FOR DOING OPERATIONS ON URLS.
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  // DECLARING loginForm AS A FORM GROUP.
  public loginForm: any = FormGroup;

  // BOOLEAN VARIABLE TO SHOW BORDER IN EMAIL INPUT.
	public errorBorderEmail: boolean = false;

  // BOOLEAN VARIABLE TO SHOW BORDER IN PASSWORD INPUT.
	errorBorderPassword: boolean = false;

  public errorMsg: any;
  public showMessage: any;

  constructor(
    private formBuilder: FormBuilder, // CREATING ALIAS FOR FORM BUILDER.
    public helperService: HelperService, // CREATING HELPER SERVICE ALIAS.
    private router: Router, // CREATING ALIAS FOR ROUTER.
    ) { }

  ngOnInit(): void {
   
    // TBD
		this.loginForm = this.formBuilder.group
		({
			emailtextbox: ['', [Validators.required, Validators.email]],
			passwordtextbox: ['', [Validators.required, Validators.minLength (6)]]
		});
    
  }

  // THIS FUNCTION IS USED TO SHOW / HIDE RED BORDER IN EMAIL INPUT.
  // IF IT RETURNS TRUE, THEN BORDER WILL SHOW, OTHERWISE, HIDE THE BORDER.
  showEmailBorder()
  {
    // IF THE EMAIL INPUT IS TOUCHED AND THE INPUT HAS A REQUIRED ERROR . . .
    if (this.loginForm.controls ['emailtextbox'].touched && this.loginForm.controls ['emailtextbox'].hasError ('required'))
    {
      // . . . RETURN TRUE TO SHOW THE RED BORDER.
      return true;
    }
    
    // IF THE EMAIL VALUE IS NOT VALID . . .
    if (!this.validateEmail())
    {
      // . . . RETURN TRUE TO SHOW THE RED BORDER.
      return true;
    }
  
    // IF NO ACCOUNT FOUND IN DB WITH THIS EMAIL . . .
    if (this.errorBorderEmail)
    {
      // . . . RETURN TRUE TO SHOW THE RED BORDER.
      return true;
    }
  
    // RETURN FALSE TO HIDE THE RED BORDER.
    return false;
  }

  // THIS FUNCTION IS USED TO VALIDATE THE EMAIL VALUE.
  validateEmail()
  {
    // GET THE EMAIL VALUE FROM INPUT.
    let email = this.loginForm.controls.emailtextbox.value;
    
    // IF EMAIL VALUE IS NOT BLANK . . .
    if (email != '')
    {
      // . . . AND IF IT IS VALID, RETURN TRUE.
      if (this.helperService.validateEmail(email)) {return true;}
      
      // THE EMAIL IS NOT VALID, RETURN FALSE.
      else {
        this.errorMsg = '';
        return false;
      }
    }
    
    // IF EMAIL VALUE IS BLANK, RETURN TRUE.
    else {return true;}
  }

  public errorMsgShow(event: any)
  {
    const minLength = this.loginForm.controls['passwordtextbox'].hasError('minlength');
    const req = this.loginForm.controls['passwordtextbox'].hasError('required');

    if(minLength || req){
      this.errorMsg = '';
    }
  }

  // THIS FUNCTION IS USED TO SHOW / HIDE RED BORDER IN PASSWORD INPUT.
  // IF IT RETURNS TRUE, THEN BORDER WILL SHOW, OTHERWISE, HIDE THE BORDER.
  showPasswordBorder()
  {
    // IF THE PASSWORD INPUT IS TOUCHED AND THE INPUT HAS REQUIRED OR MINIMUM LENGTH ERROR . . .
    if (this.loginForm.controls['passwordtextbox'].touched && (this.loginForm.controls ['passwordtextbox'].hasError ('required') || this.loginForm.controls ['passwordtextbox'].hasError ('minlength')))
    {
      // . . . RETURN TRUE TO SHOW THE RED BORDER.
      return true;
    }
  
    // IF NO ACCOUNT FOUND IN DB WITH THIS PASSWORD . . .
    if (this.errorBorderPassword)
    {
      // . . . RETURN TRUE TO SHOW THE RED BORDER.
      return true;
    }
  
    // RETURN FALSE TO HIDE THE RED BORDER.
    return false;
  }

  // HANDLE FOR TOGGLE PASSWORD
  // public showPassword()
  // {
  //   this.password.nativeElement.type = this.password.nativeElement.type === "password" ? 'text' : 'password';
  // }

  doLogin() {
    
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
     
      if (this.loginForm.controls['emailtextbox'].valid) {
        
        if (this.loginForm.controls['passwordtextbox'].value.length >= 5) {
          let email = this.loginForm.value.emailtextbox;
          let password = this.loginForm.value.passwordtextbox;
          let api = 'login.php';
          let payload = { email: email, password: password };

          this.helperService.performPostRequest(api, payload).subscribe((res: any) => {

            if (res.success) {
              let userData = res.data;

              // store in session by stringify the obj.
              sessionStorage.setItem('userData', JSON.stringify(userData));

              //redirect to home.
              this.router.navigate(['/dashboard/manageusers']);
            }else {
              this.showMessage = res.message;
            }

          });

        }

      }

    }
              
  }

}
