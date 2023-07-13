import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ThemesComponent } from './all-themes/themes.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { DetailsThemeComponent } from './details-theme/details-theme.component';

const routes: Routes = [
  { path: 'themes/add', component: AddThemeComponent },
  {
    path: 'themes',
    children: [
      { path: '', pathMatch: 'full', component: ThemesComponent },
      { path: ':themeId', component: DetailsThemeComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemesRoutingModule {}
