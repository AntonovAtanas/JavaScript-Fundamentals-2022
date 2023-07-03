import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import {Theme} from '../../../interfaces/Theme'

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent implements OnInit {
  allThemes: Theme[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe(res => {
      this.allThemes = [...res]
    })
  }
}
