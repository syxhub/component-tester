import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './account/sign-up/sign-up.component';
import { LoginComponent } from './account/login/login.component';
import { DashboardComponent } from './subpages/dashboard/dashboard.component';
import { SettingsComponent } from './subpages/settings/settings.component';
import { SupportComponent } from './subpages/support/support.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'support', component: SupportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
