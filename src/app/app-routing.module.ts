import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeartComponent } from './heart/heart.component';
import { SleepComponent } from './sleep/sleep.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: "Heart", component: HeartComponent
  },
  {
    path: "Sleep", component: SleepComponent
  },
  {
    path: "**", redirectTo: "Heart",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [HeartComponent, SleepComponent]
})
export class AppRoutingModule { }
