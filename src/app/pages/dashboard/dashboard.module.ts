import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
