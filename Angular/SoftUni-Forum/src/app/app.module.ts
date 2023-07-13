import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { MainContainerComponent } from './core/main-container/main-container.component';
import { FooterComponent } from './core/footer/footer.component';
import { AsideComponent } from './core/main-container/aside/aside.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/main-container/home/home.component';
import { AddThemeComponent } from './themes/add-theme/add-theme.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserRoutingModule } from './user/user-routing.module';
import { ThemesComponent } from './themes/all-themes/themes.component';
import { ThemesRoutingModule } from './themes/themes-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainContainerComponent,
    FooterComponent,
    ThemesComponent,
    AsideComponent,
    HomeComponent,
    AddThemeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, UserRoutingModule, ThemesRoutingModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
