import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ThemesComponent } from './all-themes/themes.component';
import { AddThemeComponent } from './add-theme/add-theme.component';

const routes: Routes = [
  { path: 'themes', component: ThemesComponent },
  { path: 'themes/add', component: AddThemeComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemesRoutingModule {}
