import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ThemesComponent } from './all-themes/themes.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { DetailsThemeComponent } from './details-theme/details-theme.component';

const routes: Routes = [
  {
    path: 'themes',
    children: [
      { path: '', pathMatch: 'full', component: ThemesComponent },
      { path: 'details/:themeId', component: DetailsThemeComponent}
    ],
  },
  { path: 'themes/add', component: AddThemeComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemesRoutingModule { }
