import { Injectable } from '@angular/core';
import { api } from '../environmentals/server-url';

import { HttpClient } from '@angular/common/http';
import { Theme } from '../interfaces/Theme';
import { Post } from '../interfaces/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getThemes() {
    return this.http.get<Theme[]>(`${api.serverUrl}/themes`)
  };

  latestPosts(posts?: number) {
    return this.http.get<Post[]>(`${api.serverUrl}/posts${posts ? `?limit=${posts}` : ''}`)
  };

  getTheme(themeId: string){
    return this.http.get<Theme>(`${api.serverUrl}/themes/${themeId}`)
  };

  addTheme(themeName: string, postText: string): Observable<Theme>{
    // TODO
    return this.http.post<Theme>(`${api.serverUrl}/themes`, {themeName, postText});
  }
}
