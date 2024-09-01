import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, provideHttpClient} from '@angular/common/http';
import { withFetch } from '@angular/common/http';
import { BusService } from './bus.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { PlanComponent } from './plan/plan.component';
import { PayComponent } from './pay/pay.component';
import { SeatsComponent } from './seats/seats.component';
import { StepsComponent } from './steps/steps.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    PlanComponent,
    PayComponent,
    SeatsComponent,
    StepsComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    AuthService,BusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
