import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AddThemeComponent } from './add-theme/add-theme.component';
import { DetailsThemeComponent } from './details-theme/details-theme.component';
import { MainContainerComponent } from '../core/main-container/main-container.component';

const routes: Routes = [
  { path: 'themes/add', component: AddThemeComponent },
  {
    path: 'themes',
    children: [
      { path: '', pathMatch: 'full', component: MainContainerComponent },
      { path: ':themeId', component: DetailsThemeComponent }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemesRoutingModule {}
