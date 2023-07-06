import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './core/main-container/home/home.component';
import { ThemesComponent } from './core/main-container/themes/themes.component';
import { AddThemeComponent } from './core/main-container/themes/add-theme/add-theme.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'themes', component: ThemesComponent},
  {path: 'themes/add', component: AddThemeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
