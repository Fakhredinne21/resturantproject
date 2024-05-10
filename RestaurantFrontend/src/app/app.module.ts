import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from "@angular/common/http";
import { LoginModule } from './login/login.module';
import { RegesterModule } from './regester/regester.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    RegesterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
