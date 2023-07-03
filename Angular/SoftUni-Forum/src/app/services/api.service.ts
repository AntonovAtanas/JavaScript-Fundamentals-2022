import { Injectable } from '@angular/core';
import { api } from '../environmentals/server-url';

import { HttpClient } from '@angular/common/http';
import { Theme } from '../interfaces/Theme';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getThemes() {
    return this.http.get<Theme[]>(`${api.serverUrl}/themes`)
  };
}
