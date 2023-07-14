import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';

const USER_KEY = 'user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined | any;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      
      const isUser = localStorage.getItem(USER_KEY) || '';
      this.user = JSON.parse(isUser);
    } catch (error) {
      console.log(error);
      this.user = undefined;
    }
  };

  login(): void {
    this.user = {
      email: 'atanas@abv.bg',
      username: 'Atanas'
    };

    localStorage.setItem(USER_KEY, JSON.stringify(this.user));
  };

  logout(): void{
    this.user = undefined;
    localStorage.removeItem(USER_KEY);
  }
}
