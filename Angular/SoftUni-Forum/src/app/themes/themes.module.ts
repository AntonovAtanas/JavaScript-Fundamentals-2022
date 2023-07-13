import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesRoutingModule } from './themes-routing.module';
import { DetailsThemeComponent } from './details-theme/details-theme.component';



@NgModule({
  declarations: [
    DetailsThemeComponent
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule
  ]
})
export class ThemesModule { }
