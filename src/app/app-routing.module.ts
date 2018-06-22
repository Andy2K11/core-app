import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
