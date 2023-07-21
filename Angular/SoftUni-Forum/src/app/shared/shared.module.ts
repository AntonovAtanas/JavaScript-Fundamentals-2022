import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from '../user/user-routing.module';
import { ConfirmPasswordDirective } from './validators/confirm-password.directive';



@NgModule({
  declarations: [HomeComponent, ConfirmPasswordDirective],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [HomeComponent, ConfirmPasswordDirective]
})
export class SharedModule { }
