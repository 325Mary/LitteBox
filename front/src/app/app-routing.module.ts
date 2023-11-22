import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from "../app/register/register.component";
import { LoginComponent } from './login/login.component';
import { UsersService } from "../app/services/users.service";
import { HomeComponent } from "../app/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registrarse', component: RegisterComponent},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
