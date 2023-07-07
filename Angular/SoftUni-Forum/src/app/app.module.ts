import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { MainContainerComponent } from './core/main-container/main-container.component';
import { FooterComponent } from './core/footer/footer.component';
import { ThemesComponent } from './core/main-container/themes/themes.component';
import { AsideComponent } from './core/main-container/aside/aside.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/main-container/home/home.component';
import { AddThemeComponent } from './core/main-container/themes/add-theme/add-theme.component';
import { LoginComponent } from './core/main-container/user/login/login.component';
import { RegisterComponent } from './core/main-container/user/register/register.component';

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
    RegisterComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
