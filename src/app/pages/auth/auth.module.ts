import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Login } from './login/login';
import { Register } from './register/register';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register }
];

@NgModule({
  declarations: [Login, Register, Login, Register],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule {}