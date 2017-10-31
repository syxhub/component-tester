import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SignUpComponent } from './account/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskContainerComponent } from './feature-components/task-container/task-container.component';
import { TaskComponent } from './feature-components/task-container/task/task.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './subpages/dashboard/dashboard.component';
import { MapComponent } from './subpages/support/map/map.component';
import { SupportComponent } from './subpages/support/support.component';
import { SettingsComponent } from './subpages/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskContainerComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    SupportComponent,
    MapComponent,
    SignUpComponent,
    SettingsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANXyIWCMat-4mtRQKFoxkwB4kfmhhRwXU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
