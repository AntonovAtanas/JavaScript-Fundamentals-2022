import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Theme } from 'src/app/interfaces/Theme';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details-theme',
  templateUrl: './details-theme.component.html',
  styleUrls: ['./details-theme.component.css']
})
export class DetailsThemeComponent implements OnInit {

  currentTheme: Theme | undefined;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];
    this.api.getTheme(id).subscribe(res => this.currentTheme = res);
  }
}
