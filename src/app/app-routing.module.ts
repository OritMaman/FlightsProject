import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirplainComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"home", component:HomeComponent },

  {path:"addORedit/:id", component:AirplainComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
