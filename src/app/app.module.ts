import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgDraggableModule } from 'angular-draggable';
import { DragulaModule } from 'ng2-dragula';

import { LoginComponent } from './account/login/login.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './layout/carousel/carousel.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DatepickerComponent } from './subpages/dashboard/dashboard-components/datepicker/datepicker.component';
import { TaskContainerComponent } from './subpages/dashboard/dashboard-components/task-container/task-container.component';
import { TaskComponent } from './subpages/dashboard/dashboard-components/task-container/task/task.component';
import { DashboardComponent } from './subpages/dashboard/dashboard.component';
import { SettingsComponent } from './subpages/settings/settings.component';
import { MapComponent } from './subpages/support/map/map.component';
import { SupportComponent } from './subpages/support/support.component';

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
    SettingsComponent,
    CarouselComponent,
    DatepickerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DragulaModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgDraggableModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANXyIWCMat-4mtRQKFoxkwB4kfmhhRwXU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
