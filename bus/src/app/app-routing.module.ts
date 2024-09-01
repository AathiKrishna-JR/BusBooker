import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PlanComponent } from './plan/plan.component';
import { PayComponent } from './pay/pay.component';
import { SeatsComponent } from './seats/seats.component';
import { StepsComponent } from './steps/steps.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path:'',redirectTo:'/signup',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'plan',component:PlanComponent},
  {path:'pay',component:PayComponent},
  {path:'seats',component:SeatsComponent},
  {path:'steps',component:StepsComponent},
  {path:'ticket',component:TicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
