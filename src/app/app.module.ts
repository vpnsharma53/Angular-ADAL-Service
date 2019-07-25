import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdalService, AdalInterceptor } from 'adal-angular4';
import { AuthcallbackComponent } from './callback/authcallback/authcallback.component';
import { LoginComponent } from './login/login/login.component';
 
@NgModule({
  declarations: [
    AppComponent,
    AuthcallbackComponent,
    AuthcallbackComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AdalService, { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }