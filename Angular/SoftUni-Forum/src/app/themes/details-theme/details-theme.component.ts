import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Theme } from 'src/app/interfaces/Theme';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-details-theme',
  templateUrl: './details-theme.component.html',
  styleUrls: ['./details-theme.component.css']
})
export class DetailsThemeComponent implements OnInit {

  currentTheme: Theme | undefined;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];
    this.api.getTheme(id).subscribe(res => this.currentTheme = res);
  }

  get isLogged(): boolean{
    return this.userService.isLogged;
  }

  get username(): string {
    return this.userService.user?.username;
  }
}
