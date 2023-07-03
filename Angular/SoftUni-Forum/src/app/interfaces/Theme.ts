import { User } from './User';

export interface Theme {
  created_at: string;
  posts: string[];
  subscribers: string[];
  themeName: string;
  updatedAt: string;
  userId: User;
  __v: number;
}
