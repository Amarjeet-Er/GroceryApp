import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Skip1Component } from './skipPage/skip1/skip1.component';
import { Skip2Component } from './skipPage/skip2/skip2.component';
import { Skip3Component } from './skipPage/skip3/skip3.component';
import { LoginJunctionComponent } from './login-junction/login-junction.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: Skip1Component },
  { path: 'skip1', component: Skip1Component },
  { path: 'skip2', component: Skip2Component },
  { path: 'skip3', component: Skip3Component },
  { path: 'loginjunction', component: LoginJunctionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgotpass', component: ForgotPasswordComponent },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
