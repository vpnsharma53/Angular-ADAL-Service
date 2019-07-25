import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdalGuard } from 'adal-angular4';
import { AppComponent } from './app.component';
import { AuthcallbackComponent } from './callback/authcallback/authcallback.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent
},
  {path: 'auth-callback', component: AuthcallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
