import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './containers/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routes } from "./routes.auth";
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AuthModule { }
