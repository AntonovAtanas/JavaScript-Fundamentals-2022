import { Post } from './Post';
import { User } from './User';

export interface Theme {
  created_at: string;
  posts: any;
  subscribers: string[];
  themeName: string;
  updatedAt: string;
  userId: User;
  __v: number;
  _id: string;
}
