import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// IMPORTING THE ANGULAR MODULES FOR BROWSER.
import {BrowserModule} from '@angular/platform-browser';

// IMPORTING THE ANGULAR MODULES FOR BROWSER ANIMATIONS.
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// IMPORTING THE ANGULAR MODULES FOR HTTP.
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

// IMPORTING THE ANGULAR MODULES FOR COMMON DATA.
import {CommonModule} from '@angular/common';

// IMPORTING THE ANGULAR FORM TO CONVERT AN HTML FORM TO A REACTIVE FORM.
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
