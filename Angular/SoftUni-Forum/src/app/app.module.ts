import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { MainContainerComponent } from './core/main-container/main-container.component';
import { FooterComponent } from './core/footer/footer.component';
import { AsideComponent } from './posts/aside.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './shared/home/home.component';
import { AddThemeComponent } from './themes/add-theme/add-theme.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ThemesComponent } from './themes/all-themes/themes.component';
import { UserModule } from './user/user.module';
import { ThemesModule } from './themes/themes.module';

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
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, UserModule, ThemesModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
