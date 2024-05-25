import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SignupModule } from './signup/signup.module';
import {HttpClientModule} from "@angular/common/http";
import {AdminModule} from "./admin/admin.module";
import {UserModule} from "./user/user.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SignupModule,
    HttpClientModule,
    UserModule,
    AdminModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
