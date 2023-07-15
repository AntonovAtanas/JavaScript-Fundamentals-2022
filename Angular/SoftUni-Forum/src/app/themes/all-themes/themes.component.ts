import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { Theme } from '../../interfaces/Theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent implements OnInit {
  allThemes: Theme[] = [];

  constructor(private api: ApiService, private userService: UserService) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe((res) => {
      res.sort((a, b) => b.subscribers.length - a.subscribers.length);
      this.allThemes = [...res];
    });
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  // TODO: 
  get hasLiked(): boolean {
    return true;
  }
}
