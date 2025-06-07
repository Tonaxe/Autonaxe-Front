import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Home } from './pages/public/home/home';
import { Faq } from './pages/public/faq/faq';
import { Features } from './pages/public/features/features';
import { Help } from './pages/public/help/help';
import { HowItWorks } from './pages/public/how-it-works/how-it-works';
import { Cookies } from './pages/public/cookies';
import { Terms } from './pages/public/terms';
import { Privacy } from './pages/public/privacy';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'auth/login', component: Login },
  { path: 'auth/register', component: Register },
  { path: 'features', component: Features },
  { path: 'how-it-works', component: HowItWorks },
  { path: 'faq', component: Faq },
  { path: 'help', component: Help },
  { path: 'privacidad', component: Privacy },
  { path: 'terminos', component: Terms },
  { path: 'cookies', component: Cookies },
  { path: '**', redirectTo: 'home' }
];