import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesRoutingModule } from './themes-routing.module';
import { DetailsThemeComponent } from './details-theme/details-theme.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DetailsThemeComponent
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule,
    SharedModule
  ]
})
export class ThemesModule { }
