import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Home } from './pages/public/home/home';
import { Faq } from './pages/public/faq/faq';
import { Features } from './pages/public/features/features';
import { Help } from './pages/public/help/help';
import { HowItWorks } from './pages/public/how-it-works/how-it-works';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'auth/login', component: Login },
  { path: 'auth/register', component: Register },
  { path: 'features', component: Features },
  { path: 'how-it-works', component: HowItWorks },
  { path: 'faq', component: Faq },
  { path: 'help', component: Help },
  { path: '**', redirectTo: '' }
];