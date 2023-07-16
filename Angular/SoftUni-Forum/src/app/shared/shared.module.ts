import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from '../user/user-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [HomeComponent]
})
export class SharedModule { }
